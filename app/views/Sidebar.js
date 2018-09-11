
module.exports = {

    template: `

      <StackLayout style="padding-top:20px;">
            <ListView for="item in items" @itemTap="onItemTap">
                  <v-template >
                  <StackLayout orientation="horizontal" id="menu-sidebar" >
                     <Label class="fa" :text="item.icon"></Label>
                     <Label :text="item.name" />
                  </StackLayout>
                  </v-template>
            </ListView>
      </StackLayout>
     
    `,
    data() {
        return {
            items:[
                {name:'Productos',url:'',icon:'\uf170'},
                {name:'Mis Ordenes',url:'',icon:'\uf170'},
                {name:'Historial',url:'',icon:'\uf037'},
                {name:'Mi Perfil',url:'',icon:'\uf170'},
                {name:'Configuraciones',url:'',icon:'\uf170'},
            ]
        };
    }

}
