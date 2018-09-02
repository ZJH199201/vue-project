<template>
	<div class="sku-slider">
		<div class="title-container">
			<h3 class="title">来自比利时的设计师小书包评测</h3>
			<p class="sub-title">jeune premier 明星宝娃同款</p>
			<div class="swiper-pagination-sku4"></div>
  		</div>
		<div class="swiper-container-sku4">
		    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="(item, index) in skuList4" :key="index">
				      	<img :src="item.img" v-if="item.img" class="slider-img">
				      	<div class="content">
				      		<ul>
				      			<router-link tag="li" :to="'/detail/' + value.url" v-for="(value, idx) in item.list" :key="idx">
				      				<img :src="value.img" alt="">
				      				<p class="small-text">{{value.title}}</p>
				      			</router-link>
				      		</ul>
				      	</div>
			      </div>
		    </div>
	  	</div>
	</div>
</template>
<style type="text/css" lang="scss">
@import '../base.scss';
	.sku-slider {
		width: 100%;
		height: 2.5rem;
		font-size: 0.12rem;
		padding: 0.2rem 0.14rem 0.5rem;
		border-bottom: 0.1rem solid #F1F1F1;
		.title-container {
			margin-bottom: 0.18rem;
			position: relative;
			.swiper-pagination-sku4 {
				position: absolute;
				right: 0.28rem;
				top: 0.23rem;
				.swiper-pagination-bullet {
					width: 0.06rem;
					height: 0.06rem;
					margin-right: 0.1rem;
				}
				.swiper-pagination-bullet-active {
					background-color: #1c1717;
				}
			}
			h3 {
				font-size: 0.16rem;
				margin-bottom: 0.03rem;
			}
		}
		.swiper-container-sku4 {
			// padding: 0 0.1rem;
		}
		.swiper-container-sku4 .swiper-slide {
			height: 2.5rem;
			position: relative;
			.slider-img {
				width: 3.47rem;
			}
			.content {
				text-align: center;
				ul {
					overflow: hidden;
					position: relative;
					left: -0.03rem;
					li {
						float: left;
						width: 30%;
						margin-bottom: 0.05rem;
						margin-right: 	0.01rem;
						p {
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							transform: scale(0.9);
						}
						img {
							width: 0.81rem;
							height: 0.81rem;
						}
					}
				}

			}
		}
	}
</style>

<script type="text/javascript">
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';

	export default {
		data() {
			return {
				skuList4: [],
			}
		},


		mounted() {
			this.$http.get('/data/home.json')
            .then(({ data }) => {
                	this.skuList4 = data.floors[9].list;
                this.$nextTick(() => {
		           new Swiper('.swiper-container-sku4', {
						autoplay: false,
						pagination: {
						    el: '.swiper-pagination-sku4',
						  },
					})
         		})
            })
      	}
	}
</script>