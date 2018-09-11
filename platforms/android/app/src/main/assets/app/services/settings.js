const appSettings = require("application-settings");
module.exports = {
		save(data){
		appSettings.setString("token",data.token);
          appSettings.setString("user.email",data.user.email);
          appSettings.setString("user.name",data.user.name);
          appSettings.setString("user.phone",""+data.user.phone);
          appSettings.setString("user.updated_at",data.user.updated_at);
          appSettings.setString("user.created_at",data.user.created_at);
          console.log("token",data.token);
	},

	delete(){
		  appSettings.setString("token","");
          appSettings.setString("user.email","");
          appSettings.setString("user.name","");
          appSettings.setString("user.phone","");
          appSettings.setString("user.updated_at","");
          appSettings.setString("user.created_at","");
	}
}