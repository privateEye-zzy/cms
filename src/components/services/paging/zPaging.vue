<template>
	<div class="z-width-100-percent">
		<ul class="paging z-select-none ub-box ub-ver">
			<li @click.stop="page(i)" v-for='i in totle' :class="{'pageActive': i==curPage}" class="page ub-box ub-ver">{{i}}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props:['totle', 'curPage'],
		data(){
			return{
				curPageNum:1,
			}
		},
		mounted(){},
		methods:{
			page(idx){
				//if(this.curPageNum == idx){return}
				this.curPageNum = idx
				this.$emit('pageService', idx)
			}
		}
	}
</script>
<style scoped="scoped">
	.paging{width:60%;margin:auto;}
	.page{transition:all .2s linear;cursor:pointer;padding:.2rem;border-radius:4px;width:20px;height:20px;border:1px solid #eee;background:#fff;margin-right:1rem;font-size:1.2rem;color:#888;}
	.page:hover{background:#35485D;color:#fff;}
	.pageActive{background:#35485D;color:#fff;}
</style>