  const mapActions = require('vuex').mapActions;
  const Login = require('../views/Login');
  const Register = require('../views/Register');
  const Settings = require('../services/settings.js');
  const appSettings = require("application-settings");

module.exports ={

	template:`
	   <FlexboxLayout alignItems="flex-start">
         <Button v-if="user_token === '' "  width="100%" text="Ingresar" @tap="goLogin()"   />
         <Button v-if="user_token === '' "  width="100%" text="Registrarse" @tap="goRegister()"  id="btn-login" />
       </FlexboxLayout>`,
       computed: {
      user_name (){
        return (this.$store.state.user.name);
      },
      user_email (){
        return (this.$store.state.user.email);
      },
      user_token (){
        return (this.$store.state.user.token);
      },
      user_created_at (){
        return (this.$store.state.user.created_at);
      },
      user_updated_at (){
        return (this.$store.state.user.updated_at);
      },
      show_btnout(){
        if(this.$store.state.user.token === '' ){
           return false;
        }

        return true;
        
      }
    },
    methods:{

  goLogin(){ 
    this.$showModal(Login);
  },
  goRegister(){
    this.$navigateTo(Register, {
      animated: true,
      transition: {},
      transitionIOS: {},
      transitionAndroid: {
        name: 'slideLeft',
        duration: 100,
        curve: 'ease'
      },
      clearHistory: false
    });
  },
  logout (){
    Settings.delete();
    this.deleteUser();
  }

  ,...mapActions([
      'refreshToken',
      'refreshUser',
      'deleteUser',
    ]),

   }
};
   