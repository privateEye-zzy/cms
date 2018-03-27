<template>
	<div class="menuPanel">
		<div class="logo ub-box ub-ver z-padding-all-20-rem">
			<icon style="color:#fff;" name="taxi" scale='2.5'></icon>
		</div>
		<dl class="ub-box ub-col">
			<dd @click="goMenus(0)" :class="{'menuActive': curIdx==0}" class="menu ub-box ub-ver z-color-fff z-curPonit z-select-none z-padding-all-20-rem">
				<icon style="color:#fff;" name="home" scale='1.3'></icon>
			</dd>
			<dd @click="goMenus(1)" :class="{'menuActive': curIdx==1}" class="menu ub-box ub-ver z-color-fff z-curPonit z-select-none z-padding-all-20-rem">
				<icon style="color:#fff;" name="location-arrow" scale='1.3'></icon>
			</dd>
			<dd @click="goMenus(2)" :class="{'menuActive': curIdx==2}" class="menu ub-box ub-ver z-color-fff z-curPonit z-select-none z-padding-all-20-rem">
				<icon style="color:#fff;" name="music" scale='1.3'></icon>
			</dd>
		</dl>
	</div>
</template>
<script>
	export default {
		components: {},
		data(){
			return{
				curIdx: 0,
				menusMap:{
					'/': 0,
					'/list2': 1,
					'/list3': 2,
				}
			}
		},
		mounted(){
			let curHash = window.location.hash.split('#')
			let k = curHash[curHash.length - 1]
			if(this.menusMap.hasOwnProperty(k)){
				this.curIdx = this.menusMap[k]
			}
		},
		methods:{
			goMenus(idx){
				this.curIdx = idx
				switch (idx){
					case 0:{this.$router.push('/');break}
					case 1:{this.$router.push('list2');break}
					case 2:{this.$router.push('list3');break}
					default:break;
				}
			}
		}
	}
</script>
<style scoped="scoped">
	.menuPanel{width:100px;height:100vh;overflow:hidden;background:#35485D;}
	.menu{transition:all .2s linear;}
	.menu:hover{background:#2A3E50;}
	.menuActive{background:#2A3E50;}
</style>