const Menu = require('../components/Menu');
const appSettings = require("application-settings");
const axios = require('axios');
const APIURL = "http://appedidos.herokuapp.com/api/";
const Settings = require('../services/settings.js');
const mapActions = require('vuex').mapActions;
const applicationModule = require("tns-core-modules/application");
const Sidebar = require("./Sidebar");
const drawerModule = require("nativescript-ui-sidedrawer");


module.exports = {
  template: `
  <Page class="page">
  <ActionBar title="My App" style="background-color:#3cb963; color:white;">
  <NavigationButton text="Go back" android.systemIcon="ic_menu_sort_by_size" @tap="onOpenDrawerTap()" />
  </ActionBar>


 <GridLayout rows="*">
  <RadSideDrawer ref="drawer">
   <StackLayout ~drawerContent class="drawerContent">
     <sidebar></sidebar>
    <StackLayout orientation="horizontal" id="menu-sidebar1" @tap="logout()">
       <Label class="fa" text="\uf00d"></Label>
       <Label text="Cerrar Sessión" />
    </StackLayout>
   </StackLayout>
    <StackLayout ~mainContent>
      <Button text="Open Drawer" @tap="onOpenDrawerTap" margin="10" style="horizontal-align: left" />
    </StackLayout>
  </RadSideDrawer>
</GridLayout>
  </Page>
  
  `,
  data() {
    return {

    };
  },
  components: {
    Sidebar
  },
  mounted: function () {
    this.$refs.drawer.nativeView.drawerTransition = new drawerModule.PushTransition();
  },
  methods:{
    gof(){
      this.$router.push('/dra');
    },
   onOpenDrawerTap() {
    this.$refs.drawer.nativeView.showDrawer();
  },
  onCloseDrawerTap() {
    this.$refs.drawer.nativeView.closeDrawer();
  },
  show() {
    this.$refs.drawer.nativeView.showDrawer();
  },
  opens(){
    this.$refs.drawer.nativeView.showDrawer();
  },
  showImage(){
   setInterval(function () {
    this.show_image = this.show_image + 1;
    if(this.show_image == 6){this.show_image = 1;}


    console.log(this.show_image);
  }.bind(this), 5000); 

 },
 logout(){
  Settings.delete();
  this.refreshUser();
  this.$navigateBack();
}
,...mapActions([
  'refreshToken',
  'refreshUser',
  ]),
}


};
