<template>
	<div class="animated list-main" style="visibility:hidden;">
		<div class="list-container">
			<!--表单样式-->
			<div class="form-box">
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input :label="'输入框'"></z-input>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-radio :label="'单选框'" :list="['单选框1', '单选框2', '单选框3']"></z-radio>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['dateValue']" :label="'日期选择'" :readonly="true" @focus="dateFlag=true"></z-input>
					<div v-if="dateFlag" class="z-width-100-precent ub-box ub-end" style="height:25rem;">
						<div style="width:calc(100% - 220px);height:100%;">
							<z-date :type="'day'" v-model="formData['dateValue']" @close="dateFlag=false"></z-date>
						</div>
					</div>
				</div>
				<div style="width:calc(200px + 50%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['cityValue']" :label="'地点选择'" :readonly="true" @focus="cityFlag=true"></z-input>
					<div v-if="cityFlag" class="z-width-100-percent ub-box ub-end">
						<div style="width:calc(100% - 220px);height:100%;">
							<z-city v-model="formData['cityValue']" @close="cityFlag=false"></z-city>
						</div>
					</div>
				</div>
				<div style="width:calc(200px + 12%);" class="z-margin-bottom-40-rem">
					<z-select :label="'下拉框'" :list="['下拉框1', '下拉框2', '下拉框3']"></z-select>
				</div>
				<div style="height:160px;width:calc(200px + 60%);" class="z-margin-bottom-40-rem">
					<z-text-area :label="'区域'"></z-text-area>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-check-box :label="'多选框'" :list="['多选框1',	'多选框2', '多选框3', '多选框4']"></z-check-box>
				</div>
				<div style="height:450px;width:100%;" class="z-margin-bottom-40-rem">
					<z-upload-img :label="'图片选择'"></z-upload-img>
				</div>
				<div style="width:100%;" class="z-margin-bottom-40-rem">
					<z-upload-video :label="'视频选择'"></z-upload-video>
				</div>
				<div class="ub-box ub-ver submit-panel">
					<div style="background:#f25807;width:158px;" class="ub-box ub-ver z-padding-all-10-rem z-color-fff z-font-size-16 form-btn z-curPonit">保存</div>
					<div style="background:#757575;width:158px;" class="z-margin-left-20-rem ub-box ub-ver z-padding-all-10-rem z-color-fff z-font-size-16 form-btn  z-curPonit">取消</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import zInput from 'services/form/zInput.vue'
	import zTextArea from 'services/form/zTextArea.vue'
	import zRadio from 'services/form/zRadio.vue'
	import zCheckBox from 'services/form/zCheckBox.vue'
	import zUploadImg from 'services/form/zUploadImg.vue'
	import zUploadVideo from 'services/form/zUploadVideo.vue'
	import zCity from 'services/form/zCity.vue'
	import zDate from 'services/form/zDate.vue'
	import zSelect from 'services/form/zSelect.vue'
	import FileVedioLoader from 'utils/FileVedioLoader.js'
	import {initVisibility} from 'utils/visibility.js'
	export default {
		components: {zInput, zTextArea, zRadio, zCheckBox, zCity, zDate, zSelect, zUploadImg, zUploadVideo},
		data(){
			return{
				cityFlag: false,
				dateFlag: false,
				formData:{
					cityValue:'',
					dateValue:'',
				}
			}
		},
		mounted(){
			this.$nextTick(()=>{
				initVisibility(this.$el)
			})
		},
		methods:{}
	}
</script>
<style scoped>
	.list-main{}
	.list-container{overflow-y:scroll;width:1226px;height:100%;position:relative;margin:auto;}
	.form-box{border-radius:4px;margin:30px 0;padding:50px 0 50px 0;background:#fff;}
	.title{position:relative;font-size:1.4rem;color:#888;margin-bottom:2rem;padding:1.4rem 1rem;background:#e7e7e7;}
	.title:after{content:'';position:absolute;bottom:0;left:0;width:120px;height:3px;background:#35485D;}
	.submit-panel{z-index:3000;position:fixed;bottom:0;left:calc((100% - 1226px - 100) / 2);width:1226px;border-top:1px solid #eee;background:#fff;padding:2rem 0;}
</style>