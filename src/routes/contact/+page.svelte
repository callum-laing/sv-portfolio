<h1>Get in touch</h1>
<div class="grid-wrap">
	<div class="links">
		<div class="mailme">
			<svg class="social-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<title>email-outline</title>
				<path
					d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
				/>
			</svg>
			<a class="social-link" href="mailto:hire@callum-laing.com">hire@callum-laing.com</a>
		</div>
		<div class="github">
			<svg class="social-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<title>github</title>
				<path
					d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
				/>
			</svg>
			<a class="social-link" href="https://github.com/callum-laing">callum-laing</a>
		</div>
		<div class="linkedin">
			<svg class="social-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<title>linkedin</title>
				<path
					d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
				/>
			</svg>
			<a class="social-link" href="http://www.linkedin.com/in/callumlaing91">callumlaing91</a>
		</div>
		<div class="resume">
			<svg class="social-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<title>resume</title>
				<path
					d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M14,20V19C14,17.67 11.33,17 10,17C8.67,17 6,17.67 6,19V20H14M10,12A2,2 0 0,0 8,14A2,2 0 0,0 10,16A2,2 0 0,0 12,14A2,2 0 0,0 10,12Z"
				/>
			</svg>
			<a class="social-link" href="https://callum-laing.github.io/resume/">Resume</a>
		</div>
	</div>
	<form action="https://formspree.io/f/xknykdjb" method="POST">
		<label for="subject">
			<p>Subject:</p>
			<input type="text" name="subject" />
		</label>
		<label for="body">
			<p>Body:</p>
			<textarea rows="5" name="body" class="body" />
		</label>
		<button type="submit">Submit</button>
	</form>
</div>

<style>
	.grid-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 100px;
	}
	h1,
	p {
		color: #ccd0e8;
	}

	h1 {
		font-size: 5rem;
		margin-top: 5%;
		text-decoration: underline #ff5733;
		text-underline-offset: 0.15em;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	button {
		background-color: #1d2242;
		border-radius: 5px;
		padding: 0.3em;
		width: 70px;
		color: #ccd0e8;
		font-size: 1.1em;
		font-family: 'Fjalla One', sans-serif;
	}

	button:hover {
		background-color: #ff5733;
		cursor: pointer;
	}

	svg {
		width: 50px;
		height: auto;
		fill: #ff5733;
	}

	.github,
	.linkedin,
	.mailme,
	.resume {
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	input,
	textarea {
		width: 400px;
		border: 2px solid #07080f;
		background-color: #1d2242;
		border-radius: 5px;
		color: #ccd0e8;
		font-family: verdana;
		font-size: 0.9em;
	}

	.body {
		width: 400px;
		height: 150px;
		resize: none;
	}

	a,
	p {
		color: #ccd0e8;
		font-family: 'Fjalla One', sans-serif;
		font-size: 1.1em;
	}

	a:hover {
		color: #1d2242;
	}

	@media (max-width: 768px) {
		.grid-wrap {
			display: flex;
			flex-direction: column;
			margin-bottom: 50px;
			gap: 20px;
		}
	}
</style>
