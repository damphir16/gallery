<template>
	<!-- Delete Dialog -->
	<base-dialog
		title="Eliminar"
		v-if="deleteElement">
		<template #default> ¿Seguro que desea eliminar este elemento? </template>
		<template #actions>
			<base-button
				@click="declineDelete"
				mode="light"
				>Cancelar</base-button
			>
			<base-button
				@click="aceptDelete"
				mode="dark"
				>Aceptar</base-button
			>
		</template>
	</base-dialog>
	<!-- Edit Dialog -->
	<base-dialog
		title="Editar"
		v-if="editElement">
		<template #default>
			<form>
				<div class="datos">
					<label
						class="element"
						for="flowerName"
						>Nombre</label
					>
					<input
						class="element"
						id="flowerName"
						type="text"
						v-bind:placeholder="this.targetToEdit.name"
						ref="nameEdit" />
				</div>
				<div class="datos">
					<label
						class="element"
						for="flowerDescription"
						>Descripción</label
					>
					<textarea
						class="element"
						name="flowerDescription"
						id="flowerDescription"
						ref="descriptionEdit"
						>{{ this.targetToEdit.description }}</textarea
					>
				</div>
				<div class="datos">
					<label
						class="element"
						for="flowerType"
						>Tipo</label
					>
					<select
						class="element"
						name="flowerType"
						id="flowerType"
						ref="typeEdit">
						<option
							class="element"
							value="Spring">
							Spring
						</option>
						<option
							class="element"
							value="Events">
							Events
						</option>
						<option
							class="element"
							value="Corporate">
							Corporate
						</option>
						<option
							class="element"
							value="Winter">
							Winter
						</option>
						<option
							class="element"
							value="Weddings">
							Weddings
						</option>
						<option
							class="element"
							value="Bereavement">
							Bereavement
						</option>
						<option
							class="element"
							value="Autumn">
							Autumn
						</option>
						<option
							class="element"
							value="Summer">
							Summer
						</option>
					</select>
				</div>
			</form>
		</template>
		<template #actions>
			<base-button
				mode="light"
				@click="this.declineEdit"
				>Cancelar</base-button
			>
			<base-button
				mode="dark"
				@click="this.aceptEdit"
				>Aceptar</base-button
			>
		</template>
	</base-dialog>
	<!-- Add Dialog -->
	<base-dialog
		title="Agregar"
		v-if="addElement">
		<template #default>
			<form>
				<div class="datos">
					<label
						class="element"
						for="newName"
						>Nombre</label
					>
					<input
						class="border-gray-900 border rounded-lg element"
						id="newName"
						type="text"
						ref="newName"
						@keyup="missingDataHandler()" />
				</div>
				<div class="datos">
					<label
						class="element"
						for="newDescription"
						>Descripción</label
					>
					<textarea
						class="element border-gray-900 border rounded-lg element"
						name="newDescription"
						id="newDescription"
						ref="newDescription"
						@keyup="missingDataHandler()"></textarea>
				</div>
				<div class="datos">
					<label
						class="element"
						for="newType"
						>Tipo</label
					>
					<select
						class="element border-gray-900 border rounded-lg element"
						name="newType"
						id="newType"
						ref="newType">
						<option
							class="element"
							value="Spring">
							Spring
						</option>
						<option
							class="element"
							value="Events">
							Events
						</option>
						<option
							class="element"
							value="Corporate">
							Corporate
						</option>
						<option
							class="element"
							value="Winter">
							Winter
						</option>
						<option
							class="element"
							value="Weddings">
							Weddings
						</option>
						<option
							class="element"
							value="Bereavement">
							Bereavement
						</option>
						<option
							class="element"
							value="Autumn">
							Autumn
						</option>
						<option
							class="element"
							value="Summer">
							Summer
						</option>
					</select>
				</div>
				<p
					class="missingData"
					v-if="missing">
					No puede tener campos sin llenar
				</p>
			</form>
		</template>
		<template #actions>
			<base-button
				mode="light"
				@click="this.declineAdd"
				>Cancelar</base-button
			>
			<base-button
				mode="dark"
				@click="this.aceptAdd"
				>Aceptar</base-button
			>
		</template>
	</base-dialog>
	<navigator @eventFilter="eventFilterHandler"></navigator>
	<div class="addButtonContainer">
		<base-button
			class="addButton"
			mode="transparent"
			@click="addElementHandler"
			><span>+</span>AGREGAR</base-button
		>
	</div>
	<section class="gallery">
		<gallery-item
			v-for="image in filteredImages"
			:key="image.id"
			v-bind:source="image"
			@deleteEvent="deleteElementHandler"
			@editEvent="editElementHandler">
		</gallery-item>
	</section>
</template>

