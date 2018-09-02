<template>
	<div class="app">
		<div class="top">
			<s-header>
				<div class="right" slot="right" v-show="isEdit" @click="bianji_event">编辑</div>
                    <div class="right" slot="right" v-show="!isEdit" @click="bianji_event">完成</div>
			</s-header>
		</div>
		<div class="main">

	  		<BuyItem v-for="(item, index) in cart.cartItems" :key="index" :data="item"></BuyItem>
			<div class="like">
	  			<h3>猜你喜欢</h3>
	  		</div>
			<Products :productList="productList"></Products>
	  	</div>

	  	<div class="footer-item">
	  		<TotalPrice :data="cart.cartItems"></TotalPrice>
	  	</div>
  	</div>
</template>
<script>
import EmptyShoppingCard from '@/components/EmptyShoppingCard.vue'
import SHeader from '@/components/SHeader.vue'
import Products from '@/components/Products.vue'
import BuyItem from '@/components/BuyItem.vue'
import TotalPrice from '@/components/TotalPrice.vue'

export default {
	components: {
			EmptyShoppingCard,
			SHeader,
			Products,
			BuyItem,
			TotalPrice
	  },
	data() {
			return {
				productList:{},
				cart:{},
				isEdit: true,
				jiesuan: {
					jiesuan: '结算',
					shanchu: '删除'
				}
			}
		},
	created () {
		this.$http.get('/data/detail.json')
		.then(({ data }) =>{
			this.productList = data.productList;
		})
		this.$http.get('/data/buy.json')
		.then(({ data }) =>{
			this.cart = data.rp_result.cart;
			// console.log(this.cart)
		})
	},
	methods: {
		bianji_event() {
			this.isEdit = !this.isEdit;
			this.$store.commit('update', this.isEdit);
		}
	}
}
</script>
<style lang="scss">
	@import url('../base.scss');
	.app {
		position: relative;
		width: 100%;
		.top {
			width: 100%;
			overflow: hidden;
			position: fixed;
			top: 0;
			left: 0;
		}
		.main {
			position: absolute;
			top: .44rem;
			left: 0;
			width: 100%;
			overflow:hidden;
			background-color: #f5f5f5;
			.like{
				margin-top: .15rem;
				height: .64rem;
				line-height: .64rem;
				padding: 0 .1rem;
				background-color: #fff;
				h3 {
					color: #5b5757;
					font-size: .16rem;
				}
			}
		}

		.footer-item {
			background-color: #fff;
			height: 0.5rem;
			box-shadow: 0 -1px 1px rgba(0, 0, 0, .3);
			width: 100%;
			overflow: hidden;
			position: fixed;
			bottom: 0.42rem;
			left: 0;
		}
	}
</style>

