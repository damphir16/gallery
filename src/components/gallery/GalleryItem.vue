<template>
	<div
		class="card"
		ref="card">
		<base-dialog
			title="Información"
			v-if="showInfo">
			<template #default>
				<div class="datos">
					<p class="element">Nombre:</p>
					<p class="element">{{ this.source.name }}</p>
				</div>
				<div class="datos">
					<p class="element">Detalles:</p>
					<p class="element">{{ this.source.description }}</p>
				</div>
				<div class="datos">
					<p class="element">Tipo:</p>
					<p class="element">{{ this.source.type }}</p>
				</div>
			</template>
			<template #actions>
				<base-button
					mode="dark"
					@click="showInfoHandler"
					>Close</base-button
				>
			</template>
		</base-dialog>
		<img
			v-bind:src="this.source.img"
			alt="foto" />
		<div class="layer">
			<menu class="menu">
				<base-button
					class="menu-button"
					mode="transparent"
					@click="showInfoHandler"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="32"
						height="32"
						viewBox="0,0,256,256">
						<g
							fill="#ffffff"
							fill-rule="nonzero"
							stroke="none"
							stroke-width="1"
							stroke-linecap="butt"
							stroke-linejoin="miter"
							stroke-miterlimit="10"
							stroke-dasharray=""
							stroke-dashoffset="0"
							font-family="none"
							font-weight="none"
							font-size="none"
							text-anchor="none"
							style="mix-blend-mode: normal">
							<g transform="scale(8,8)">
								<path
									d="M16,3c-7.16797,0 -13,5.83203 -13,13c0,7.16797 5.83203,13 13,13c7.16797,0 13,-5.83203 13,-13c0,-7.16797 -5.83203,-13 -13,-13zM16,5c6.08594,0 11,4.91406 11,11c0,6.08594 -4.91406,11 -11,11c-6.08594,0 -11,-4.91406 -11,-11c0,-6.08594 4.91406,-11 11,-11zM15,10v2h2v-2zM15,14v8h2v-8z"></path>
							</g>
						</g>
					</svg>
				</base-button>
				<base-button
					class="menu-button"
					mode="transparent"
					@click="editInfoHandler"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="32"
						height="32"
						viewBox="0,0,256,256">
						<g
							fill="#ffffff"
							fill-rule="nonzero"
							stroke="none"
							stroke-width="1"
							stroke-linecap="butt"
							stroke-linejoin="miter"
							stroke-miterlimit="10"
							stroke-dasharray=""
							stroke-dashoffset="0"
							font-family="none"
							font-weight="none"
							font-size="none"
							text-anchor="none"
							style="mix-blend-mode: normal">
							<g transform="scale(8,8)">
								<path
									d="M23.90625,3.96875c-1.04687,0 -2.09375,0.40625 -2.90625,1.21875l-15.8125,15.8125l-0.0625,0.3125l-1.09375,5.5l-0.3125,1.46875l1.46875,-0.3125l5.5,-1.09375l0.3125,-0.0625l15.8125,-15.8125c1.625,-1.625 1.625,-4.1875 0,-5.8125c-0.8125,-0.8125 -1.85937,-1.21875 -2.90625,-1.21875zM23.90625,5.875c0.50391,0 1.01172,0.23047 1.5,0.71875c0.97266,0.97266 0.97266,2.02734 0,3l-0.71875,0.6875l-2.96875,-2.96875l0.6875,-0.71875c0.48828,-0.48828 0.99609,-0.71875 1.5,-0.71875zM20.3125,8.71875l2.96875,2.96875l-12.09375,12.09375c-0.65625,-1.28125 -1.6875,-2.3125 -2.96875,-2.96875zM6.9375,22.4375c1.19922,0.48438 2.14063,1.42578 2.625,2.625l-3.28125,0.65625z"></path>
							</g>
						</g>
					</svg>
				</base-button>
				<base-button
					class="menu-button"
					mode="transparent"
					@click="deleteElementHandler"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="32"
						height="32"
						viewBox="0,0,256,256">
						<g
							fill="none"
							fill-rule="nonzero"
							stroke="#ffffff"
							stroke-width="3"
							stroke-linecap="none"
							stroke-linejoin="miter"
							stroke-miterlimit="10"
							stroke-dasharray=""
							stroke-dashoffset="0"
							font-family="none"
							font-weight="none"
							font-size="none"
							text-anchor="none"
							style="mix-blend-mode: normal">
							<g transform="scale(5.33333,5.33333)">
								<path
									d="M19.5,11.5v-1.5c0,-2.5 2,-4.5 4.5,-4.5c2.5,0 4.5,2 4.5,4.5v1.5"
									stroke-linecap="butt"></path>
								<path
									d="M8.5,11.5h31"
									stroke-linecap="round"></path>
								<path
									d="M36.5,23.5v-12"
									stroke-linecap="round"></path>
								<path
									d="M11.5,18.7v19.8c0,2.2 1.8,4 4,4h17c2.2,0 4,-1.8 4,-4v-7.5"
									stroke-linecap="round"></path>
								<path
									d="M20.5,19.5v15"
									stroke-linecap="round"></path>
								<path
									d="M27.5,19.5v15"
									stroke-linecap="round"></path>
							</g>
						</g>
					</svg>
				</base-button>
			</menu>
			<section>
				<h2 class="title">{{ source.name.toUpperCase() }}</h2>
			</section>
		</div>
	</div>
</template>
<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
	data() {
		return {
			showInfo: false,
		};
	},
	components: {
		BaseButton,
	},
	methods: {
		editInfoHandler() {
			this.$emit("editEvent", { target: this.source });
		},
		deleteElementHandler() {
			this.$emit("deleteEvent", { target: this.source });
		},
		showInfoHandler() {
			this.showInfo = !this.showInfo;
		},
	},
	props: ["source"],
	emits: ["deleteEvent", "editEvent"],
};
</script>

<style scoped>
.card {
	/* background-color: aquamarine; */
	width: 100%;
	height: 50rem;
}
.card img {
	width: 100%;
	height: 50rem;
	position: relative;
}
.layer {
	background-color: rgba(80, 80, 80, 0.6);
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	visibility: hidden;
	transform: translateY(-100%);
}
.card:hover {
	.layer {
		visibility: visible;
	}
}
.menu {
	height: 90%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}
.title {
	font-size: 1.5rem;
	color: #fff;
	font-family: Avenir, sans-serif;
	letter-spacing: 0.2rem;
	margin-left: 2rem;
}
base-button {
	z-index: 100;
}
.datos {
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: 20% 1fr;
	grid-template-rows: 1fr;
	gap: 0;
}
.datos .element {
	font-size: 1.8rem;
	font-family: Roboto;
	/* letter-spacing: 0.1rem; */
	font-weight: 600;
	margin-bottom: 1rem;
	padding: 0.5rem;
}
textarea {
	height: 7lh;
	resize: none;
}
</style>
