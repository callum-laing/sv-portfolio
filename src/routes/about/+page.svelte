<h1>Callum Laing</h1>
<div class="gallery">
	<img class="hike-two" src="hike-two.JPG" alt="" />
	<span>
		<img class="fleur" src="fleur.JPG" alt="" />
		<div class="p-text">
			<p>
				I'm a <span class="webdev-text">Front-End Web Developer</span> in England, UK, with a passion
				for creating intuitive, dynamic and responsive user experiences.
			</p>

			<p>
				While I'm deeply immersed in the world of web development, I also make sure to balance
				things out by enjoying various sports, going on hikes, and spending quality time with my
				adorable pup, Fleur.
			</p>
		</div>
	</span>
	<img class="hike-three" src="hike-three.JPG" alt="" />
</div>

<style>
	p {
		color: #ccd0e8;
		font-family: verdana;
	}

	.p-text {
		margin-top: 70px;
	}
	h1 {
		font-size: 5rem;
		margin-top: 20px;
		letter-spacing: 5px;
	}

	.webdev-text {
		color: #ff5733;
		font-weight: bold;
	}
	.gallery {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		gap: 5px;
		place-items: center;
	}
	img {
		border-radius: 5px;
		object-fit: contain;
		width: 340px;
		height: auto;
		margin: 0 auto;
		box-shadow: #ff5733 0px 1px 4px;
	}

	@media (max-width: 768px) {
		.gallery {
			display: flex;
			flex-wrap: wrap;
			gap: 25px;
		}
		p {
			order: 1;
			margin: 20px;
		}
		.hike-two {
			order: 3;
			margin-bottom: 50px;
		}
		.hike-three {
			order: 3;
			margin-bottom: 50px;
		}
		.fleur {
			order: 3;
		}
		img {
			width: 200px;
		}
	}
</style>
