<template>
  <div class="swiper-container">
	    <div class="swiper-wrapper">
		      <div class="swiper-slide" v-for="(item, index) in carouselList" :key="index" :style="{backgroundImage: 'url(' + item.img + ')'}">
		      	 <span>{{item.title}}</span>
		      </div>
	    </div>
	    <!-- 如果需要分页器 -->
    	<div class="swiper-pagination"></div>
  	</div>
</template>


<style type="text/css" lang="scss">
	.swiper-container {
		padding-top: 0.1rem;
		width: 3.75rem;
		height: 3.2rem;
		position: relative;
		.swiper-slide {
			width: 100%;
			height: 3.2rem;
			background-size: cover;
			position: relative;
			text-align: center;
			span {
                display: block;
                width: 100%;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 0.35rem;
                color: #fff;
                font-size: 0.14rem;
            }
		}
		.swiper-pagination.swiper-pagination-bullets {
			bottom: 0.05rem;
		}
		.swiper-pagination-bullet {
			background-color: #EDE9E9;
			position: relative;
			top: 10px;
		}
		.swiper-pagination-bullet-active {
			background-color: #fff;
		}
	}
</style>

<script type="text/javascript">
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';

	export default {
		data() {
			return {
				carouselList: [],
			}
		},


		mounted() {
			this.$http.get('/data/home.json')
            .then(({ data }) => {
                this.carouselList = data.floors[0].list;
                console.log(data);
                this.$nextTick(() => {
		           new Swiper('.swiper-container', {
						autoplay: {
							// 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
							// 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
							disableOnInteraction: false,
						},
						loop: true,
						pagination: {
						    el: '.swiper-pagination',
						  },
					})
         		})
            })
      }
	}
</script>