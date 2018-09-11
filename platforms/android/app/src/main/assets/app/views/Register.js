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
        password:"",
        phone:0,
        name:""

      },
      styles:{//STYLES OF register-VIEW
            header:{
              backgroundColor: '#c72e40',
              color: 'white'
            },
            bg:{
              backgroundImage: '~/images/bg-login.jpg',
              color: 'white'
            },
      }
    };
  },
  
  template: `
  <Page class="page" :style="styles.bg">
  <ActionBar title="Registrarse" id="header-login1" >
  <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
  </ActionBar>
  <FlexboxLayout flexDirection="column"  id="capa-bg" >
    <Label id="space-register-top" />
    <StackLayout id="stack-login">

     <StackLayout id="box-text">
        <Label text="Nombre Completo" />
        <TextField  v-model="user.name" hint=nombre completo  id="textfield-email" />
      </StackLayout>

       <StackLayout id="box-text">
        <Label text="Correo electronico" />
        <TextField  v-model="user.email" hint=email@mail.com id="textfield-email" />
      </StackLayout>

        
        <StackLayout id="box-text">
        <Label text="Telefono" />
        <TextField keyboardType="number" v-model="user.phone" hint=+57 30000000 id="textfield-email" />
      </StackLayout>


        <StackLayout id="box-text">
        <Label text="Contraseña" />
        <TextField secure="true" v-model="user.password" hint="password" id="textfield-password"/>
      </StackLayout>

    
    <Button text="Registrarse" @tap="register(user)"  />
    </StackLayout>
    </FlexboxLayout>
  </Page>
  `,
  created:function(){

  },
  methods:{
   register:function(user){
    var loader = new LoadingIndicator();
    loader.show(Loading.options);
    axios.post(URLAPI+"register", {
      name:user.name,
      email:user.email,
      password:user.password,
      phone:user.phone

    }).then((res) => {
      loader.hide();
      alert('Registrado correctamente, Realiza tu confirmación por email.')
      this.$navigateBack();
      
    }).catch((err) => {
      alert('Usuario no logeado!').then(() => { });
      loader.hide();
    });
        this.user.email = "";
        this.user.password = "";
        this.user.phone = "";
   },
   goDashboard:function(){

          this.$navigateTo(Dashboard, {
          animated: true,
          transition: {},
          transitionIOS: {},
          transitionAndroid: {
              name: 'slideLeft',
              duration: 100,
              curve: 'ease'
          },
          clearHistory: true
        });
   }, ...mapActions([
      'refreshToken',
      'refreshUser',
    ]),
}

};
