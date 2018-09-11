var axios = require("axios");
const URLAPI = "http://appedidos.herokuapp.com/api/";
const Dashboard = require('../views/Dashboard');
const LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
const Loading = require('./loading.js');
const Settings = require('./settings.js');



module.exports =  {
	login(user){
		var loader = new LoadingIndicator();
		loader.show(Loading.options);
		axios.post(URLAPI+"login", {
			email:user.email,
			password:user.password
		}).then((res) => {
			loader.hide();
			Settings.saveSettings(res);
		}).catch((err) => {
			alert('Usuario no logeado!').then(() => { });
			loader.hide();
		});
	},
	register(){
		axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
			console.log(res.data);
		}).catch(er=>{
			console.log(er);
		});
	}



}