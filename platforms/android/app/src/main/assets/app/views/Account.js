const mapActions = require('vuex').mapActions;
module.exports = {
    template: `
        <Page>
          <ActionBar title="Mi Cuenta" id="header-login1" >
          <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
          </ActionBar>
  
        <StackLayout id="account-page">

  <StackLayout orientation="horizontal" id="account-header">
        <StackLayout id="account-image-header">
            <Image src="~/images/png/thumb.jpg" strench="fill" />
        </StackLayout>
        <StackLayout id="header-text">
            <Label id="header-title" :text="user_name" />
            <Label id="header-description" text="Activo" />
        </StackLayout>
</StackLayout>

 <StackLayout id="account-body">

    <StackLayout id="box-text-account">
        <Label text="Nombre Completo" />
        <TextField  hint=nombre completo  id="textfield-email" v-model="user_name" />
      </StackLayout>

       <StackLayout id="box-text-account">
        <Label text="Correo electronico" />
        <TextField  hint=email@mail.com id="textfield-email" v-model="user_email" />
      </StackLayout>

        
        <StackLayout id="box-text-account">
        <Label text="Telefono" />
        <TextField keyboardType="number" hint=+57 30000000 id="textfield-email"  v-model="user_phone"/>
      </StackLayout>


        <StackLayout id="box-text-account">
        <Label text="Contraseña" />
        <TextField secure="true"  hint="password" id="textfield-password" v-model="user_password"/>
      </StackLayout>

    </StackLayout>


<Button text="Guardar" @tap="" id="account-footer" />

 
  
</StackLayout>
        </Page>
    `,methods: {
    },
    computed: {
    user_name (){
      return (this.$store.state.user.name);
    },
    user_email (){
      return (this.$store.state.user.email);
    },
    user_phone (){
      return (this.$store.state.user.phone);
    },
    user_token (){
      return (this.$store.state.user.token);
    },
    user_created_at (){
      return (this.$store.state.user.created_at);
    },
    user_updated_at (){
      return (this.$store.state.user.updated_at);
    }
  },
    data() {
        return {
        };
    }
} 