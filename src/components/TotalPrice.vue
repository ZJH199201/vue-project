<template>
	<div class="product-sub">

		<div class="quanxuan">
			<!-- <i class="iconfont icon-select" :class="isAllChecked ? 'icon-duihao_ ' : 'icon-iconfontico2'"></i> -->
			<!-- <i class="iconfont icon-iconfontico2" :class="{'icon-duihao_': isAllChecked}"></i> -->
			<img :src="'img/' + ((isAllChecked) ? 'xuanzhong.png' : 'unselected.png')" @click="all_event">
			<p class="text">全选</p>
		</div>
		<div class="totalPrice" v-show="this.$store.state.data">
			<p class="price">￥{{this.$store.state.price}}.00</p>
			<div class="miaoshu">
				<span class="tax">不含税金</span>
				<i class="iconfont icon-shuoming"></i>
			</div>
		</div>
		<div class="jiesuan" v-show="!this.$store.state.data">删除</div>

		<div :class="{
			'jiesuan': true,
			'active': isActive
		}" v-show="this.$store.state.data">去结算</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: ['data'],
		data() {
			return {

				isAllChecked: true,
				isActive: false

			}
		},
		methods: {
			all_event() {
				this.isAllChecked = !this.isAllChecked;

				this.isActive = !this.isActive;

				// for(var i = 0; i < this._props.data.length; i++) {
				// 	this.data[i].isChecked = this.isAllChecked === 1 ? 1 : 0;
				// 	console.log(this._props.data[i].isChecked,this.isAllChecked)
				// }
			}
	},
		created() {
		}
}
</script>
<style lang="scss">
	.product-sub {
		background-color: #fff;
		width: 100%;
		display: flex;
		justify-content:space-between;
        align-items: center;
        height: .53rem;
        font-size: .14rem;
        .iconfont {
        	font-size: .21rem;
        }
		.quanxuan {
			flex: 0 0 15%;
			height: 100%;
			text-align: center;
			padding: .13rem 0 0 0;
			font-size: 0.12rem;
			img {
				width: 0.2rem;
				height: 0.2rem;
			}
		}
		.totalPrice {
			flex: 0 0 53%;
			height: 100%;
			overflow: hidden;
			position: relative;
			.price {
				position: absolute;
				right: .1rem;
				top: 0.05rem;
				font-size: .17rem;
			}
			.miaoshu {
				position: absolute;
				right: .1rem;
				top: .27rem;
				.tax {
					position: relative;
					top: -.01rem;
					left: 0;
					margin-right: 0.02rem;
				}
			}
		}
		.jiesuan {
			flex: 0 0 32%;
			height: 100%;
			background-color: #1c1717;
			color: #fff;
			font-family: "SimSun";
			font-size: .18rem;
			text-align: center;
			line-height: .5rem;
		}
		.active {
			background-color: #ccc;
		}
	}
</style>
