<h1>Callum Laing</h1>

<div class="gallery">
	<img class="hike-two" src="hike-two.JPG" alt="" loading="lazy" />
	<span>
		<img class="fleur" src="fleur.JPG" alt="" loading="lazy" />
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
	<img class="hike-three" src="hike-three.JPG" alt="" loading="lazy" />
</div>

<!-- <div class="container">
	<div class="skills">
		<span
			><h2>Languages</h2>
			<ul>
				<li>HTML5</li>
				<li>CSS3</li>
				<li>JavaScript</li>
				<li>C#</li>
			</ul></span
		>
		<span
			><h2>Frameworks</h2>
			<ul>
				<li>React</li>
				<li>Next</li>
				<li>Svelte</li>
				<li>Sveltekit</li>
				<li>.NET</li>
			</ul></span
		>
		<span>
			<h2>Tools</h2>
			<ul>
				<li>Git</li>
				<li>Github</li>
				<li>VSCode</li>
				<li>Visual Studio</li>
				<li>Vite</li>
				<li>Cloudflare</li>
				<li>Netlify</li>
			</ul>
		</span>
	</div>
	<div class="intro">
		<span class="aboutText">
			<p>
				I'm a <span class="webdev-text">Front-End Web Developer</span> in England, UK, with a passion
				for creating intuitive, dynamic and responsive user experiences.
			</p>

			<p>
				While I'm deeply immersed in the world of web development, I also make sure to balance
				things out by enjoying various sports, going on hikes, and spending quality time with my
				adorable pup, Fleur.
			</p>
		</span>
		<span class="imgAbout">
			<img class="hike-two" src="hike-two.JPG" alt="" />
			<img class="fleur" src="fleur.JPG" alt="" />
			<img class="hike-three" src="hike-three.JPG" alt="" />
		</span>
		<div class="p-text" />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.intro,
	.skills {
		width: 50%;
	}

	h1 {
		font-size: 5rem;
		margin-top: 10px;
		letter-spacing: 5px;
	}

	h2 {
		text-align: center;
	}

	.skills {
		display: flex;
		gap: 50px;
		color: #ff5733;
		justify-content: center;
		font-family: 'Fjalla One', sans-serif;
		margin-top: 50px;
	}

	.intro {
		text-align: center;
		margin-top: 150px;
	}

	ul > li {
		list-style-type: none;
		color: #ccd0e8;
	}

	img {
		border-radius: 5px;
		object-fit: contain;
		width: 200px;
		height: auto;
	}

	.imgAbout {
		display: flex;
		justify-content: space-between;
		gap: 20px;
	}

	.fleur {
		width: 350px;
	}
	p {
		color: #ccd0e8;
		font-family: verdana;
	} -->

<style>
	h1 {
		font-size: 5rem;
		margin-top: 10px;
		letter-spacing: 5px;
	}

	p {
		color: #ccd0e8;
		font-family: verdana;
	}

	.p-text {
		margin-top: 70px;
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
