<template>
	<header :class="{ scroll: hasScroll }">
		<img
			src="../../../public/Logo.png"
			alt="Vasette" />
	</header>
</template>

<script>
export default {
	data() {
		return {
			hasScroll: false,
		};
	},
	methods: {
		handleScroll() {
			this.hasScroll = window.scrollY > 50;
		},
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
	},
};
</script>
<style scoped>
header {
	position: fixed;
	top: 0;
	background: none;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	transition: all 0.3s ease-out;
	filter: invert(100%);
}
img {
	height: 10rem;
}
header.scroll {
	background-color: #fff;
	filter: none;
}
</style>
