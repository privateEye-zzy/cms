<template>
	<div class="header z-box-sizing z-padding-h-20-rem ub-box ub-ver ub-between">
		<span class="z-curPonit ub-box ub-ver">
			<i @click.stop="focus" class="iconfont icon-sousuo z-color-333 z-font-size-36"></i>
			<input v-model='searchTxt' @keyup.13="enter($event)" @blur="blur" ref='search' type="text" :class="{'s1':isSearch==false}" class="searchBtn"/>
		</span>
		<span class="person z-select-none z-curPonit ub-box ub-ver z-font-size-16 z-color-fff">M</span>
	</div>
</template>
<script>
	let that = null
	export default {
		components: {},
		data(){
			return{
				searchTxt: '',
				isSearch: false
			}
		},
		watch:{
			"$route": ()=>{
				that.searchTxt = ''
			}
		},
		mounted(){
			that = this
		},
		methods:{
			blur(){
				if(this.searchTxt == ''){
					this.isSearch = false
					this.$parent.$children[2].searchService('')
				}
			},
			focus(){
				this.isSearch = true
				this.$refs['search'].focus()
			},
			enter(e){
				this.$parent.$children[2].searchService(this.searchTxt)
			}
		}
	}
</script>
<style scoped="scoped">
	.header{position:absolute;top:0;left:100px;right:0;background:#fff;width:calc(100% - 140px);height:70px;overflow:hidden;box-shadow:0px 5px 5px rgba(0,0,0,0.07);}
	.searchBtn{width:200px;padding:.4rem .5rem;display:inline-block;border:none;outline:none;transition:all .3s linear;font-size:1.4rem;border-bottom:1px solid #ccc;}
	.s1{width:0px;padding:0;}
	.person{width:40px;height:40px;border-radius:50%;background:#ddd;}
</style>