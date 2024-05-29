<template>
    <div class="avatar-container">
		<img
			:src="src"
			:alt="alt"
			:style="{
            width: size + 'px',
            height: size + 'px'
        }"
		/>
	</div>
</template>
<script>
export default {
    name: 'myAvatar',
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: 'avatar'
        },
        size: {
            type: [String, Number],
            default: 100
        },
    }
}
</script>

<style scoped>
img{
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #000;
    margin: 10px;
}
</style>
