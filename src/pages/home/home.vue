<template>
	<div class="home-page">
		<div class="header">
			<img src="/image/01.png" alt="" class="glass">
			<input type="text" placeholder="香港好货季末折扣 99元起">
			<img src="/image/02.png" alt="" class="camera">
			<img src="/image/03.png" alt="" class="naoling">
		</div>
		<div class="home-nav">
			<ul class="nav-content">
				<li><a href="javascript:void(0)">奢侈品</a></li>
				<li><a href="javascript:void(0)">吃喝玩乐</a></li>
				<li><a href="javascript:void(0)">潮流尖货</a></li>
				<li><a href="javascript:void(0)">中国名物</a></li>
				<li><a href="javascript:void(0)">线下专区</a></li>
			</ul>
		</div>
		<Slider></Slider>
		<div class="content-nav">
			<ul class="clearfix">
				<li v-for="(item, index) in navList" :key="index" >
					<p>{{item.title}}</p>
					<p class="subtext">{{item.subTitle}}</p>
					<span class="line"></span>
				</li>
			</ul>
		</div>
		<div class="img-siku" ></div>
		<Shoesslider></Shoesslider>
		<div class="image-item"></div>
		<div class="text-container" v-for="(item, index) in textList" :key="index" v-show="item.isShow">
			<h2 class="title">{{item.title}}</h2>
			<p>{{item.subTitle}}</p>
			<p class="chakan">{{item.thirdTitle}}</p>
		</div>
		<Skuslider></Skuslider>
		<Skuslidero></Skuslidero>
		<Skuslidert></Skuslidert>
		<Skuslidertr></Skuslidertr>
		<Skusliderf></Skusliderf>
		<Skusliderfi></Skusliderfi>
		<Skusliders></Skusliders>
		<Skusliderse></Skusliderse>
	</div>
</template>
<style type="text/css" lang="scss" scoped>
	@import '../../base.scss';
	.home-page {
		overflow: hidden;
		.header {
			padding: 0.1rem 0.1rem;
			display: flex;
			.glass {
				position: absolute;
				left: 0.2rem;
				top: 0.18rem;
				width: 0.18rem;
				height: 0.18rem;
			}
			.camera {
				position: absolute;
				right: 0.48rem;
				top: 0.16rem;
			}
			.naoling {
				position: relative;
				left: 0.05rem;
				padding-top: 0.05rem;
				width: 0.25rem;
				height: 0.25rem;
			}
			input {
				display: inline-block;
				height: 0.34rem;
				color: #ccc;
				padding-left: 0.35rem;
				flex: 1;
				padding-right: 0.1rem;
				border: none;
				background-color: #f5f5f5;
				outline: none;

			}
			img {
				width: 0.25rem;
				height: 0.25rem;
			}
		}
		.home-nav {
			padding-left: 0.12rem;
			.nav-content {
				display: flex;
				li {
					flex: 1;
					font-size: 0.13rem;
				}
			}

		}
		.content-nav {
			font-size: 0.13rem;
			width: 100%;
			height: 1rem;
			text-align: center;
			padding: 0.2rem 0;
			border-bottom: 0.1rem solid #F1F1F1;
			li {
				width: 30%;
				margin-right: 0.1rem;
				margin-bottom: 0.3rem;
				float: left;
				position: relative;
				.subtext {
					font-size: 0.12rem;
					color: #999;
					margin-top: 0.03rem;
					transform: scale(0.8);
					&:after {
						content: '';
						position: absolute;
						right: -0.08rem;
						top: -0.24rem;
						display: block;
						height: 0.38rem;
						width: 0.01rem;
						background-color: #EDECEC;
						transform: rotate(30deg);
					}
				}
			}
		}
		.img-siku {
			border-bottom: 0.1rem solid #F1F1F1;
			width: 100%;
			height: 0.7rem;
			margin-bottom: 0.15rem;
			background-image: url("https://pic12.secooimg.com/comment/18/4/77a9f898233c414281ec38cd7e6a7e96.jpg");
			background-size: cover;
		}
		.image-item {
			border-top: 0.1rem solid #F1F1F1;
			width: 100%;
			height: 2.5rem;
			margin-bottom: 0.1rem;
			background-image: url("https://pic12.secooimg.com/comment/18/8/efed392011a547be8abf8d607d4fd86e.jpg");
			background-size: cover;
		}
		.text-container {
			padding: 0.08rem 0.3rem;
			font-size: 0.12rem;
			// height: 1.5rem;
			margin: 0 auto;
			text-align: center;
			border-bottom: 0.1rem solid #F1F1F1;
			h2 {
				margin-bottom: 0.1rem;
			}
			p {
				margin: 0 auto;
				padding: 0 0.15rem;
				line-height: 0.18rem;
			}
			.chakan {
				width: 0.9rem;
				height: 0.23rem;
				line-height: 0.23rem;
				margin: 0.15rem auto;
				border: 1px solid #000;
			}
		}
	}
</style>

<script type="text/javascript">
	import Slider from '../../components/Slider.vue';
	import Shoesslider from '../../components/Shoessilder.vue';
	import Skuslider from '../../components/Skucontainer.vue';
	import Skuslidero from '../../components/Skucontainero.vue';
	import Skuslidert from '../../components/Skucontainert.vue';
	import Skuslidertr from '../../components/Skucontainertr.vue';
	import Skusliderf from '../../components/Skucontainerf.vue';
	import Skusliderfi from '../../components/Skucontainerfi.vue';
	import Skusliders from '../../components/Skucontainers.vue';
	import Skusliderse from '../../components/Skucontainerse.vue';

	export default {
		data() {
			return {
					navList: [],
					textList: [],

			}
		},
		created() {
			this.$http.get('/data/home.json')
				.then(({ data }) => {
					this.navList = data.floors[1].list;
					this.textList = data.floors[4].list;

				})

		},

		components: {
			Slider,
			Shoesslider,
			Skuslider,
			Skuslidero,
			Skuslidert,
			Skuslidertr,
			Skusliderf,
			Skusliderfi,
			Skusliders,
			Skusliderse
		}

	}
</script>