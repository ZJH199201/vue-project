<template>
	<div class="app-product">
		<a class="goto-detail" href="">
			<img :src="'https://pic12.secooimg.com/product/300/300/' + data.picUrl">
			<div class="product-info">
				<h2 class="showBrand">{{data.showBrand}}</h2>
				<p class="oldName">{{data.oldName}}</p>
				<p class="secooPrice">￥{{data.secooPrice}}</p>
				<div class="text">
					<span v-for="(item, index) in data.tags" :key="index">{{item}}</span>
				</div>
			</div>
		</a>
	</div>
</template>
<style lang="scss">
	.app-product {
		width: 50%;
		font-size: 0.1rem;
		.goto-detail {
			color: black;
			img {
				width: 100%;
			}
			.product-info {
				padding: 0.15rem;
				.showBrand {
					margin-bottom: 0.03rem;
				}
				.oldName {
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					margin-bottom: 0.075rem;
				}
				.secooPrice {
					margin-bottom: 0.075rem;
					font-weight: bold;
				}
				.text {
					span {
						color: orange;
						padding: 0 0.05rem;
						border-left: 1px solid #f30;
					}
					& span:first-child {
						border-left: none;
					}

				}
			}
		}
	}
</style>
<script type="text/javascript">
	export default {
		props: ['data'],
		data() {
			return {

			}
		}
	}
</script>