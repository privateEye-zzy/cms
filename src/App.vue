<template>
 <div id="app">
 	<my-menu></my-menu>
 	<my-header></my-header>
    <router-view class="view"></router-view>
 </div>
</template>
<script>
	import myMenu from 'layouts/menu.vue'
	import myHeader from 'layouts/header.vue'
	export default {
		components: {myMenu, myHeader},
	  	name: 'App',
	}
</script>
<style>
	#app{position:relative;overflow:hidden;width:100vw;height:100vh;background:#F4F6FA;}
	.view{position:absolute;top:70px;left:100px;right:0;bottom:0;}
	::-webkit-scrollbar {width:6px;}
	::-webkit-scrollbar-track {border-radius:6px;background:#eee;}
	::-webkit-scrollbar-thumb {border-radius:6px;background:#2A3E50;}
</style>
