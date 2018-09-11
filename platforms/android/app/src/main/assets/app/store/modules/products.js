const axios = require('axios');


function getProducts(id){
let products = [];
axios.get('http://appedidos.herokuapp.com/api/categories/'+id).then(res=>{
  products = res.data;
}).catch(err=>{
  console.log(err);
});
return products;
}


const state = {
      products:getProducts(1)
};
   
const mutations = {
  getProducts(state,{id}) {
      state.products = getProducts(id);
  }
 
};

const actions = {
  getProducts: ({commit}) => commit('getProducts',{
    id
  })
};

const getters = {
    products: state => state.products
  }

module.exports = {
  state,
  mutations,
  actions,
};
