<template>
	<teleport to="body">
		<div>
			<dialog open>
				<header>
					<slot name="header">
						<h2>{{ title }}</h2>
					</slot>
				</header>
				<section>
					<slot></slot>
				</section>
				<menu>
					<slot name="actions"></slot>
				</menu>
			</dialog>
		</div>
	</teleport>
</template>

<script>
export default {
	props: ["title"],
};
</script>

<style scoped>
div {
	position: fixed;
	top: 0;
	left: 0;
	height: 100dvh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 10;
}
dialog {
	position: fixed;
	top: 20dvh;
	left: 10%;
	width: 80%;
	z-index: 100;
	border: none;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	overflow: hidden;
}
header {
	background-color: #333334;
	color: #333;
	width: 100%;
	padding: 1rem;
	font-size: 2.3rem;
	color: #fff;
}
header h2 {
	font-weight: 500;
	font-size: 2rem;
}
section {
	font-size: 2rem;
	padding: 1rem;
}
menu {
	padding: 1rem;
	display: flex;
	justify-content: flex-end;
	font-size: 2.5rem;
	margin-right: 3rem;
	gap: 3rem;
}
@media (min-width: 768px) {
	dialog {
		left: calc(50% - 30rem);
		width: 60rem;
	}
}
</style>
