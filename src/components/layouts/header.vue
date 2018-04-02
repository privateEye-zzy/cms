<template>
	<div class="header z-box-sizing z-padding-h-20-rem ub-box ub-ver ub-between">
		<span class="z-curPonit ub-box ub-ver">
			<i @click.stop="focus" class="iconfont icon-sousuo z-color-333 z-font-size-36"></i>
			<input v-model='searchTxt' @keyup.13="enter($event)" @blur="blur" ref='search' type="text" :class="{'s1':isSearch==false}" class="searchBtn"/>
		</span>
		<div class="person z-relative z-select-none z-curPonit ub-box ub-ver">
			<span @click.stop="isPersonMenus=true;" class="ub-box ub-ver z-font-size-16 z-color-fff">M</span>
			<div @click.stop="isPersonMenus=false;" v-if="isPersonMenus" class="Slayer"></div>
			<ul :class="{'person-menu-active':isPersonMenus==true}" class="person-menu">
				<li class="ub-box ub-ver z-font-size-15 z-color-888">个人信息</li>
				<li @click.stop="toLogout" class="ub-box ub-ver z-font-size-15 z-color-888">登出</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import user from 'utils/user'
	let that = null
	export default {
		components: {},
		data(){
			return{
				isPersonMenus: false,
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
			toLogout(){
				this.isPersonMenus = false
				user.logout()
				this.$router.replace('login')
			},
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
	.header{z-index:1;position:absolute;top:0;left:100px;right:0;background:#fff;width:calc(100% - 140px);height:70px;box-shadow:0px 5px 5px rgba(0,0,0,0.07);}
	.searchBtn{width:200px;padding:.4rem .5rem;display:inline-block;border:none;outline:none;transition:all .3s linear;font-size:1.4rem;border-bottom:1px solid #ccc;}
	.s1{width:0px;padding:0;}
	.Slayer{position:fixed;top:0;bottom:0;left:0;right:0;z-index:100;background:rgba(0,0,0,0);}
	.person{width:80px;}
	.person span{width:40px;height:40px;border-radius:50%;background:#35485D;}
	.person-menu{overflow:hidden;transition:all .2s ease-in;position:absolute;top:110%;left:0;z-index:200;width:100%;height:0px;background:#fff;box-shadow: 0 2px 8px rgba(0,0,0,.45);border-radius:3px;opacity:0;}
	.person-menu-active{height:60px;opacity:1;}
	.person-menu:before{content:'';position:absolute;transform:translateX(-50%);top:-8px;left:50%;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:8px solid #fff;}
	.person-menu li{transition:all .2s linear;line-height:30px;}
	.person-menu li:hover{background:#eee;}
</style>