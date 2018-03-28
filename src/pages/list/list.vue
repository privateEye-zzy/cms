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
	const rand = (n=3) => {
		let chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
		let ret = ''
		for(let i=0;i<n;i++) {ret += chars[Math.ceil(Math.random()*35)]}
		return ret
	}
	export default {
		components: {myTable, myPaging},
		data(){
			return{
				curPage: 1,
				pageNum: 10,
				totalPage: 1,
				tableHeader: ['编号', '姓名', '年纪', '性别', '种类', '价格'],
				totalTable: [],
				currTable: [],
				allBody: [
					{cid:'111', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'222', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'333', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'444', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'555', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'666', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'777', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'888', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'999', name:rand(), age:'30', sex:rand(), classify:rand(),price:rand()},
					{cid:'123', name:rand(), age:'30', sex:rand(), classify:rand(),price:rand()},
					{cid:'124', name:rand(), age:'30', sex:rand(), classify:rand(),price:rand()},
					{cid:'125', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'200', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'201', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'202', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'203', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'204', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'205', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'206', name:rand(), age:'20', sex:rand(), classify:rand(),price:rand()},
					{cid:'300', name:rand(), age:'30', sex:rand(), classify:rand(),price:rand()},
					{cid:'301', name:rand(), age:'30', sex:rand(), classify:rand(),price:rand()},
					{cid:'302', name:rand(), age:'30', sex:rand(), classify:rand(),price:rand()},
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
					temp.forEach(item => {if(item['cid'] == txt){this.totalTable.push(item)}})
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