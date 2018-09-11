const axios = require('axios');
const Dashboard = require('./Dashboard');
const appSettings = require("application-settings");
const LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
const Loading = require('../services/loading.js');
const URLAPI = "http://appedidos.herokuapp.com/api/";
const Settings = require('../services/settings.js');
const mapActions = require('vuex').mapActions;



module.exports = {
  data() {
    return {
      user:{
        email:"",
        password:""
      },
      styles:{//STYLES OF LOGIN-VIEW
            header:{
              backgroundColor: '#c72e40',
              color: 'white'
            },
            bg:{
              backgroundColor: 'white',
              color: 'black'
            },
            tamaño:{
              width: '100%',
              height: '40%'
            }
      }
    };
  },
  
  template: `
  <Page class="page" :style="styles.bg">
  <ActionBar title="Login" id="header-login1" >
  <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
  </ActionBar>
  <FlexboxLayout flexDirection="column" :style="styles.tamaño" >
    <Label  height="20%" />
    <StackLayout id="stack-login">

     <StackLayout id="box-text">
        <Label text="Correo electronico" />
        <TextField  v-model="user.email" hint=email@mail.com id="textfield-email" />
      </StackLayout>

      <StackLayout id="box-text">
        <Label text="Contraseña" />
        <TextField secure="true" v-model="user.password" hint="password" id="textfield-password"/>
      </StackLayout>

    <Button text="Ingresar" @tap="login(user)" style="color:white;" />
    </StackLayout>
    </FlexboxLayout>
  </Page>
  `,
  created:function(){

  },
  methods:{
   login:function(user){
    var loader = new LoadingIndicator();
    loader.show(Loading.options);
    axios.post(URLAPI+"login", {
      email:user.email,
      password:user.password
    }).then((res) => {
      loader.hide();
      Settings.save(res.data);
      this.$modal.close();
      this.refreshUser();
      this.goDashboard();
      console.log(res.data.user.phone);
    }).catch((err) => {
      alert('Usuario no logeado!');
      loader.hide();
    });
        this.user.email = "";
        this.user.password = "";
   },
   goDashboard:function(){

          this.$navigateTo(Dashboard, {
          animated: true,
          transition: {},
          transitionIOS: {},
          transitionAndroid: {
              name: 'slideTop',
              duration: 100,
              curve: 'ease'
          },
          clearHistory: false
        });
   }, ...mapActions([
      'refreshToken',
      'refreshUser',
    ]),
}

};
