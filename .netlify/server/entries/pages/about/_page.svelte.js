import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1johfdc{color:#ccd0e8;font-family:verdana}.p-text.svelte-1johfdc{margin-top:70px}h1.svelte-1johfdc{font-size:5rem;margin-top:20px;letter-spacing:5px}.webdev-text.svelte-1johfdc{color:#ff5733;font-weight:bold}.gallery.svelte-1johfdc{display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:1fr;gap:5px;place-items:center}img.svelte-1johfdc{border-radius:5px;object-fit:contain;width:340px;height:auto;margin:0 auto;box-shadow:#ff5733 0px 1px 4px}@media(max-width: 768px){.gallery.svelte-1johfdc{display:flex;flex-wrap:wrap;gap:25px}p.svelte-1johfdc{order:1;margin:20px}.hike-two.svelte-1johfdc{order:3;margin-bottom:50px}.hike-three.svelte-1johfdc{order:3;margin-bottom:50px}.fleur.svelte-1johfdc{order:3}img.svelte-1johfdc{width:200px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="svelte-1johfdc" data-svelte-h="svelte-l7yfzr">Callum Laing</h1> <div class="gallery svelte-1johfdc" data-svelte-h="svelte-7au45b"><img class="hike-two svelte-1johfdc" src="hike-two.JPG" alt=""> <span><img class="fleur svelte-1johfdc" src="fleur.JPG" alt=""> <div class="p-text svelte-1johfdc"><p class="svelte-1johfdc">I&#39;m a <span class="webdev-text svelte-1johfdc">Front-End Web Developer</span> in England, UK, with a passion
				for creating intuitive, dynamic and responsive user experiences.</p> <p class="svelte-1johfdc">While I&#39;m deeply immersed in the world of web development, I also make sure to balance
				things out by enjoying various sports, going on hikes, and spending quality time with my
				adorable pup, Fleur.</p></div></span> <img class="hike-three svelte-1johfdc" src="hike-three.JPG" alt=""> </div>`;
});
export {
  Page as default
};
