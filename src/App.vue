<template>
	<div>
		<div>
			<div class="row" style="padding-bottom:20px">
				<div class="col-xs-offset-2 col-xs-8">
					<div class="page-header">
						<h2 :style="{color : titleColor}">Vue Router Demo</h2>
					</div>
					<button @click="changeTitleColor" type="button" class="btn btn-info">Random Color</button>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-2 col-xs-offset-2">
					<div class="list-group">
						<router-link class="list-group-item" active-class="active" to="/MyAbout">About</router-link>
						<router-link class="list-group-item" active-class="active" to="/MyHome">Home</router-link>
					</div>
				</div>
				<div class="col-xs-6">
					<div class="panel">
						<div class="panel-body">
							<router-view></router-view>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name : 'App',
		data() {
			return {
				titleColor: '#000'
			}
		},
		methods: {
			randomColor() {
				return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
			},
			randomFontSize() {
				return `${Math.floor(Math.random() * 100)}px`;
			},
			changeTitleColor(){
				this.titleColor = this.randomColor();
			}
		},
	}
</script>
