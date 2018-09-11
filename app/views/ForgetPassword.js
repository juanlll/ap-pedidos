const Login = require('./Login');
module.exports = {
  data() {
    return {
styles:{//STYLES OF LOGIN-VIEW
            header:{
              backgroundColor: '#c72e40',
              color: 'white'
            },
            bg:{
              backgroundImage: '~/images/bg-login.jpg',
              color: 'white'
            },

      }
    };
  },
  template: `
 <Page class="page" :style="styles.bg">
  <ActionBar title="Register" :style="styles.header">
  <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
</ActionBar>
  <FlexboxLayout flexDirection="column"  >
    <Label  height="100%" />
    <StackLayout id="stack-login">
   
    </StackLayout>
    <Label  height="90%" />

  
 
</FlexboxLayout>

 



  </Page>
  `,
  methods:{//---------------------------

  }//-----------------------------------
};
