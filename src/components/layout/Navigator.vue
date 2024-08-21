<template>
	<nav>
		<div>
			<base-button
				mode="light"
				v-for="btn in category"
				v-bind:key="btn.name"
				@click="eventFilterHandler(btn.name)"
				>{{ btn.name.toUpperCase() }}</base-button
			>
		</div>
	</nav>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
	emits: ["eventFilter"],
	components: {
		BaseButton,
	},
	methods: {
		eventFilterHandler(key) {
			console.log(key);
			return this.$emit("eventFilter", { applyFilter: key });
		},
	},
	data() {
		return {
			category: [
				{
					name: "All",
				},
				{
					name: "Spring",
				},
				{
					name: "Events",
				},
				{
					name: "Corporate",
				},
				{
					name: "Winter",
				},
				{
					name: "Weddings",
				},
				{
					name: "Bereavement",
				},
				{
					name: "Autumn",
				},
				{
					name: "Summer",
				},
			],
		};
	},
};
</script>

<style scoped>
nav {
	margin-top: 6rem;
	margin-bottom: 6rem;
	display: block;
	/* background-color: #999; */
	max-width: 100%;
	height: inherit;
}
div {
	margin: 0 5%;
}

@media (min-width: 768px) {
	div {
		margin: 0 10%;
	}
}
</style>
