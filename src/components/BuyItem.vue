<template>
	<div class="BuyItem">
		<div class="slider" 
				@touchstart='touchStart'
               @touchmove='touchMove'
               @touchend='touchEnd'
               :style="deleteSlider">
            <div class="content" 
              >
				<div class="xuanzhong">
					<img :src="'img/' + ((data.isChecked) ? 'xuanzhong.png' : 'unselected.png')"  @click="buyItem">
		             <!-- <i class="iconfont icon-select"
		                   :class="data.isChecked === 1 ? 'icon-duihao_ ' : 'icon-iconfontico2'"></i> -->
				</div>
				<div class="item-img">
					<img :src="'//pic.secoo.com/product/240/240/' + data.image" alt="" class="product-img">
				</div>
				<div class="product-info">
					<p class="product-name">{{data.brandChName}}</p>
					<p class="product-intro">{{data.name}}</p>
					<p class="product-color">颜色：{{data.color}}</p>
					<span class="product-quantity" v-show="!!data.inventoryText">{{data.inventoryText}}</span>
					<span class="product-address">{{data.areaTypeName}}</span>
					<div class="bottom">
						<span class="product-price">￥{{data.secooPrice}}</span>
						<div class="product-shuzi">
							<span class="jianhao" @click="reduceItem">-</span>
							<span class="quantity">{{quantity}}</span>
							<span class="jiahao" @click="addItem">+</span>
						</div>
					</div>
				</div>
			</div>
			<div class="remove" ref='remove'>删除</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: ['data'],
		data() {
			return {
				isAll: false,
				show: true,
				// isChecked: false,
				quantity: 1,
				startX: 0,   
        		endX: 0,    
        		moveX: 0,  
        		disX: 0,    
        		deleteSlider: '',
        		productItem: []
        	}
		},
		created() {
			// console.log(this._props.data);
			this.productItem.push(this._props.data);
			// console.log(this.productItem);

		},
		methods: {
			buyItem() {
				 this.data.isChecked = this.data.isChecked === 1 ? 0 : 1;
				 this.$store.commit(this.data.isChecked ? 'addProduct' : 'reduceProduct', this.data)
			},
			reduceItem() {
				this.quantity = (this.quantity === 1) ? 1 : --this.quantity;
				// if(this.quantity === 1) {
				// 	return this.quantity === 1;
				// } else {
				// 	this.quantity = this.quantity - 1;
				// 	if(this.data.isChecked === 1) {
				// 		this.data.currency = this.quantity;
				// 	} else {
				// 		this.data.currency = 0;
				// 	}
				// 	// return this.quantity;
				// }
				this.$store.commit('reducePrice', this.data)
			},
			addItem() {
				if (this.data.inventoryText) {
					return;
				}

				this.quantity = (this.quantity < this.data.quantity) ? ++this.quantity : this.data.quantity;
				// this.$set(this.data, 'quantity', this.quantity);

				this.$store.commit('addPrice', this.data)

				// if(this.data.inventoryText === "仅剩1件") {
				// 	return ;
				// } else {
				// 		if (this.quantity < this.data.quantity) {
				// 		this.quantity = this.quantity + 1;
				// 		// return this.quantity;
				// 	}
				// 	if(this.data.isChecked === 1) {
				// 		this.data.currency = this.quantity;
				// 	} else {
				// 		this.data.currency = 0;
				// 	}
				// 	this.$store.commit('addPrice', this.data)
				// }
			},
			touchStart(ev){
                ev= ev || event
            	if(ev.touches.length == 1){
                    this.startX = ev.touches[0].clientX;
                }
            },
             touchMove(ev){
                ev = ev || event;
                let wd = this.$refs.remove.offsetWidth;
                    if(ev.touches.length == 1) {
                        this.moveX = ev.touches[0].clientX
                        this.disX = this.startX - this.moveX;
                   // console.log(this.disX)
                        if(this.disX < 0 || this.disX == 0) {
                            this.deleteSlider = "transform:translateX(0px)";
                        }else if (this.disX > 0) {
                            this.deleteSlider = "transform:translateX(-" + this.disX * 5 + "px)";
                            if (this.disX * 5 >= wd) {
                                this.deleteSlider = "transform:translateX(-" + wd + "px)";
                            }
                        }
                    }
              },
              touchEnd(ev){
	              ev = ev || event;
	              let wd=this.$refs.remove.offsetWidth;
	              if (ev.changedTouches.length == 1) {
	                    let endX = ev.changedTouches[0].clientX;
	                        this.disX = this.startX - endX;
	                        // console.log(this.disX)
	                        if ((this.disX * 5) < (wd / 2)) {
	                            this.deleteSlider = "transform:translateX(0px)";
	                        }else{
	                             this.deleteSlider = "transform:translateX(-"+ wd + "px)";
	                        }
	                    }
                }
		}
} 
</script>
<style lang="scss">
	.BuyItem {
		background-color: #fff;
		width: 100%;
        height: 1.72rem;
        font-size: .14rem;
        font-family: "MicroSoft Yahei";
        margin-bottom: .12rem;
        .slider {
	        width: 100%;
	        height: 1.72rem;
	        position: relative;
	        user-select: none;
			.content {
	            position: absolute;
	            left: 0;
	            right: 0;
	            top: 0;
	            bottom: 0;
	            // z-index: 100;
	            transition: 0.3s;
	            display: flex;
		        // flex-wrap: nowrap;
		        justify-content:space-between;
		        align-items: center;
		        .xuanzhong {
		        	flex: 1;
		        	line-height: 1.72rem;
		        	height: 1.72rem;
		        	text-align: center;
		        	img {
		        		width: 0.2rem;
		        		height: 0.2rem;
		        	}
					.iconfont {
						font-size: .24rem;
					}
		        }
		        .item-img {
		        	flex: 3;
		        	height: 1.125rem;
			        img {
						width: 100%;
						height: 100%;
			        }
		        }
		        .product-info {
		        	flex: 6;
		        	width: 0;
		        	height: 1.125rem;
		        	font-size: .13rem;
					.product-intro {
		        		text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					}
					.product-quantity, .product-address {
						display: inline-block;
						// height: .21rem;
						// line-height: .21rem;
						font-size: .11rem;
						color: #fff;
						// width: .4rem;
						background-color: #f8a120;
						padding: 0 0.03rem;
						margin: .07rem .07rem .07rem 0;
					}
					.bottom {
						// display: flex;
						padding: 0 .13rem 0 0;
						.product-price {
							font-family: "SimSun";
							font-size: .21rem;
							float: left;
						}
						.product-shuzi {
							display: flex;
							float: right;
							height: .24rem;
							width: .85rem;
							border: 1px solid #e6e6e6;
							font-size: .16rem;
							color: #aaaaaa;
							padding: 0 .03rem;
						}
						.jiahao , .jianhao, .quantity{
							line-height: .24rem;
							flex: 1;
						}
						.quantity {
							position: relative;
							left: 0.01rem;
							padding: 0 .13rem;
							color: #000;
							font-size: .15rem;
						}
						.jiahao , .jianhao, .quantity{
							line-height: .24rem;
							flex: 1;
						}
						.quantity {
							position: relative;
							left: 0.01rem;
							padding: 0 .13rem;
							color: #000;
							font-size: .15rem;
						}
						.jiahao , .jianhao {
							font-size: .21rem;
							font-weight: 700;
						}
						.jianhao {
							padding: 0 .0 0 .04rem;
						}
						.jiahao {
							padding: 0 .02rem 0 0;
						}
					}
		        }
		    }
		  	.remove{
	            position: absolute;
	            width: 0.7rem;
	        	height: 1.72rem;
	            background: #1c1717;
	            right: -.7rem;
	            top: 0;
	            color:#fff;
	            text-align: center;
	            font-size: .16rem;
	            line-height: 1.72rem;
        	}
	    }
	}
</style>

