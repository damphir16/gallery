<template>
	<footer class="container">
		<section class="section1">
			<div class="section1-sub">
				<img
					src="../../../public/footerLogo.png"
					alt="footerLogo"
					class="footerLogo" />
				<p class="text-xl text-white text-pretty text-center max-w-screen-md">
					Flowers Vasette acknowledges the Traditional Custodians of the land where we work and recognise their connections to land, sea and
					community. We pay our respect to their Elders past and present and extend that respect to all Aboriginal and Torres Strait
					Islander peoples today
				</p>
			</div>
		</section>
		<section>
			<form>
				<label for="subscribe">Subscribe</label>
				<div>
					<input
						type="text"
						name="subscribe"
						id="subscribe"
						placeholder="Email address" />
					<base-button mode="light">SUBMIT</base-button>
				</div>
			</form>
		</section>
		<div class="separator1"></div>
		<section class="links">
			<div class="linksBox">
				<base-button mode="transparentLight">Privacy</base-button>
				<base-button mode="transparentLight">Delivery</base-button>
				<base-button mode="transparentLight">FAQs</base-button>
				<base-button mode="transparentLight">Terms & Conditions</base-button>
			</div>
			<div class="linksBox">
				<base-button mode="transparentLight">Flower care</base-button>
				<base-button mode="transparentLight">Returns</base-button>
				<base-button mode="transparentLight">Contact</base-button>
				<base-button mode="transparentLight">Victorian Liquor License: 36054992</base-button>
			</div>
			<div class="linksBox">
				<base-button mode="transparentLight">247 Brunswick St, Fitzroy, Victoria, Australia 3065</base-button>
				<base-button mode="transparentLight">247 Brunswick St, Fitzroy, Victoria, Australia 3065</base-button>
				<base-button mode="transparentLight">247 Brunswick St, Fitzroy, Victoria, Australia 3065</base-button>
			</div>
		</section>
		<section class="socialesContainer">
			<div class="sociales">
				<base-button mode="transparentLight">Instagram</base-button>
				<base-button mode="transparentLight">Facebook</base-button>
				<base-button mode="transparentLight">Twitter</base-button>
				<base-button mode="transparentLight">Pinteres</base-button>
				<base-button mode="transparentLight">Youtube</base-button>
			</div>
		</section>
	</footer>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	background-color: #333334;
	max-width: 100%;
	margin-top: 2rem;
	padding-bottom: 2rem;
}
.section1 {
	display: flex;
	flex-wrap: wrap;
	width: 90%;
	margin: 0 auto;
	align-items: center;
}
.section1-sub {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
	margin: 0 auto;
}
.footerLogo {
	width: 13rem;
	height: 13rem;
}
.separator1 {
	width: 80%;
	height: 2px;

	margin: 0 auto;
	background-color: #fff;
	margin-top: 2rem;
}
form {
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
}
label {
	font-size: 1.8rem;
	width: 100%;
	color: #fff;
}
form div {
	display: flex;
}
input {
	background-color: transparent;
	border: 1px #fff solid;
	padding: 0.5rem;
	width: 80%;
	line-height: 1.8rem;
	font-size: 1.8rem;
	color: #fff;
}
input::placeholder {
	font-size: 1.8rem;
	line-height: 1.8rem;
	color: #fff;
}
form button {
	width: 20%;
}
.links {
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
	margin: 0 5%;
	padding: 4rem;
}
.linksBox {
	display: flex;
	flex-direction: column;
	border-bottom: 2px #fff solid;
}
.sociales {
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin: 0 auto;
	width: 80%;
}
.socialesContainer {
	margin: 0 5%;
}
@media (min-width: 768px) {
	.section1 {
		width: 80%;
	}
	form {
		max-width: 30%;
	}
	input {
		max-width: 70%;
	}
	form button {
		min-width: 9rem;
	}
	.links {
		margin: 0 10%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 4rem;
	}
	.linksBox {
		border-bottom: none;
		border-left: 2px solid #fff;
	}
	.socialesContainer {
		margin: 0 10%;
	}
}
</style>
