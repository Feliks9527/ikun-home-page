<template>
	<div class="contact-container">
		<ul>
			<li>
				<a :href="data.gitee" target="_blank">
					<div class="icon">
						<Icon name="icon-gitee" :size="18" color="#ccc" />
					</div>
					<span>{{ data.giteeName }}</span>
				</a>
			</li>
			
			<li>
				<a href="mailto:felikschen@163.com">
					<div class="icon">
						<Icon name="icon-email" :size="18" color="#ccc" />
					</div>
					<span>{{ data.mail }}</span>
				</a>
			</li>
			
			<li>
				<a
					href="tencent://message/?Menu=yes&uin=1714737510&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
					<div class="icon">
						<Icon name="icon-QQ-circle-fill" :size="18" color="#ccc" />
					</div>
					<span>{{ data.qq }}</span>
				</a>
				<div class="pop">
					<img :src="data.qqQrCode" alt="">
				</div>
			</li>
			
			<li>
				<a
					href="">
					<div class="icon">
						<Icon name="icon-weixin" :size="18" color="#ccc" />
					</div>
					<span>{{ data.wx }}</span>
				</a>
				<div class="pop">
					<img :src="data.wxQrCode" alt="">
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
import {mapState} from "vuex";
export default {
	name: "myContact",
	components: {
		Icon
	},
	computed: {
		...mapState("setting", ["data"])
	}
}
</script>

<style scoped lang="scss">
@import "~@/styles/var";
.contact-container{
	$itemHeight: 30px;
	list-style: none;
	padding: 20px 0;
	margin: 0;
	box-sizing: border-box;
	color: $gray;
	
	li{
		list-style: none;
		height: $itemHeight;
		line-height: $itemHeight;
		margin: 15px 0;
		position: relative;
		
		.icon-container{
			margin-right: 5px;
		}
		
		&:hover {
			.pop{
				transform: scaleY(1);
			}
		}
		
		a {
			display: flex;
			align-items: center;
		}
		
		.pop{
			position: absolute;
			left: 0;
			bottom: $itemHeight;
			padding: 10px;
			background-color: #fff;
			box-sizing: border-box;
			border-radius: 5px;
			cursor: pointer;
			transform: scaleY(0);
			transform-origin: center bottom;
			transition: transform .3s;
			
			&::after{
				content: '';
				position: absolute;
				left: 50%;
				top: 100%;
				width: 0;
				height: 0;
				border: 5px solid transparent;
				border-top-color: #fff;
				transform: translateX(-50%);
			}
			
			img {
				width: 150px;
			}
		}
	}
}
</style>
