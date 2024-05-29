<template>
	<form
		ref="form"
		id="data-form-container"
		@submit.prevent="handleSubmit" class="data-form-container"
	>
		<div class="form-item">
			<div class="input-area">
				<input type="text" maxlength="10" placeholder="昵称" v-model="formData.nickname"/>
				<span class="tip">{{ formData.nickname.length }}/10</span>
			</div>
			<div class="error">{{ error.nickname }}</div>
		</div>
		<div class="form-item">
			<div class="text-area">
				<textarea placeholder="输入内容" maxlength="300" v-model="formData.content"></textarea>
				<span class="tip">{{ formData.content.length }}/300</span>
			</div>
			<div class="error">{{ error.content }}</div>
		</div>
		<div class="form-item">
			<div class="button-area">
				<button :disabled="isSubmiting" @click="handleSubmit">
					{{ isSubmiting ? "提交中..." : "提交" }}
				</button>
			</div>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			formData: {
				nickname: "",
				content: ""
			},
			error: {
				nickname: "",
				content: ""
			},
			isSubmiting: false
		}
	},
	methods: {
		handleSubmit() {
			this.error.nickname = this.formData.nickname ? "" : "昵称不能为空";
			this.error.content = this.formData.content ? "" : "内容不能为空";
			if (this.error.nickname || this.error.content) return;
			
			this.isSubmiting = true;
			this.$emit("submit",this.formData,(successMsg)=>{
				this.$showMessage({
					content: successMsg,
					type: "success",
					container: this.$refs.form,
					callback:()=>{
						this.isSubmiting = false;
						this.formData.content = "";
						this.formData.nickname = "";
						console.log('评论成功')
					}
				})
			})
		}
	}
}
</script>

<style scoped lang="scss">
@import "~@/styles/var.scss";

.data-form-container {
	margin-bottom: 20px;
	overflow: hidden;
	
	.form-item {
		margin-bottom: 8px;
		
		.input-area {
			width: 50%;
			position: relative;
		}
		
		.text-area {
			width: 100%;
			position: relative;
		}
	}
}

.tip {
	position: absolute;
	right: 5px;
	bottom: 05px;
	font-size: 12px;
	color: $default;
}

input,
textarea {
	display: block;
	width: 100%;
	box-sizing: border-box;
	border: 1px dashed $gray;
	outline: none;
	color: $dark;
	font-size: 14px;
	border-radius: 4px;
	
	&:focus {
		border-color: $primary;
	}
}

input {
	padding: 0 10px;
	height: 40px;
}

textarea {
	resize: none;
	padding: 8px 15px;
	height: 120px;
}

.error {
	margin-top: 6px;
	color: $danger;
	font-size: 14px;
	height: 20px;
	line-height: 20px;
}

button {
	position: relative;
	cursor: pointer;
	border: none;
	outline: none;
	
	&:disabled {
		cursor: not-allowed;
	}
}
</style>
