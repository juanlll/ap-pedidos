const Login = require('./Login');
const Dashboard = require('./Dashboard');
const Register = require('./Register');
const appSettings = require("application-settings");
const HomeButtons = require('../components/HomeButtons');

module.exports = {
  components:{
    HomeButtons
  },
  data() {
    return {
      auth_check:"",
      show_auth:false,
styles:{//STYLES OF LOGIN-VIEW
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
<Page class="page" :style="styles.bg" actionBarHidden="true">
<ActionBar title="Home" id="header-login" />
<FlexboxLayout flexDirection="column" id="capa-bg">
  <Image id="logo" src="~/images/fastfood.png" stretch="fill"  />
  
   <StackLayout id="stack-login"> 
      <home-buttons></home-buttons>
     <Button  text="Entrar" @tap="goDashboard()" id="btn-entrar"/>
   </StackLayout>
</FlexboxLayout>
</Page>
`,
methods:{
   goDashboard(){
    this.$navigateTo(Dashboard, {
      animated: true,
      transition: {},
      transitionIOS: {},
      transitionAndroid: {
        name: 'slideTop',
        duration: 500,
        curve: 'ease'
      },
      clearHistory: false
    });
  }

  }//-----------------------------------
};
