

module.exports = {
	props:['products'],
	template:`
	 <ScrollView orientation="vertical" id="list-productos">
       <StackLayout  >
          <StackLayout orientation="horizontal" backgroundColor="#3c495e"> 
          </StackLayout>
 <AbsoluteLayout v-for="(item,index) in products">
  <Image left="0" top="0"  id="card" :src="item.image" strench="fill"/>
  <StackLayout id="card-footer">
           <Label id="card-title" :text="item.name"/>
           <Label id="card-description" :text="item.description" textWrap="true"  editable="false"/>
   </StackLayout>
      <Label :text="'$'+item.price" id="card-price" />
      </AbsoluteLayout>
      </StackLayout>
    </ScrollView>
`
	

}