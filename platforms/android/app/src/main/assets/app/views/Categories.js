const axios = require('axios');
const Product = require('./Product');
const numeral = require('numeral');
const LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
const Loading = require('../services/loading.js');

const URLAPI = "http://appedidos.herokuapp.com/api/";
var loader = new LoadingIndicator();

let LS = require( "nativescript-localstorage" );


module.exports = {
	created:function(){
		this.getCategories();
		this.categories = LS.getItem('categories');
	},
	data () {
		return {
			categories:[]
		};
	},
	methods:{
		getCategories(){
			loader.show(Loading.options);
			axios.get(URLAPI+'categories').then(res=>{
				loader.hide();
				LS.setItem('categories',res.data);
			}).catch(err=>{
				loader.hide();
			});
		},
		goProduct(cat){

			this.$navigateTo(Product, {
				transition: {},
				transitionIOS: {},
				transitionAndroid: {},

				context: {
					propsData: {
						id: cat.id,
						name: cat.name
					}
				}
			});

		},
		selectedItem(){
			// this.$modal.close();
		}
	},
	template: `
	<Page>

	<ActionBar title="Productos" id="header-login1" >
	<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
	</ActionBar>

	<ScrollView orientation="vertical" id="list-categories" :style="{backgroundImage: '~/images/menu.jpg'}">
	<StackLayout orientation="vertical" >
	<StackLayout id="item-category" v-for="(cat, index) in categories"  @tap="goProduct(cat)" :style="{backgroundImage: ''+cat.icon}">
	<Label :text="cat.name"  />
	</StackLayout>
	</StackLayout>
	</ScrollView>
	</Page>
	`
};