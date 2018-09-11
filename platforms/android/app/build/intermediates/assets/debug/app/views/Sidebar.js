

module.exports = {

    template: `

      <StackLayout>
            <ListView for="item in items" @itemTap="onItemTap">
                  <v-template >
                   <Label class="fa" :text="'fa-user' | fonticon" />
                   <Label :text="item.name" style="font-size:18px; color:black;" />
                  </v-template>
            </ListView>
      </StackLayout>
     
    `,
    data() {
        return {
            items:[
                {name:'Productos',url:'',icon:''},
                {name:'Mis Ordenes',url:'',icon:''},
                {name:'Historial',url:'',icon:''},
                {name:'Mi Perfil',url:'',icon:''},
                {name:'Configuraciones',url:'',icon:''},
                {name:'Cerras Sessión',url:'',icon:''},

            ]
        };
    }

}
