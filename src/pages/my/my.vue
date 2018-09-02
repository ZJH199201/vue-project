<template>
	<div class="my-page">
		<div class="my-header">
			<span class="close" @click="goback">&times;</span>
			<div class="login-msg">短信快捷登录</div>
		</div>
		<div class="my-content">
			<div class="my-input">
				<p :class="{
					'active': isActive
				}" @click="change">手机号</p>
				<!-- input输入框只能输入数字，如果输入非数字字符，都会被替换成空字符串,
				利用正则表达式，当键盘抬起事件触发或者粘贴事件触发之后，都会进行判断替换 -->
				<!-- onkeyup”=按键抬起触发，“onafterpaste”=粘贴之后触发 -->
				<input type="tel" name="points" @focus="change"  v-model="msg" maxlength="11" autofocus="autofocus" class="mobile" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
				<span class="remove" v-show="msg.length !== 0" @click="reduce">&times;</span>
				<p :class="{
					'cur': isMove
				}" @click="change">验证码</p>
				<input type="text" maxlength="10" v-model="yanzheng" @focus="move" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
				<div :class="{
					'get': true,
					'changecolor': msg.length === 11 ? true: false
				}" >获取验证码</div>
			</div>
			<button :class="{
				'login': true,
				'changecolor': yanzheng.length !== 0 && msg.length !== 0
			}">登录</button>
			<div class="small-text">
				<span class="other">其它登录方式</span>
				<span class="no-get">收不到验证码</span>
			</div>
		</div>
		<div class="my-footer">
			<p>首次登录将自动注册, 注册代表您同意<a href="javascript:void(0)">《用户协议》</a></p>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	// @import '../../base.scss';
	.my-page {
		font-size: 0.12rem;
		padding: 0.15rem;
		overflow: hidden;
		.my-header {
			width: 100%;
			margin-bottom: 0.75rem;
				.close {
				position: relative;
				top: -0.1rem;
				font-size: 0.3rem;
			}
			.login-msg {
				font-size: 0.3rem;
			}
		}
		.my-content {
			p {
				margin: 0.08rem 0;
				font-size: 0.16rem;
				color: #ccc;
				position: relative;
				// p元素相对定位，设置z-index: -1,放在input元素的底部
				z-index: -1;
				top: 0.3rem;
				// 利用贝塞尔曲线控制运动轨迹，只让top属性改变
				transition: top .5s cubic-bezier(.56,.21,.13,.86)
			}
			p.active {
				top: 0.05rem;
				font-size: 0.12rem;
			}
			p.cur {
				top: 0.05rem;
				font-size: 0.12rem;
			}
			.my-input {
				position: relative;
				.get {
					float: right;
					position: relative;
					top: -0.43rem;
					text-align: center;
					color: #fff;
					width: 0.8rem;
					height: 0.35rem;
					line-height: 0.35rem;
					background-color: #ccc;
				}
				.remove {
					position: absolute;
					right: 0;
					top: 0.3rem;
					width: 0.14rem;
					height: 0.14rem;
					line-height: 0.14rem;
					color: #fff;
					display: inline-block;
					text-align: center;
					border-radius: 50%;
					background-color: #ccc;

				}
				input {
					display: block;
					// position: relative;
					width: 100%;
					height: 0.3rem;
					font-size: 0.15rem;
					border: none;
					outline: none;
					border-bottom: 0.015rem solid #ccc;
					// input元素设置背景色透明可以显示出底层的p元素
					background-color: transparent;
					&:first-child {
						margin-bottom: 0.15rem;
					}
					&:focus {
						border-bottom-color: #000;
					}
				}
				.changecolor {
					background-color: #000;
				}
			}
			
			.login {
				position: relative;
				top: -0.1rem;
				display: block;
				border: none;
				width: 100%;
				color: #fff;
				font-size: 0.14rem;
				height: 0.4rem;
				outline: none;
			}
			.changecolor {
					background-color: #000;
				}
			
			.small-text {
					margin-top: 0.05rem;
				.other {
					color: #f60;
				}
				.no-get {
					float: right;
				}

			}
		}
		.my-footer {
			text-align: center;
			position: absolute;
			bottom: 0.15rem;
			p {
				padding: 0 0.3rem;
				a {
					font-weight: bold;
					color: #000;
				}
			}

		}

	}
</style>

<script type="text/javascript">
	export default {
		data() {
			return {
				isActive: false,
				msg: '',
				yanzheng: '',
				isMove: false
			}
		},
		methods: {
			goback() {
				location.hash = '/home';
			},
			change() {
				this.isActive = true;
				if (this.yanzheng.length !== 0) {
					this.isMove = true;
				} else {
					this.isMove = false;
				}

			},
			reduce() {
				this.msg = '';
			},

			move() {
					this.isMove = true;
				if (this.msg === '' && this.yanzheng === '') {
					this.isActive = false;
					this.isMove = true;
				}

			}
		}

	}
</script>