<script>
import Navigator from "../layout/Navigator.vue";
import GalleryItem from "./GalleryItem.vue";
export default {
	beforeMount() {
		this.imageFilter = "All";
		this.eventFilterHandler({ applyFilter: "All" });
	},
	methods: {
		deleteItem(name) {
			this.images = this.images.filter((img) => img.name !== name);
			this.declineDelete();
		},
		deleteElementHandler(data) {
			this.deleteElement = true;
			this.targetToDelete = data.target.name;
		},
		aceptDelete() {
			this.deleteElement = true;
			this.deleteItem(this.targetToDelete);
		},
		declineDelete() {
			this.deleteElement = false;
			this.targetToDelete = null;
		},
		editItem(targetToEdit) {
			targetToEdit.name = this.$refs.nameEdit.value;
			targetToEdit.description = this.$refs.descriptionEdit.value;
			targetToEdit.type = this.$refs.typeEdit.value;
			this.declineEdit();
		},
		editElementHandler(data) {
			this.editElement = true;
			this.targetToEdit = data.target;
		},
		aceptEdit() {
			this.editElementElement = true;
			this.editItem(this.targetToEdit);
		},
		declineEdit() {
			this.editElement = false;
			this.targetToDelete = null;
		},
		addElementHandler() {
			this.addElement = !this.addElement;
		},
		aceptAdd() {
			if (!this.missing) {
				this.targetToAdd = {
					name: this.$refs.newName.value,
					description: this.$refs.newDescription.value,
					image: null,
					type: this.$refs.newType.value,
				};
				this.images.unshift(this.targetToAdd);
				this.targetToAdd = null;
				this.addElementHandler();
			}
		},
		declineAdd() {
			this.addElementHandler();
		},
		eventFilterHandler(data) {
			console.log(data);
			this.imageFilter = data.applyFilter;
			if (this.imageFilter !== "All") {
				this.filteredImages = [];
				this.images.forEach((obj) => {
					if (obj.type === this.imageFilter) this.filteredImages.push(obj);
				});
			} else this.filteredImages = this.images;
		},
		missingDataHandler() {
			console.log(this.missing);
			if (this.$refs.newName.value.trim() === "" || this.$refs.newDescription.value.trim() === "") this.missing = true;
			else this.missing = false;
			console.log(this.missing);
		},
	},
	data() {
		return {
			addElement: false,
			targetToAdd: null,
			invalidField: false,
			deleteElement: false,
			targetToDelete: null,
			editElement: false,
			targetToEdit: null,
			imageFilter: "All",
			filteredImages: [],
			missing: true,
			images: [
				{
					name: "Spring Kaleidoscope",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, distinctio. Quis perferendis     nihil voluptas accusantium velit unde soluta consectetur architecto? Cumque totam facere    accusantium mollitia consectetur tempore similique repellendus minus?",
					type: "Spring",
					img: "../../../public/spring_kaleidoscope.webp",
				},
				{
					name: "Darling Delphinus",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, distinctio. Quis perferendis     nihil voluptas accusantium velit unde soluta consectetur architecto? Cumque totam facere    accusantium mollitia consectetur tempore similique repellendus minus?",
					type: "Summer",
					img: "../../../public/darling_delphiniums.webp",
				},
				{
					name: "Rosa",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, distinctio. Quis perferendis     nihil voluptas accusantium velit unde soluta consectetur architecto? Cumque totam facere    accusantium mollitia consectetur tempore similique repellendus minus?",
					type: "Spring",
					img: "../../../public/native_spring_bouquet.webp",
				},
				{
					name: "Margarita",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, distinctio. Quis perferendis     nihil voluptas accusantium velit unde soluta consectetur architecto? Cumque totam facere    accusantium mollitia consectetur tempore similique repellendus minus?",
					type: "Summer",
					img: "../../../public/white_blooms.webp",
				},
				{
					name: "Magnolia",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, distinctio. Quis perferendis     nihil voluptas accusantium velit unde soluta consectetur architecto? Cumque totam facere    accusantium mollitia consectetur tempore similique repellendus minus?",
					type: "Summer",
					img: "../../../public/WinterArtboard.webp",
				},
			],
		};
	},
	components: {
		Navigator,
		GalleryItem,
	},
};
</script>

<style scoped>
.addButtonContainer {
	display: flex;
	justify-content: start;
	margin: 0 5%;
}
.addButton {
	display: flex;
	align-items: center;
}
.addButton span {
	font-size: xx-large;
	margin-right: 1rem;
}

.gallery {
	/* background-color: #aaa; */
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	margin: 0 5%;
	justify-items: center;
	max-width: 100%;
}

@media (min-width: 768px) {
	.addButtonContainer {
		margin: 0 10%;
		margin-bottom: 2rem;
	}
	.gallery {
		margin: 0 10%;
		grid-template-columns: repeat(3, 1fr);
	}
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
.missingData {
	font-size: 1.8rem;
	color: crimson;
	width: 100%;
	text-align: center;
}
</style>
