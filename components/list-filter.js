Vue.component(`list-filter`,{
	props:{
		cates:{
			type:Array,
			require:true
		},
		value:{
			type:String,
			require:false,
			default:''
		}
	},
	template:`
	  <div class='cates'>
	   <span
	     v-for='(ele) in cates'
	     :class='{"on": ele.value == value}'
	     @click='change(ele.value)'
	     v-text='ele.title'>
	   </span>
	  </div>
	`,
	methods:{
	change(value){
		this.$emit('input',value)
	}
 }
})