<template>
	<div class="recommend-product">
		<ul class="recommend-content">
			<li class="recommend-item" v-for="item in productList" :key="item.id">
				<a href=""></a>
				<div class="product-img">
					<img :src="'//pic.secoo.com/product/374/374/'+ item.picUrl" alt="">
				</div>
				<div class="product-info">
					<h4 class="brand-name">{{item.showBrand}}</h4>
					<p class="product-name">{{item.name}}</p>
					<p class="product-price">￥{{item.secooPrice}}</p>
					<p class="product-tags">{{item.tags.join('&nbsp;|&nbsp;')}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<style lang="scss">
	.recommend-product {
		width: 100%;
		background: #fff;
		overflow: hidden;
		// font-size: .14rem;
		.recommend-content {
			overflow: hidden;
			display: flex;
        	flex-wrap: wrap;
        	justify-content: space-between;
			.recommend-item {
				 width: 1.865rem;
            	margin-bottom: .3rem;
				.product-img {
					width: 1.87rem;
                	height: 1.87rem;
					img {
						display: block;
						width: 100%;
						height: 100%;
					}
				}
				.product-info {
					// line-height: .17rem;
					font-size: .14rem;
					color: #000;
					padding: .15rem .1rem 0 .1rem;
					h4 {
						font-weight: normal;
						 margin-bottom: .04rem;
		                font-family: Futura-Medium;
		                font-size: .12rem;
		                line-height: .16rem;
					}
					.product-name {
						// height: .20rem;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
						margin-bottom: .10rem;
               			font-family: PingFangSC-Light;
                		font-size: .12rem;
               			line-height: .165rem;
					}
					.product-price {
						height: .24rem;
						font-size: .21rem;
						 align-items: center;
                		line-height: .24rem;
                		margin-bottom: .02rem;
                		vertical-align: middle;
                		font-family: "SimSun"
					}
					.product-tags {
						align-items: center;
		                height: .17rem;
		                margin-top: .07rem;
		                line-height: .16rem;
		                color: #8B572A;
		                font-family: PingFangSC-Light;
		                font-size: .12rem;
						margin-right: .03rem;
					}
				}
			}
		}
	}
</style>
<script type="text/javascript">
	export default {
		props: ['productList'],
		data() {
			return {

			}
		},
		created () {
			// console.log(this)
	}
		// console.log(this.props.productList)
	} 
</script>