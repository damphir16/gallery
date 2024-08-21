<template>
	<button
		v-on:click="event"
		v-bind:class="{
			darkMode: mode === 'dark',
			lightMode: mode === 'light',
			transparent: mode === 'transparent',
			transparentLight: mode === 'transparentLight',
		}">
		<slot></slot>
		<a ref="borderB"></a>
	</button>
</template>

<script>
export default {
	props: ["event", "mode"],
	methods: {},
};
</script>

<style scoped>
button {
	border: none;
	font-size: 1.6rem;
	letter-spacing: 2px;
	padding: 1rem;
	text-align: left;
	cursor: pointer;
}

button.darkMode {
	background-color: #333334;
	color: #fff;
	font-family: sans-serif;
}
button.lightMode {
	background-color: #fff;
	color: #333334;
	a {
		background-color: #333334;
	}
}
button.transparent {
	background-color: rgba(0, 0, 0, 0);
	color: #333334;
	a {
		background-color: #fff;
	}
}
button.transparentLight {
	background-color: transparent;
	color: #fff;
	a {
		background-color: #fff;
	}
}
a {
	display: block;
	position: relative;
	bottom: 0;
	left: 0;
	height: 2px;
	width: 0;
	background-color: #333334;
	/* animation: borderBottom 0.5s ease-out forwards; */
}
.animate {
	animation: borderBottom;
}
@keyframes borderBottom {
	from {
		width: 0;
	}
	to {
		width: 100%;
	}
}
</style>
