<template>
	<div class="app-detail">
		<!-- 头部标题 导航条 -->
		<div class="header">
			<div class="header-top">
				<img @touchstart="pageReturn" src="/icons/return.png" alt="">
				<div id="headerTitle" class="show-price">
					<p>{{productInfo.brandEnName}}</p>
					<p>{{priceInfo.nowPrice}}</p>
				</div>
				<img src="/icons/share.png" alt="">
				<img src="/icons/message.png" alt="">
			</div>
		</div>
		<!-- nav -->
		<div id="anchor1" class="nav">
			<ul v-show="navFixed">
				<li v-for="(item, i) in data.modelSort" :class="i==cur.navIdx?'on':''" @click="changePage($event,item)" v-if="item.title">{{item.title}}</li>
			</ul>
		</div>
		<!-- 商品详情卡 -->
		<div class="productInfo">
			<!-- 滚动图 -->
			<div class="banner" >
				<div class="swiper-container" style="height: 350px;">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="(item, index) in productInfo.imgList" :key="index" :style="{
								backgroundImage: 'url(' + item +')',
						}">
						</div>
					</div>
						<!-- 如果需要分页器 -->
					<div class="swiper-pagination"></div>
				</div>
			</div>
			<!-- 价钱详情 -->
			<div class="price">
				<div class="price-top">
					<i class="price-val">{{priceInfo.nowPrice}}</i>
					<span v-for="(item, index) in priceInfo.priceTagListNew">{{item.tag}}</span>
				</div>
				<div class="price-bottom">
					<span>{{productInfo.taxTitle}}</span>
					<img @click="iconBtn" src="/icons/attention.png">
				</div>
			</div>
			<!-- title-main -->
			<div class="title-main">
				<h3><span class="color">{{brandFlagship.title}}</span><span>{{productInfo.title}}</span></h3>
			</div>
			<!--产地 运输 -->
			<div class="carriage">
				<img :src="productInfo.areaIcon">
				<span>{{productInfo.areaName}}</span>
				<span>{{productInfo.deliverInfo}}</span>
			</div>
			<!-- 库支票分期 -->
			<div class="kuChequeInfo">
				<p>
					<span>{{kuChequeInfo.title}}</span>
					<span>{{kuChequeInfo.subTitle}}</span>
				</p>
				<p class="arr">
					<span><span></span></span>
				</p>
			</div>
			<!-- 微信管家 -->
			<div class="wecharManage">
				<p>
					<span>{{wecharManage.title}}</span>
					<span>{{wecharManage.subTitle}}</span>
				</p>
				<p class="arr">
					<span><span></span></span>
				</p>
			</div>
			<!-- 权限 -->
			<div class="permissions">
				<div v-for="(item, index) in data.serviceList">
					<img :src="item.icon">
					<p>{{item.name}}</p>
				</div>
				<p class="arr">
					<span><span></span></span>
				</p>
			</div>
			<!-- 商品信息列表 -->
			<div class="information">
				<h2 class="title">商品信息</h2>
				<ul>
					<li v-for="(item, index) in productInfo.attrList" :key="index">
						<p class="name">{{item.name}}</p>
						<p>{{item.value}}</p>
					</li>
				</ul>
			</div>
			<!-- 用户评价 -->
			<div id="anchor2" class="Evaluation">
				<h2>用户评价</h2>
			</div>
			<!-- 在售商品 -->
			<div class="onSale">
				<div class="onSale-left">
					<h2>{{brandFlagship.title}}</h2>
					<p>
						<span>{{brandFlagship.numText}}</span>
						<span class="productNum">{{brandFlagship.productNum}}</span>
						<span>{{brandFlagship.numTexta}}</span>
					</p>
				</div>
				<div class="onSale-right">
					<a :href="brandFlagship.contentLink">进入品牌</a>
				</div>
			</div>

			<!-- 商品详情 图文展示 -->
			<div id="anchor3" class="info">
				<h2>商品详情</h2>
				<div class="infoImg" v-for="(item, index) in productInfo.detail" :key="index" :style="{
				backgroundImage: 'url(' + item.info + ')'
			}">
				</div>
			</div>
		</div>

		<div class="ads">
			<a :href="realInfo.url" :style="{
			backgroundImage: 'url('+ realInfo.imgUrl +')'
		}"></a>
		</div>
		<!-- 精品推荐 -->
		<div id="anchor4" class="commend">
			<h2 class="commend-title">- 精品推荐 -</h2>
			<Product v-for="(item, index) in detail.productList" :key="index" :data="item"></Product>
		</div>

		<!-- 页脚购物车 -->
		<div class="footer">
			<li v-for="(item, index) in data.button">
				<div class="icons">
					<a href=""><img src="/icons/collection.png"><p>收藏</p></a>
					<a href=""><img src="/icons/contact.png"><p>客服</p></a>
					<router-link to="/shoppingCar"><img src="/icons/shoppingBuy.png"><span class="curNum">{{$store.state.num}}</span><p>购物袋</p></router-link>
				</div>
				<div v-for="(idx, i) in item" :style="{
				backgroundColor: '#' + idx.color,
				color: '#fff',
				height: '.45rem',
				lineHeight: '.45rem'
			}" :key="i" @click="clickBtn(idx)">{{idx.title}}</div>
			</li>
		</div>
		<!-- 蒙版提示框 -->
		<div v-show="isShow" class="mask">
			<div class="mask-main">
				<div class="mask-top">
					<h2 class="mask-title">{{productInfo.taxTitle}}</h2>
					<p class="mask-text">
						<span>{{productInfo.taxDesc}}</span>
					</p>
				</div>
				<div class="mask-bottom">
					<p @touchstart="maskHidd" class="mask-but">确定</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
	@import '../base.scss';
	@import './detail.scss';
