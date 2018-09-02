<template>
	<div class="empty_shopping_card">
		<div class="empty_icon">
			<img src="../../public/img/empty_shoppingCar.jpg" alt="">
		</div>
		<p class="empty_text">千万好物等待您的挑选</p>
	</div>
</template>
<script type="text/javascript">
	export default {

	}
</script>
<style lang="scss">
	.empty_shopping_card {
		width: 100%;
		background: #fff;
		margin-bottom: .1rem;
		box-shadow: 0 1px 0 0 #e1e1e1;
		overflow: hidden;
		.empty_icon {
			width: 2rem;
			height: 2rem;
			margin: .2rem auto .1rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.empty_text {
			line-height: .2rem;
			font-size: .14rem;
			margin-bottom: .5rem;
			text-align: center;
			color: #000;
		}
	}
	
</style>