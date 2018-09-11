const Dra = require('./Dra');
const drawerModule = require("nativescript-ui-sidedrawer");

module.exports = {

    template: `
  <Page>
<GridLayout rows="*">
  <RadSideDrawer ref="drawer">
    <StackLayout ~drawerContent class="drawerContent">
      <StackLayout height="46" style="text-align: center; vertical-align: center;">
        <Label text="Navigation Menu" />
      </StackLayout>
      <StackLayout>
        <Label text="My Dash" padding="5"/>
        <Label text="My Nest Steps" padding="5"/>
        <Label text="Tips" padding="5"/>
        <Label text="Budget" padding="5"/>
        <Label text="Lessons" padding="5"/>
        <Label text="Spending Habits" padding="5"/>
        <Label text="How Do I Compare?" padding="5"/>
        <Label text="Progress Tracker" padding="5"/>
        <Label text="My Settings" padding="5"/>
      </StackLayout>
      <Label text="Logout" color="lightgray" padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap" />
    </StackLayout>
    <StackLayout ~mainContent>
      <Button text="Open Drawer" @tap="onOpenDrawerTap" margin="10" style="horizontal-align: left" />
    </StackLayout>
  </RadSideDrawer>
</GridLayout>
  
    </Page>
    `,
    data() {
        return {
        };
    },
     mounted: function () {
    this.$refs.drawer.nativeView.drawerTransition = new drawerModule.PushTransition();
  },
  methods: {
    onOpenDrawerTap() {
      alert("hola mundo");
      this.$refs.drawer.nativeView.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.nativeView.closeDrawer();
    },
    show() {
      this.$refs.drawer.nativeView.showDrawer();
    }
  }
}
