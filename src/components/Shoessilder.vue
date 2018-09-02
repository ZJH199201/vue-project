<template>
	<div class="shoes-slider">
		<div class="swiper-container-shoes">
		    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="(item, index) in shoesList" :key="index" :style="{backgroundImage: 'url(' + item.img + ')'}">
			      	 <h3 class="shoes-title">{{item.title}}</h3>
			      	 <h3 class="shoes-title subtitle">{{item.subTitle}}</h3>
			      </div>
			    </div>
		  	</div>
  		</div>
	</div>
</template>


<style type="text/css" lang="scss">
	.shoes-slider {
		width: 3.8rem;
		height: 2.15rem;
		font-size: 0.16rem;
		margin: 0.5rem 0 0;
		.swiper-wrapper {
			padding-left: 0.14rem;
		}
		.swiper-container-shoes .swiper-slide {
			width: 3.7rem !important;
			height: 1.9rem;
			background-size: cover;
			margin-right: 0.12rem;
			h3 {
				font-size: 0.16rem;
			}
			.shoes-title {
				position: absolute;
				top: -0.29rem;
				
			}
			.subtitle {
				left: 0.75rem;
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
				shoesList: [],
			}
		},


		mounted() {
			this.$http.get('/data/home.json')
            .then(({ data }) => {
                this.shoesList = data.floors[3].list;
                console.log(data);
                this.$nextTick(() => {
		           new Swiper('.swiper-container-shoes', {
						autoplay: false,
					})
         		})
            })
      }
	}
</script>