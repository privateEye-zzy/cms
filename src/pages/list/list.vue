<template>
	<div class="animated" style="visibility:hidden;">
		<div class="list">
			<dl class="ub-box ub-ver ub-between z-select-none z-margin-bottom-10-rem">
				<dt class="title z-relative z-font-size-15 z-color-fff">产品列表</dt>
				<dd @click.stop="$router.replace('proAdd')" class="addBtn ub-end ub-box ub-ver z-curPonit z-font-size-14 z-color-fff">
					<icon style="color:#fff;" name="plus" scale='1'></icon>
				</dd>
			</dl>
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
	import {dogUrl} from 'config/urlConfig.js'
	import dogSchema from 'schema/dogSchema.js'
	import dogService from 'business/dogService.js'
	export default {
		components: {myTable, myPaging},
		data(){
			return{
				curPage: 1,
				pageNum: 10,
				totalPage: 1,
				tableHeader: ['编号', '姓名', '年纪', '性别', '种类', '出售状态', '价格'],
				totalTable: [],
				currTable: [],
				allBody: [],
			}
		},
		mounted(){
			this.$nextTick(()=>{
				initVisibility(this.$el)
				this.initList()
			})
		},
		methods:{
			async initList(){
				this.allBody = await dogService.transformToVue(dogUrl['list'], 'get')
				this.searchTable('')
			},
			searchService(txt){
				this.searchTable(txt)
			},
			searchTable(txt){
				let temp = JSON.parse(JSON.stringify(this.allBody))
				this.totalTable = []
				this.currTable = []
				if(txt === ''){this.totalTable = temp}
				else{
					temp.forEach(item => {if(item['goodId'].indexOf(txt) >= 0){this.totalTable.push(item)}})
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
				this.$router.push({name: 'proEdit', params:{id: id}})
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
	.title{background: #2A3E50;padding:.5rem 1rem;}
	.title:after{content:'';position:absolute;top:calc(100% - 2px);left:100%;width:50px;height:2px;background:#2A3E50;}
	.addBtn{padding:.5rem .7rem;background:#2A3E50;border-radius:3px;}
</style>