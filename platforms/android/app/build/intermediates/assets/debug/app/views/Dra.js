const textViewModule = require("tns-core-modules/ui/text-view");

module.exports = {
    template: `
 <Page>	

	<ActionBar title="dra" id="header-login1" >
	  <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
	</ActionBar>

	<FlexboxLayout flexDirection="column" backgroundColor="#3c495e" style="width:100%;">
	  <Label text="first" height="70" backgroundColor="#43b883"/>
	  <Label text="second" height="70" backgroundColor="#1c6b48"/>
	  <Label text="third" height="70" backgroundColor="#289062"/>
	</FlexboxLayout>
 
</Page>
    `,methods: {
    },
    data() {
        return {
        };
    }
}