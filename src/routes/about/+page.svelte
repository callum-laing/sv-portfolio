<h1>Callum Laing</h1>

<div class="gallery">
	<img class="hike-two" src="hike-two.JPG" alt="" loading="lazy" />
	<span>
		<div class="p-text">
			<p>
				Thanks for checking out my site! I hope I've been able to showcase some of the skills you're
				looking for in hiring your next Web Developer.
			</p>
			<p>
				I've spent most of my career in Sales or Administrative positions and always looked at
				coding as a hobby that I'd learn whenever time allowed. It wasn't long before I decided that
				this hobby had to become a career, and I have since invested real time in growing as a Web
				Developer.
			</p>

			<p>
				It's an exciting journey, and since recently retiring from many years of playing Rugby and
				American Football, it's been fulfilling redirecting that energy and passion into Web
				Development.
			</p>
		</div>
	</span>
	<img class="hike-three" src="hike-three.JPG" alt="" loading="lazy" />
</div>

<style>
	h1 {
		font-size: 5rem;
		margin-top: 5%;
		letter-spacing: 5px;
		text-decoration: underline #ff5733;
		text-underline-offset: 0.15em;
	}

	p {
		color: #ccd0e8;
		font-family: verdana;
		font-size: 1.2rem;
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
		box-shadow: black 0px 1px 4px;
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
		img {
			width: 200px;
		}
	}
</style>
