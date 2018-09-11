const Vue = require('nativescript-vue');
const Home = require('./views/Home');
const SocketIO = require('nativescript-socket.io');
const socketio = SocketIO.connect('https://socketpedidos.herokuapp.com');
const LocalNotifications = require("nativescript-local-notifications");
const application = require("tns-core-modules/application");


Vue.registerElement('CardView', () => require('nativescript-cardview'));
const drawerModule = require("nativescript-ui-sidedrawer");
const store = require('./store');
// socketio.on('connect', function(){
// 	console.log('connect');
// });
 

 Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

new Vue({
	render: h => h(Home),  
	 store
}).$start();
