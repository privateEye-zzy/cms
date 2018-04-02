<template>
	<div class="ub-box ub-ver-v z-height-100-percent">
		<div class="layer" @click.stop="$parent.$parent.$children[1].$el.style.zIndex=10;$emit('close')"></div>
		<div style="z-index:3001;" class="foreign-panel z-select-none ub-box ub-col z-width-100-percent z-height-100-percent">
			<div class="z-relative z-margin-bottom-20-rem ub-box ub-ver z-width-100-percent z-padding-v-20-rem" style="background:#2A3E50;">
				<span class="z-color-fff z-font-size-16">{{label}}</span>
			</div>
			<dl style="height:100%;overflow-y:scroll;" class="z-padding-v-20-rem">
				<z-radio v-model="currVal" :list="Object.values(map)"></z-radio>
			</dl>
			<div style="border-top:1px solid #eee;" class="ub-box ub-ver z-padding-v-25-rem">
				<span @click.stop="clickSure" class="z-font-size-14 z-color-fff z-curPonit z-padding-all-10-rem z-border-radius-3" style="background:#f25807;">确定</span>
				<span @click.stop="$parent.$parent.$children[1].$el.style.zIndex=10;$emit('close')" class="z-font-size-14 z-color-fff z-curPonit z-padding-all-10-rem z-border-radius-3 z-margin-left-16-rem" style="background:#757575;">取消</span>
			</div>
		</div>
	</div>
</template>
<script>
	import zRadio from 'services/form/zRadio.vue'
	export default {
		components: {zRadio},
		props: ['label', 'map', 'value'],
		data(){
			return{
				currVal: '',
			}
		},
		mounted(){
			for(let k in this.map){
				if(k === this.value){
					this.currVal = this.map[k]
				}
			}
			this.$parent.$parent.$children[1].$el.style.zIndex = 0
		},
		methods:{
			clickSure(){
				for(let k in this.map){
					if(this.map[k] === this.currVal){
						this.$emit('input', k)
						break
					}
				}
				this.$parent.$parent.$children[1].$el.style.zIndex = 10
				this.$emit('close')
			}
		}
	}
</script>
<style scoped="scoped">
	.layer{position: fixed;top: 0;right: 0;bottom: 0;left: 0; background: rgba(0,0,0,.8); z-index: 3000;}
	.foreign-panel{animation:fAnima .5s forwards;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:60%;height:300px;background:#fff;}
	@keyframes fAnima{
		from{top:5%}
		to{top:40%}
	}
</style>