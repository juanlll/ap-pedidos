  const mapActions = require('vuex').mapActions;

  const MyOrder = require('../views/MyOrder');
  const Account = require('../views/Account');
  const Settings = require('../views/Settings');
  const Categories = require('../views/Categories');
  const SettingsUser = require('../services/settings.js');


  module.exports ={

   template:`



   <ScrollView orientation="vertical">
   <StackLayout orientation="vertical" id="main-menu">

   <WrapLayout id="wrap-menu" >

   <StackLayout  id="lprueba" orientation="horizontal" @tap="goCategories" >
   <Image src="~/images/png/foods.png" strench="none" id="card-image-left"  />
   <Label text="Productos" />
   </StackLayout >


     <StackLayout  id="lprueba" orientation="horizontal" @tap="goMyOrder" v-if="user_token != ''" >
   <Image src="~/images/png/shopping-basket.png" strench="none" id="card-image-left"  />
   <Label text="Mi Pedido" />
   </StackLayout >


   <StackLayout  id="lprueba" orientation="horizontal" @tap="goAccount" v-if="user_token != ''" >
   <Image src="~/images/png/account.png" strench="none" id="card-image-left"  />
   <Label text="Perfil" />
   </StackLayout >

   <StackLayout  id="lprueba-config" orientation="horizontal" @tap="goSettings" v-if="user_token != ''">
   <Image src="~/images/png/settings.png" strench="none" id="card-image-left"  />
   <Label text="Configuraciónes" />
   </StackLayout >

   

    <StackLayout  id="lprueba" orientation="horizontal" @tap="logout" v-if="user_token != ''">
   <Image src="~/images/png/box-2.png" strench="none" id="card-image-left"  />
   <Label text="Salir" />
   </StackLayout >


</WrapLayout>

  

 







   </StackLayout>
   </ScrollView>




   `,
   data () {
    return {
      option_menu:0
    };
  },
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
    }
  },
  methods:{
    goCategories:function(){

          this.$navigateTo(Categories, {
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
   goMyOrder:function(){

          this.$navigateTo(MyOrder, {
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
   goAccount:function(){

          this.$navigateTo(Account, {
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
   goSettings:function(){

          this.$navigateTo(Settings, {
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
   logout:function(){
    SettingsUser.delete();
    this.deleteUser();
    this.$navigateBack();
    console.log("session cerrada");
    }, ...mapActions([
  'refreshToken',
  'refreshUser',
  'deleteUser'
  ]),

   
}
};