<template>
	<div class="login-panel">
		<dl class="login-body ub-box ub-col ub-ver z-select-none">
			<dt>
				<icon style="color:#2A3E50;" name="gift" scale='4'></icon>
			</dt>
			<dt class="z-margin-bottom-25-rem z-padding-v-15-rem z-font-size-25 z-color-888">CMS登录系统</dt>
			<dd>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['username']" :label="'账号'"></z-input>
				</div>
			</dd>
			<dd>
				<div style="width:calc(200px + 30%);" class="z-margin-bottom-40-rem">
					<z-input v-model="formData['pwd']" :label="'密码'" :type="'password'"></z-input>
				</div>
			</dd>
			<dd>
				<div @click.stop="toLogin()" class="login-btn z-select-none z-curPonit ub-box ub-ver">登录</div>
			</dd>
		</dl>
	</div>
</template>
<script>
	import zInput from 'services/form/zInput.vue'
	import user from 'utils/user'
	import load from 'utils/loading'
	function loadTask(){
		return new Promise(resolve => {setTimeout(()=>{load.remove();resolve()}, 600)})
	}
	export default {
		components: {zInput},
		data(){
			return{
				formData:{
					username:'',
					pwd: ''
				}
			}
		},
		mounted(){},
		methods:{
			async toLogin(){
				if(!/^[1][3,4,5,6,7,8][0-9]{9}$/.test(this.formData['username'])){
					return this.$toast({tip: '账号格式不正确', type: 2})
				}
				if(this.formData['pwd'].length < 6){
					return this.$toast({tip: '密码格式不正确', type: 2})
				}
				// 模拟ajax登录
				user.login(this.formData['username'], this.formData['pwd'], async ()=>{
					load.show()
					await loadTask()
					this.$router.replace('/')
				})
			}
		}
	}
</script>
<style scoped="scoped">
	.login-panel{position:fixed;top:0;bottom:0;left:0;right:0;z-index:100;background:url(/static/login.jpg) no-repeat;}
	.login-body{animation:confirmAnimStart .5s forwards;padding:3rem 0;position:fixed;top:5%;left:50%;transform:translate(-50%, -50%);z-index:200;width:600px;background:rgba(255,255,255,.9);border-radius:15px;}
	.login-btn{width:200px;padding:1rem;background:#2A3E50;color:#fff;font-size:1.4rem;border-radius:30px;}
	@keyframes confirmAnimStart{
		from{top:5%}
		to{top:50%}
	}
</style>