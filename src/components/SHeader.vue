<template>
	<div class="header">
		<div class="left" @click="event_back">
			<img src="/img/fanhui.png" alt="">
		</div>
		<h2 class="title">购物袋</h2>
		<slot name="right"></slot>
	</div>
</template>
<script>
	export default {
		props: {

		},
		methods: {
			event_back() {
				window.history.go(-1);
			}
		}

	}
</script>

<style lang="scss">
	.header {
		height: .44rem;
		background-color: #fff;
		padding: 0rem .15rem;
		position: relative;
		line-height: .44rem;
		font-family: PingFangSC-Medium;
		.left, .right {
			position: absolute;
			top: 0;
			height: 100%;
		}
		.title {
			text-align: center;
			font-size: .17rem;
			font-weight: 700;
			color: #1a191e;
			font-family: PingFangSC-Medium;
		}
		.left {
			width: .32rem;
			img {
				position: absolute;
				top: .07rem;
				width: 100%;
			}
		}
		.right {
			height: 100%;
			right: .15rem;
			top: 4px;
			color: #1a191e;
			font-size: .15rem;
			font-weight: 700;
		}
	}
</style>