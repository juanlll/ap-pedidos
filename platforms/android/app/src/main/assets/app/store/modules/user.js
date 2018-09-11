const appSettings = require("application-settings");
const state = {
  name:appSettings.getString("user.name"),
  email:appSettings.getString("user.email"),
  token:appSettings.getString("token"),
  phone:appSettings.getString("user.phone"),
  created_at:appSettings.getString("user.created_at"),
  updated_at:appSettings.getString("user.updated_at")
};
   
const mutations = {
  refreshToken (state) {
    state.token = appSettings.getString("token");
  },
  refreshUser (state) {
    state.name = appSettings.getString("user.name");
    state.email = appSettings.getString("user.email");
    state.token = appSettings.getString("token");
    state.phone = appSettings.getString("user.phone");
    state.created_at = appSettings.getString("user.created_at");
    state.updated_at = appSettings.getString("user.updated_at");
  },
  deleteUser (state){
    state.name = "";
    state.email = "";
    state.token = "";
    state.phone = "";
    state.created_at = "";
    state.updated_at = "";

  }
};

const actions = {
  refreshToken: ({commit}) => commit('refreshToken'),
  refreshUser: ({commit}) => commit('refreshUser'),
  deleteUser: ({commit}) => commit('deleteUser'),
};

module.exports = {
  state,
  mutations,
  actions,
};
