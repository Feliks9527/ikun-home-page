<template>
    <div class="icon-container">
        <i
            class="iconfont"
            :class="name"
            :style="{
                fontSize: size + 'px',
                color: color,
                fontWeight: weight
            }">
        </i>
    </div>
</template>
<script>

export default {
    name: 'myIcon',
    props: {
        name: {
            type: String,
            required: true
        },
        size: {
            type: [String, Number],
            default: 16
        },
        color: {
            type: String,
            default: '#000'
        },
		weight: {
			type: String,
			default: 'normal'
		}
    }
}
</script>

<style scoped>
@import '//at.alicdn.com/t/c/font_4522550_df2q33vbou6.css';
</style>
