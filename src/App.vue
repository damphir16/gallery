<template>
	<the-header></the-header>
	<the-hero></the-hero>
	<gallery-grid></gallery-grid>
	<the-footer></the-footer>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheHero from "./components/layout/TheHero.vue";
import GalleryGrid from "./components/gallery/GalleryGrid.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
	components: {
		TheHeader,
		TheHero,
		GalleryGrid,
		TheFooter,
	},
};
</script>

<style>
* {
	font-size: 62.5%;
	font-family: Avenir, sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html {
	min-width: 320px;
}
</style>
