var app = new Vue({
	el:'#app',
	data:{
		page: 1,
		tab: '',
		list:[],
		loaded: true,
		cates:[
			{id:1,title:'全部',value:''},
			{id:1,title:'精华',value:'good'},
			{id:1,title:'分享',value:'share'},
			{id:1,title:'问答',value:'ask'},
			{id:1,title:'招聘',value:'job'}
		]
		
	},
	mounted(){
		this.getList()
	},
	watch:{
		tab(val){
			this.page=1
			this.getList()
		}
	},
	methods:{
		pageHandle(type){
			if(type == 'down'){
				this.page++
				this.getList()
			}else{
				if(this.page===1){
					alert('已经是第一页了')
				}else{
					this.page--
					this.getList()
				}
			}
		},
		getList(){
			 this.loaded = false
			var params = {
				page: this.page,
				tab:this.tab,
				limit:5,
				mdrender:false
			}
			var that = this
			fetch('/topics','GET',params,function(arr){
				that.list = arr
				that.loaded = true
			})
		}
	}
})