</style>
<script type="text/javascript">
	import Product from '../components/Product.vue';
	import DetailCard from '../components/detailBanner.vue';
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.css';
	export default {
		components: {
			Product,
			DetailCard
		},
		data() {
			return {
				// 推荐列表数据
				detail:{},
				// 商品详情数据
				data: {},
				productInfo: {},
				brandFlagship: {},
				wecharManage: {},
				kuChequeInfo: {},
				priceInfo: {},
				realInfo: {},
				isShow: false,
				navFixed: false,
				// 定义Nav
				cur:{
					navIdx: 0
				},
				// 定义购物车的数量
				carNum: 0
			}
		},
		methods: {
			iconBtn() {
				this.isShow = true;
			},
			maskHidd() {
				this.isShow = false;
			},
			pageReturn() {
				window.history.go(-1);
			},
			goto() {
				// 获取滚动条到页面顶部的距离
				var scrollTop = window.pageYOffset ||
					document.documentElement.scrollTop ||
					document.body.scrollTop
  				var navOffsetTop = document.getElementById('anchor1').offsetTop;
  				var EvaluationOffsetTop = document.getElementById('anchor2').offsetTop;
  				var infoOffsetTop = document.getElementById('anchor3').offsetTop;
  				var commendOffsetTop = document.getElementById('anchor4').offsetTop;
  				var dom = document.getElementById('headerTitle');
  				// 判断
  				if(scrollTop >= navOffsetTop) {
  					this.navFixed = true;
  					this.cur.navIdx = 0
  				}else {
  					this.navFixed = false
  				}
  				if (scrollTop >= EvaluationOffsetTop) {
  					this.cur.navIdx = 1
  				}
  				if (scrollTop >= infoOffsetTop) {
  					this.cur.navIdx = 2
  				}
  				if (scrollTop >= commendOffsetTop) {
  					this.cur.navIdx = 3
  				}
  				if(scrollTop >= 375) {
  					dom.style.transform = 'translateY(0)'
  				}else {
  					dom.style.transform = 'translateY(100%)'
  				}
			},
			clickBtn(item) {
				if(item.type==0) {
					this.goBuyCar()
				}
				else if(item.type==1) {
					this.goBuy()
				}
			},
			// 定义加入购物车的方法
			goBuyCar() {
				this.carNum ++;
				if (this.carNum > 99) {
					this.carNum = 99 + "+";
				}
				this.$store.commit("BuyCar", this.productInfo)
			},
			// 定义立即购买的方法
			goBuy() {
				// console.log(222)
			},
			changePage(e,item) {
  				switch(item.type) {
  					case 1:
  						this.goAnchor(item.type);
  					break;
  					case 2:
  						this.goAnchor(item.type);
  					break;
  					case 3:
  						this.goAnchor(item.type);
  					break;
  					case 4:
  						this.goAnchor(item.type);
  					break;
  				};
				
			},
			goAnchor(i) {
				this.$nextTick(() => {
					document.documentElement.scrollTop = document.getElementById('anchor' + i).offsetTop;
				})
			}
		},
		mounted () {
           	setTimeout(() =>{
	           	new Swiper('.swiper-container', {
		           	autoplay:{
		           		disableOnInteraction: false,
		           	},
		           	loop: true,
		           	grabCursor: true,
					pagination: {
					    el: '.swiper-pagination',
					  }
				})
           	},100)
			window.addEventListener("scroll", this.goto);
			this.$http.get('/data/detail/product.json')
			.then(({ data }) =>{
				this.detail = data
			})
			this.$http.get('/data/detail/detail.json')
			.then(({ data }) => {
				this.data = data;
				this.productInfo = data.productInfo;
				this.brandFlagship = data.brandFlagship;
				this.wecharManage = data.wecharManage;
				this.kuChequeInfo = data.kuChequeInfo;
				this.priceInfo = data.productInfo.priceInfo;
				this.realInfo = data.realInfo
			})
		},
		destroyed () {
			window.removeEventListener('scroll', this.goto)
		}
	}
</script>

