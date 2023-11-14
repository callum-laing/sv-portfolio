<h1>Callum Laing</h1>
<div class="gallery">
	<img src="hike-two.JPG" alt="" />
	<span>
		<img src="fleur.JPG" alt="" />
		<p>
			I'm a <span class="webdev-text">Front-End Web Developer</span> in England, UK, with a passion for
			creating intuitive, dynamic and responsive user experiences.
		</p>

		<p>
			While I'm deeply immersed in the world of web development, I also make sure to balance things
			out by enjoying various sports, going on hikes, and spending quality time with my adorable
			pup, Fleur.
		</p>
	</span>
	<img src="hike-three.JPG" alt="" />
</div>

<style>
	h1,
	p {
		color: #ccd0e8;
		font-family: arial;
	}

	h1 {
		text-align: center;
		font-size: 5rem;
		margin-top: 20px;
		font-family: 'Fjalla One', sans-serif;
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
		box-shadow: 2px 2px 2px 2px;
		object-fit: contain;
		width: 340px;
		height: auto;
		margin: 0 auto;
	}

	.wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50%;
	}
</style>
