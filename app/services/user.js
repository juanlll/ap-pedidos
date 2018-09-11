const appSettings = require("application-settings");

module.exports ={

user:{
	name:appSettings.getString("user.name"),
	email:appSettings.getString("user.email"),
	token:appSettings.getString("token")
},
   getToken: function() {
    return this.user.email;
  }
}