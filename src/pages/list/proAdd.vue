<template>
	<div class="animated list-main" style="visibility:hidden;">
		<div class="list-container">
			<!--表单样式-->
			<div class="form-box">
				<p class="title">基本属性</p>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['goodId']" :label="'芯片编号'"></z-input>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['name']" :label="'姓名'"></z-input>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['price']" :label="'价格'"></z-input>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['sex']" :label="'性别'" :list="['公','母']"></z-radio>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['age']" :label="'年纪'"></z-input>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['birth_date']" :label="'出身日期'" :readonly="true" @focus="dateFlag1=true"></z-input>
					<div v-if="dateFlag1" class="z-width-100-precent ub-box ub-end" style="height:25rem;">
						<div style="width:calc(100% - 220px);height:100%;">
							<z-date :type="'day'" v-model="formData['birth_date']" @close="dateFlag1=false"></z-date>
						</div>
					</div>
				</div>
				<div style="width:calc(200px + 50%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['birth_place']" :label="'出生地'" :readonly="true" @focus="cityFlag1=true"></z-input>
					<div v-if="cityFlag1" class="z-width-100-percent ub-box ub-end">
						<div style="width:calc(100% - 220px);height:100%;">
							<z-city v-model="formData['birth_place']" @close="cityFlag1=false"></z-city>
						</div>
					</div>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['breed']" :label="'犬种'" :list="['种公','种母', '预留种', '幼犬']"></z-radio>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['varieties']" :label="'品种'" :list="['马犬', '昆明犬狼青', '昆明犬草黄', '昆明犬黑背']"></z-radio>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['sell_state']" :label="'出售状态'" :list="['待售', '出售','已售', '特价']"></z-radio>
				</div>
				<div style="width:calc(200px + 50%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['sell_place']" :label="'出售地'" :readonly="true" @focus="cityFlag2=true"></z-input>
					<div v-if="cityFlag2" class="z-width-100-percent ub-box ub-end">
						<div style="width:calc(100% - 220px);height:100%;">
							<z-city v-model="formData['sell_place']" @close="cityFlag2=false"></z-city>
						</div>
					</div>
				</div>
				<div style="width:calc(200px + 10%);" class="z-margin-bottom-40-rem">
					<z-select v-model="formData['is_hot']" :label="'是否热门'" :list="['是','否']"></z-select>
				</div>
				<div style="height:160px;width:calc(200px + 60%);" class="z-margin-bottom-40-rem">
					<z-text-area v-model="formData['good_desc']" :label="'产品描述'"></z-text-area>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['is_competition']" :label="'是否参赛'" :list="['是', '否']"></z-radio>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['is_winning']" :label="'是否获奖'" :list="['是', '否']"></z-radio>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['winning_rank']" :label="'获奖名次'"></z-input>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['host_unit']" :label="'主办单位'"></z-input>
				</div>
				<div style="width:calc(200px + 50%);" class="z-margin-bottom-40-rem">
					<z-input :value="foreignMap[formData['father']]" :label="'父亲选择'" :readonly="true" @focus="foreignFlag1=true"></z-input>
					<div v-if="foreignFlag1" class="z-width-100-percent ub-box ub-end">
						<z-foreign-radio v-model="formData['father']" :label="'父亲选择'" :map="foreignMap" @close="foreignFlag1=false"></z-foreign-radio>
					</div>
				</div>
				<div style="width:calc(200px + 50%);" class="z-margin-bottom-40-rem">
					<z-input :value="foreignMap[formData['mother']]" :label="'母亲选择'" :readonly="true" @focus="foreignFlag2=true"></z-input>
					<div v-if="foreignFlag2" class="z-width-100-percent ub-box ub-end">
						<z-foreign-radio v-model="formData['mother']" :label="'母亲选择'" :map="foreignMap" @close="foreignFlag2=false"></z-foreign-radio>
					</div>
				</div>
				<p class="title">疫苗情况</p>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['first_vaccine_time']" :label="'第一次注射'" :readonly="true" @focus="dateFlag2=true"></z-input>
					<div v-if="dateFlag2" class="z-width-100-precent ub-box ub-end" style="height:25rem;">
						<div style="width:calc(100% - 220px);height:100%;">
							<z-date :type="'day'" v-model="formData['first_vaccine_time']" @close="dateFlag2=false"></z-date>
						</div>
					</div>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['first_vaccine_name']" :label="'疫苗名称'" :list="['卫佳', '因特威']"></z-radio>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-check-box v-model="formData['first_vaccine_type']" :label="'疫苗'" :list="['狂犬病',	'犬瘟热',	'细小病病毒','传染性肝炎','钩端螺旋体','副流感']"></z-check-box>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['second_vaccine_time']" :label="'第二次注射'" :readonly="true" @focus="dateFlag3=true"></z-input>
					<div v-if="dateFlag3" class="z-width-100-precent ub-box ub-end" style="height:25rem;">
						<div style="width:calc(100% - 220px);height:100%;">
							<z-date :type="'day'" v-model="formData['second_vaccine_time']" @close="dateFlag3=false"></z-date>
						</div>
					</div>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['second_vaccine_name']" :label="'疫苗名称'" :list="['为佳', '因特围']"></z-radio>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-check-box v-model="formData['second_vaccine_type']" :label="'疫苗'" :list="['狂犬病',	'犬瘟热',	'细小病病毒','传染性肝炎','钩端螺旋体','副流感']"></z-check-box>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['third_vaccine_time']" :label="'第三次注射'" :readonly="true" @focus="dateFlag4=true"></z-input>
					<div v-if="dateFlag4" class="z-width-100-precent ub-box ub-end" style="height:25rem;">
						<div style="width:calc(100% - 220px);height:100%;">
							<z-date :type="'day'" v-model="formData['third_vaccine_time']" @close="dateFlag4=false"></z-date>
						</div>
					</div>
				</div>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['third_vaccine_name']" :label="'疫苗名称'" :list="['为佳', '因特围']"></z-radio>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-check-box v-model="formData['third_vaccine_type']" :label="'疫苗'" :list="['狂犬病',	'犬瘟热',	'细小病病毒','传染性肝炎','钩端螺旋体','副流感']"></z-check-box>
				</div>
				<p class="title">物理信息</p>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-check-box v-model="formData['body_surface']" :label="'体表'" :list="['体格健壮 ', '营养充足', '过瘦弱', '背柱和肋骨显露', '胖瘦适中']"></z-check-box>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-check-box v-model="formData['back_hair']" :label="'背毛'" :list="['柔润', '光亮', '干净', '整齐', '挽毛', '贴身']"></z-check-box>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['eye_color']" :label="'眼睛颜色'" :list="['暗褐色', '杏核型', '杏黄色']"></z-radio>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['hair_color']" :label="'毛色'" :list="['昆明犬狼青', '昆明犬草黄', '昆明犬黑背', '褐色', '黄色', '红色']"></z-radio>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['shape']" :label="'体型'" :list="['中等', '偏大',  '偏小']"></z-radio>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['courage']" :label="'胆量'" :list="['胆大', '一般', '胆小', '极度胆小']"></z-radio>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['attack']" :label="'攻击性'" :list="['强', '一般',  '弱', '无', '幼犬']"></z-radio>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-radio v-model="formData['xianqu']" :label="'衔取'" :list="['强', '一般',  '差',  '无',  '食物欲望好']"></z-radio>
				</div>
				<div style="width:80%;" class="z-margin-bottom-40-rem">
					<z-check-box v-model="formData['sport_temp']" :label="'运动气质'" :list="['兴奋性',  '活泼型',  '安静',  '忧郁型',  '神经质',  '依恋型',  '细路清晰',  '步态轻快 ', '反应灵敏',  '四肢关节正常']"></z-check-box>
				</div>
				<p class="title">图片信息</p>
				<div style="height:450px;width:100%;" class="z-margin-bottom-40-rem">
					<z-upload-img v-model="formData['head_imgs']" :label="'头部图片'"></z-upload-img>
				</div>
				<div style="height:450px;width:100%;" class="z-margin-bottom-40-rem">
					<z-upload-img v-model="formData['figure_imgs']" :label="'身段图片'"></z-upload-img>
				</div>
				<div style="height:450px;width:100%;" class="z-margin-bottom-40-rem">
					<z-upload-img v-model="formData['sport_imgs']" :label="'运动图片'"></z-upload-img>
				</div>
				<p class="title">视频信息</p>
				<div style="width:100%;" class="z-margin-bottom-40-rem">
					<z-upload-video v-model="formData['videoUrl']" :label="'上传视频'" @getVideoBinaryService='getVideoBinaryService'></z-upload-video>
				</div>
				<div class="ub-box ub-ver submit-panel">
					<div @click.stop="submitForm" style="background:#f25807;width:158px;" class="ub-box ub-ver z-padding-all-10-rem z-color-fff z-font-size-16 form-btn z-curPonit">保存</div>
					<div @click.stop="$router.replace('/')" style="background:#757575;width:158px;" class="z-margin-left-20-rem ub-box ub-ver z-padding-all-10-rem z-color-fff z-font-size-16 form-btn  z-curPonit">取消</div>
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
	import zForeignRadio from 'services/form/zForeignRadio.vue'
	import {initVisibility} from 'utils/visibility.js'
	import FileVedioLoader from 'utils/FileVedioLoader.js'
	import {dogUrl} from 'config/urlConfig.js'
	import dogSchema from 'schema/dogSchema.js'
	import dogService from 'business/dogService.js'
	export default {
		components: {zInput, zTextArea, zRadio, zCheckBox, zCity, zDate, zSelect, zForeignRadio, zUploadImg, zUploadVideo},
		data(){
			return{
				cityFlag1: false,
				cityFlag2: false,
				dateFlag1: false,
				dateFlag2: false,
				dateFlag3: false,
				dateFlag4: false,
				foreignFlag1: false,
				foreignFlag2: false,
				foreignMap: {}, // 外键的id:name
				formData: JSON.parse(JSON.stringify(dogSchema)),
				uploadBinaryArr: [],
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.initForeignData()
				initVisibility(this.$el)
			})
		},
		methods:{
			async initForeignData(){
				let ret = await dogService.transformToVue(dogUrl['list'], 'get')
				this.foreignMap = {}
				ret.forEach(item => {this.foreignMap[item['id']] = item['name']})
			},
			getVideoBinaryService(binary){
				this.uploadBinaryArr.push(binary)
			},
			async submitForm(){
				//return console.log(JSON.stringify(this.formData))
				if(this.formData['goodId'].length === 0){
					return this.$toast({tip:'请填写产品编号', type: 2})
				}
				let ret = await dogService.transformToService(dogUrl['save'], 'post', this.formData)
				let len = this.uploadBinaryArr.length
				for(let i = 0; i<len; i++){
					let video_ret = await dogService.transformToService(dogUrl['updateVideo'], 'put', {id: ret['_id'], videoBin: [this.uploadBinaryArr[i]], fileName: fileName, curProcess: (i+1) / len })					
					console.log(JSON.stringify(video_ret))
				}
				this.$toast({tip:'保存成功', type: 1})
				this.$router.replace('/')
			}
		}
	}
</script>
<style scoped>
	.list-main{}
	.list-container{width:1226px;overflow-y:scroll;height:100%;position:relative;margin:auto;}
	.form-box{border-radius:4px;margin:30px 0;padding:0 0 100px 0;background:#fff;}
	.title{position:relative;font-size:1.4rem;color:#888;margin-bottom:2rem;padding:1.4rem 1rem;background:#e7e7e7;}
	.title:after{content:'';position:absolute;bottom:0;left:0;width:120px;height:3px;background:#35485D;}
	.submit-panel{z-index:1000;position:fixed;bottom:0;left:calc((100% - 1226px - 100) / 2);width:1226px;border-top:1px solid #eee;background:#fff;padding:2rem 0;}
</style>