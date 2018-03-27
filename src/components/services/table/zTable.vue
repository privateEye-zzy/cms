<template>
	<div>
		<table class="z-select-none" width="100%" cellspacing="0" cellpadding="0">
			<thead>
				<th v-for="th in header">{{th}}</th>
				<th>操作</th>
			</thead>
			<tbody>
				<tr v-for="tr in body">
					<td>{{tr["cid"]}}</td>
					<td>{{tr["name"]}}</td>
					<td>{{tr["age"]}}</td>
					<td>{{tr["sex"]}}</td>
					<td>{{tr["classify"]}}</td>
					<td>{{tr["price"]}}</td>
					<td style="width:120px;">
						<ul class="ub-box ub-ver">
							<li class="btn ub-box ub-ver z-margin-right-10-rem" style="background:#2EBACE;">
								<icon style="color:#fff;" name="tasks" scale='1'></icon>
							</li>
							<li @click.stop="$emit('editService', tr['cid'])" class="btn ub-box ub-ver z-margin-right-10-rem" style="background:#FFA63B;">
								<icon style="color:#fff;" name="edit" scale='1'></icon>
							</li>
							<li @click.stop="$emit('deleteService', tr['cid'])" class="btn ub-box ub-ver" style="background:#F67358;">
								<icon style="color:#fff;" name="archive" scale='1'></icon>
							</li>
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default {
		components: {},
		props:['header', 'body'],
		data(){
			return{}
		},
		mounted(){},
		methods:{}
	}
</script>
<style scoped="scoped">
	table{border-collapse:collapse;background:#fff;}
	table th{border-bottom:1px solid #ddd;font-size:1.4rem;color:#fff;padding:1.6rem 0;background:#35485D;}
	table tr{border-bottom:1px solid #ddd;transition:all .2s linear;}
	table tr:hover{background:#f5f5f5;}
	table tr:last-child{border-bottom:1px solid transparent}
	table td{text-align:center;padding:1.5rem 1rem;font-size:1.3rem;color:#888;}
	.btn{padding:.5rem .6rem;cursor:pointer;border-radius:3px;}
</style>