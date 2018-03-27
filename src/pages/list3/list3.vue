<template>
	<div class="animated ub-box ub-ver" style="visibility:hidden;">
		<p class="z-font-size-16">list3</p>
	</div>
</template>
<script>
	import {initVisibility} from 'utils/visibility.js'
	export default {
		components: {},
		data(){
			return{}
		},
		mounted(){
			this.$nextTick(()=>{
				initVisibility(this.$el)
			})
		},
		methods:{}
	}
</script>
<style scoped="scoped">
</style>