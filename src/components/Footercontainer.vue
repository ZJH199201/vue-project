<template>
	<div class="footer" v-show="this.$route.path !== '/my' && this.$route.path.indexOf('/detail') !== 0">
		<ul>
			<router-link v-for="(item, index) in icons" :key="index" tag="li" :to="item.route">
				<img :src="'image/' + item.img">
				<p>{{item.text}}</p>
			</router-link>
		</ul>
	</div>
</template>

<style type="text/css" lang="scss">
@import '../base.scss';
	.footer {
		position: fixed;
		bottom: -0.01rem;
		width: 100%;
		font-size: 0.12rem;
		z-index: 10;
		background-color: #F0EDED;
		text-align: center;
		height: 0.4rem;
		padding: 0.04rem 0 0;
		ul {
			display: flex;
			li {
				flex: 1;
				img {
					width: 0.23rem;
					height: 0.23rem;
				}
				p {
					position: relative;
					top: -0.03rem;
					transform: scale(0.8);
					color: #666;
				}
			}
		}
		
	}
</style>

<script type="text/javascript">
	export default {
		data() {
			return {
				icons: [
					{img: '04.png', text: '首页', route: '/home'},
					{img: '05.png', text: '品牌', route: '/brand'},
					{img: '06.png', text: '分类', route: '/class'},
					{img: '07.png', text: '购物袋', route: '/shoppingCar'},
					{img: '08.png', text: '我的寺库', route: '/my'}
				]
			}
		}
	}
</script>