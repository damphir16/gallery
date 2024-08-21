<template>
	<section>
		<div>
			<article>
				<h2>Gallery</h2>
				<p>"If you look to the richt way, you can see that the whole world is a garden" - Frances Hodgson Burnett</p>
			</article>
		</div>
	</section>
</template>

<style scoped>
section {
	width: 100%;
	height: 650px;
	display: flex;
	justify-content: left;
	align-items: end;
	background-image: url("../../../public/Hero_mobile.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
div {
	margin: 0 5%;
	max-width: 1380px;
}
article {
	max-width: 412px;
	margin-bottom: 5%;
}
h2 {
	font-size: 3rem;
	color: #fff;
	font-weight: 500;
}
p {
	font-size: 2rem;
	color: #fff;
	line-height: 3rem;
	margin-top: 2rem;
}

@media (min-width: 768px) {
	section {
		background-image: url("../../../public/Hero.jpg");
	}
	div {
		margin: 0 10%;
	}
	p {
		line-height: 4rem;
	}
}
</style>
