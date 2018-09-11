const ListProducts = require('../components/ListProducts');
const axios = require('axios');
const URLAPI = "http://appedidos.herokuapp.com/api/";
const numeral = require('numeral');
const LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
const Loading = require('../services/loading.js');
var loader = new LoadingIndicator();

module.exports = {
  props:['id','name'],
  template: `
  <Page >
  <ActionBar :title="name" id="header-login1" >

  <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
  <ActionItem @tap="showModal()"
  ios.systemIcon="2" ios.position="right"
  android.systemIcon="ic_menu_edit"  />
  </ActionBar>
  <ScrollView orientation="vertical" id="list-productos">
  <Lable id="mensaje-vacio" v-if="!products" text="Carta Vacia" />
  <StackLayout  v-if="products">
  <StackLayout orientation="horizontal"> 
  </StackLayout>
  <AbsoluteLayout v-for="(item,index) in products" id="item-carta">
  <Image left="0" top="0"  id="card" :src="'http://appedidos.herokuapp.com/images/products/'+item.image" strench="fill" />
  <StackLayout id="card-footer">

  <FlexboxLayout>
  <Label id="card-title" :text="item.name"/>
  <Label :text="priceFormat(item.price)" id="card-price" />
  </FlexboxLayout>

  </StackLayout>

  </AbsoluteLayout>

  </StackLayout>
  </ScrollView>
  </Page>
  `,
  created:function(){
    this.getProducts(this.id);
  },
  data() {
    return {
      products:[],
      categories:[]
    };
  },
  methods: {
   priceFormat:function(numbers){
    return numeral(numbers).format('($0,0)');
  },
  getProducts(id){
    loader.show(Loading.options);
    axios.get(URLAPI+"products/"+id)
    .then(res=>{
      loader.hide();
      this.products = res.data;
    }).catch(err=>{
        alert("Error:"+err);
    });
      },
      showModal(){
       alert("trasladado");
      }
 }
}