<template>
	<div class="animated" style="visibility:hidden;">
		<div class="list">
			<my-table :header="tableHeader" :body="currTable" @editService='editService' @deleteService='deleteService'></my-table>
			<div class="z-margin-top-25-rem ub-box ub-ver">
				<my-paging :totle="totalPage" :curPage="curPage" @pageService='pageService'></my-paging>
			</div>
		</div>
	</div>
</template>
<script>
	import myTable from 'services/table/zTable.vue'
	import myPaging from 'services/paging/zPaging.vue'
	import {initVisibility} from 'utils/visibility.js'
	export default {
		components: {myTable, myPaging},
		data(){
			return{
				curPage: 1,
				pageNum: 3,
				totalPage: 1,
				tableHeader: ['芯片号', '姓名', '年纪', '性别', '种类', '价格'],
				totalTable: [],
				currTable: [],
				allBody: [
					{cid:'111', name:'111', age:'20', sex:'111', classify:'111',price:'111'},
					{cid:'222', name:'111', age:'20', sex:'111', classify:'111',price:'111'},
					{cid:'333', name:'111', age:'20', sex:'111', classify:'111',price:'111'},
					{cid:'444', name:'111', age:'20', sex:'111', classify:'111',price:'111'},
					{cid:'555', name:'111', age:'20', sex:'111', classify:'111',price:'111'},
					{cid:'666', name:'111', age:'20', sex:'111', classify:'111',price:'111'},
					{cid:'777', name:'111', age:'20', sex:'111', classify:'111',price:'111'},
					{cid:'888', name:'111', age:'20', sex:'111', classify:'111',price:'111'},
					{cid:'999', name:'111', age:'30', sex:'111', classify:'111',price:'111'},
					{cid:'123', name:'111', age:'30', sex:'111', classify:'111',price:'111'},
					{cid:'124', name:'111', age:'30', sex:'111', classify:'111',price:'111'},
				],
			}
		},
		mounted(){
			this.$nextTick(()=>{
				initVisibility(this.$el)
				this.searchTable('')
			})
		},
		methods:{
			searchService(txt){
				this.searchTable(txt)
			},
			searchTable(txt){
				let temp = JSON.parse(JSON.stringify(this.allBody))
				this.totalTable = []
				this.currTable = []
				if(txt === ''){this.totalTable = temp}
				else{
					temp.forEach(item => {if(item['age'] == txt){this.totalTable.push(item)}})
				}
				this.resetPaging(this.totalTable)
				this.renderTable(this.totalTable)
			},
			resetPaging(ret){
				this.curPage = 1
				this.totalPage = Math.ceil(ret.length / this.pageNum)
			},
			renderTable(ret){
				let temp = JSON.parse(JSON.stringify(ret))
				this.currTable = temp.splice((this.curPage - 1) * this.pageNum, this.pageNum)
			},
			pageService(idx){
				this.curPage = idx
				this.renderTable(this.totalTable)
			},
			editService(id){
				this.$router.push('form')
			},
			deleteService(id){
				this.$confirm({
			    	info: '确认删除该商品？',
			    	click (type) {console.log(type)} 
			    })
			}
		}
	}
</script>
<style scoped="scoped">
	.list{margin:3rem auto;width:calc(100% - 60px);height:calc(100% - 100px);}
</style>