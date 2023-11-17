import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-8uwtyq{display:flex;justify-content:center;align-content:center;gap:20px;padding:20px;border-bottom:1px solid #ccd0e8}a.svelte-8uwtyq{text-decoration:none;color:#ff5733;font-family:'Fjalla One', sans-serif;letter-spacing:4px}a.svelte-8uwtyq:hover{color:#ccd0e8}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="svelte-8uwtyq" data-svelte-h="svelte-2d6m1v"><a href="/" class="svelte-8uwtyq">home</a> <a href="/projects" class="svelte-8uwtyq">projects</a> <a href="/about" class="svelte-8uwtyq">about</a> <a href="/contact" class="svelte-8uwtyq">contact</a> </nav>`;
});
const global = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".background.svelte-49x9xt{position:fixed;inset:0;display:grid;z-index:-1}svg.svelte-49x9xt{max-width:140%;max-height:140%;place-self:center;opacity:0.2}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  path = $page.url.pathname;
  $$unsubscribe_page();
  return `<div class="background svelte-49x9xt" data-svelte-h="svelte-19anqmm"><svg class="title-logo svelte-49x9xt" viewBox="0 0 336 280" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M278 112C280 114 280 114 280 118C279.18 118.231 278.36 118.462 277.516 118.699C269.383 120.915 269.383 120.915 264 127C263.587 127.722 263.175 128.444 262.75 129.188C261.629 133.391 261.48 137.678 262 142C262.66 142.66 263.32 143.32 264 144C267.058 136.491 267.058 136.491 268.437 128.563C269 125 269 125 271.312 122.563C273.646 121.206 275.33 120.286 278 120C280.805 122.805 279.56 131.623 279.687 135.688C279.711 136.423 279.734 137.158 279.758 137.916C281.497 196.59 281.497 196.59 269.328 210.977C266.134 213.966 266.134 213.966 264 215C260.692 214.684 260.105 214.123 257.875 211.5C251.509 199.616 253.784 186.547 257 174C258.904 168.197 261.189 163.948 266 160C267.485 159.505 267.485 159.505 269 159C268.413 162.895 267.567 166.544 266.437 170.313C265.076 175.623 264.702 180.613 264.687 186.063C264.682 186.801 264.677 187.539 264.672 188.3C264.721 192.056 264.869 193.803 267 197C270.283 184.025 273.131 163.015 269 150C268.443 150.908 267.886 151.815 267.312 152.75C265.06 155.915 263.308 157.983 260 160C257.375 160.063 257.375 160.063 255 159C249.969 152.532 250.503 144.532 251.203 136.738C252.507 128.845 256.572 121.905 262.66 116.746C267.767 113.269 271.779 110.809 278 112Z" fill="black"></path><path d="M101 89C101.765 108.419 101.765 108.419 96.7929 115.789C95.5 117.188 95.5 117.188 93 119C92.01 119 91.02 119 90 119C89.34 114.71 88.68 110.42 88 106C86.68 105.67 85.36 105.34 84 105C83.3451 106.371 82.7015 107.747 82.0625 109.125C81.7028 109.891 81.3432 110.656 80.9726 111.445C76.8286 122.33 77.6239 137.43 81.6367 148.164C82.9035 150.224 82.9035 150.224 85.4804 150.895C88.2051 151.272 88.2051 151.272 90.625 149.062C94.2001 144.453 95.65 139.612 97 134C99.475 133.505 99.475 133.505 102 133C104.056 137.113 103.403 141.504 102.246 145.797C99.4071 154.035 96.293 158.987 88.4336 163.039C84.4902 164.596 81.1338 165.056 77 164C71.5529 161.002 68.8929 156.889 67 151C63.4944 133.62 66.6389 116.732 76 101.812C79.4188 97.9554 84.321 95.9116 88.8437 93.6133C91.9716 92.0799 91.9716 92.0799 94.6562 90.293C97 89 97 89 101 89Z" fill="black"></path><path d="M241 45C243.401 48.6011 243.306 51.2444 243.301 55.4062C243.305 56.1273 243.309 56.8484 243.314 57.5914C243.32 59.1145 243.32 60.6376 243.316 62.1606C243.313 64.4917 243.336 66.8214 243.361 69.1523C243.364 70.6328 243.364 72.1133 243.363 73.5937C243.372 74.2907 243.382 74.9876 243.391 75.7057C243.363 78.6221 243.327 80.5422 241.602 82.9551C240 84 240 84 238 84.125C235.506 82.7222 234.556 81.1618 233.527 78.5195C232.333 72.8137 232.798 66.8009 233 61C230.332 63.6676 229.886 66.5726 229 70.125C228.823 70.8021 228.647 71.4791 228.465 72.1767C227.555 75.686 226.744 79.2028 226 82.75C225 86 225 86 223.125 88C221 89 221 89 217 89C215.467 85.9346 215.897 82.7324 215.938 79.375C215.942 78.6686 215.947 77.9622 215.951 77.2343C215.963 75.4895 215.981 73.7447 216 72C215.34 72 214.68 72 214 72C211.045 79.0801 209.249 85.9266 208.303 93.5156C207.76 97.111 207.192 98.8079 204.59 101.41C202 103 202 103 199 104C196.774 100.661 196.744 99.5575 196.734 95.6601C196.731 94.0639 196.731 94.0639 196.727 92.4355C196.738 90.7659 196.738 90.7659 196.75 89.0625C196.742 87.9842 196.735 86.9059 196.727 85.7949C196.773 66.5791 196.773 66.579 201.375 61.25C204 60 204 60 208 60C208 62.64 208 65.28 208 68C208.563 67.1859 208.563 67.1859 209.137 66.3554C214.581 58.7443 214.581 58.7443 219 57C221.382 57.2722 222.862 57.9312 225 59C225.231 58.4805 225.461 57.961 225.699 57.4258C228.892 50.5981 232.64 44.164 241 45Z" fill="black"></path><path d="M143 156C143.972 158.915 144.116 160.73 144.098 163.759C144.094 164.724 144.091 165.689 144.088 166.682C144.079 167.723 144.071 168.764 144.062 169.836C144.059 170.907 144.055 171.979 144.051 173.083C144.035 177.673 144.007 182.263 143.979 186.853C143.961 190.201 143.949 193.55 143.938 196.898C143.929 197.935 143.921 198.972 143.912 200.04C143.909 201.011 143.906 201.982 143.902 202.982C143.897 203.832 143.892 204.683 143.886 205.559C144.006 208.125 144.435 210.497 145 213C150.933 211.22 153.475 208.794 156.73 203.555C158.418 200.16 159.27 196.7 160.211 193.043C161 191 161 191 163.688 189.375C164.832 189.189 164.832 189.189 166 189C168.069 195.336 169.102 201.577 167.146 208.149C164.473 212.465 159.011 214.4 154.625 216.625C152.529 217.712 150.437 218.808 148.352 219.914C146.957 220.625 146.957 220.625 145.534 221.35C142.675 223.212 141.036 225.287 139 228C136.716 229.36 134.518 230.08 132 231C131 230 131 230 130.893 227.783C130.901 226.803 130.91 225.823 130.918 224.813C130.925 223.704 130.931 222.595 130.938 221.453C130.949 220.242 130.961 219.032 130.973 217.785C130.985 215.236 130.998 212.688 131.01 210.139C131.033 206.11 131.062 202.081 131.096 198.052C131.126 194.172 131.144 190.291 131.16 186.41C131.174 185.218 131.187 184.026 131.201 182.798C131.221 175.947 130.674 169.651 129 163C130.765 161.825 132.537 160.66 134.312 159.5C135.299 158.85 136.285 158.201 137.301 157.531C140 156 140 156 143 156Z" fill="black"></path><path d="M165 41C164.884 41.825 164.768 42.65 164.649 43.5C161.507 65.1719 161.507 65.1719 160 87C159.96 88.2053 159.92 89.4105 159.879 90.6523C159.659 102.988 160.037 116.313 164.512 127.957C165.133 130.555 164.665 132.442 164 135C162.313 135.75 162.313 135.75 160 136C155.701 133.379 153.988 130.539 152 126C147.696 108.184 149.762 88.6576 150.875 70.5625C150.953 69.2535 151.032 67.9444 151.112 66.5957C152.296 49.0448 152.296 49.0448 156.5 44C159.921 41.2635 160.465 41 165 41Z" fill="black"></path><path d="M150 48C149.533 54.1554 148.992 60.2896 148.246 66.418C145.412 89.8721 142.694 115.348 151 138C151 139.32 151 140.64 151 142C148.313 142.812 148.313 142.812 145 143C140.251 139.576 138.482 135.457 137 130C135.872 122.274 135.807 114.612 135.813 106.812C135.813 106.147 135.813 105.482 135.813 104.796C135.833 94.3446 136.175 83.9315 136.813 73.5C136.883 72.2494 136.953 70.9987 137.025 69.7102C137.983 55.7959 137.983 55.7959 143.563 50.625C147.5 48 147.5 48 150 48Z" fill="black"></path><path d="M244 131C249.147 141.637 247.639 155.889 245 167C243.688 170.309 243.102 170.932 240 173C238.68 173 237.36 173 236 173C236 164.09 236 155.18 236 146C229.07 152.93 227.208 163.425 225.188 172.75C223.797 176.556 222.43 177.909 219 180C218.01 180 217.02 180 216 180C211.947 171.894 214.82 155.268 217.25 146.813C218.382 143.812 218.961 143.032 221.563 140.938C224 140 224 140 226 140C226.33 141.65 226.66 143.3 227 145C227.42 144.238 227.42 144.238 227.848 143.461C231.324 137.491 236.087 129.561 244 131Z" fill="black"></path><path d="M193 70C193 81.88 193 93.76 193 106C189.535 106.495 189.535 106.495 186 107C185.34 106.01 184.68 105.02 184 104C183.697 104.603 183.394 105.207 183.082 105.828C180.108 111.503 177.639 115.58 171.437 118C169 118 169 118 166.93 116.426C161.254 109.29 162.871 95.8645 163.418 87.2422C164.2 82.8885 165.736 80.1458 169 77.1875C171 76 171 76 174 76C173.984 77.0215 173.984 77.0215 173.968 78.0637C173.927 81.1466 173.901 84.2294 173.875 87.3125C173.858 88.3844 173.841 89.4562 173.824 90.5605C173.815 92.1026 173.815 92.1026 173.805 93.6758C173.789 95.0976 173.789 95.0976 173.773 96.5481C173.828 99.2569 173.828 99.2569 176 102C179.332 96.1943 180.257 90.4017 181.373 83.9004C182.312 78.9376 183.297 75.6813 187 72C189.223 70.6267 190.396 70 193 70Z" fill="black"></path><path d="M131 104C133 106 133 106 133 110C131.879 110.238 131.879 110.238 130.734 110.48C124.557 111.869 124.557 111.869 119.438 115.375C116.556 120.637 115.38 125.023 115 131C115.788 133.424 115.788 133.424 117 135C118.817 130.541 120.14 126.513 120.875 121.75C121.53 118.23 121.864 117.154 124.313 114.375C127.222 112.887 128.8 112.882 132 113C132.087 117.292 132.14 121.583 132.188 125.875C132.213 127.098 132.238 128.322 132.264 129.582C132.273 130.749 132.283 131.915 132.293 133.117C132.309 134.196 132.324 135.275 132.341 136.386C132.228 137.249 132.116 138.111 132 139C129 141 129 141 126.938 140.625C126.298 140.419 125.659 140.212 125 140C124.34 140 123.68 140 123 140C121.815 141.697 121.815 141.697 120.688 143.812C118.572 147.312 116.957 149.516 113 151C110.375 151.125 110.375 151.125 108 150C103.411 143.037 104.181 134.504 105.621 126.586C108.039 117.408 112.539 110.642 120.563 105.437C124.366 103.847 126.918 103.52 131 104Z" fill="black"></path><path d="M195 160C196.375 162.563 196.375 162.563 197 165C194.083 166.945 192.879 167.304 189.563 167.813C186.226 168.511 185.149 168.863 182.563 171.25C179.235 177.107 178.428 182.349 179 189C179.33 189.66 179.66 190.32 180 191C182.475 186.95 183.274 183.601 183.875 178.875C184.704 173.352 184.704 173.352 187.313 170.25C190.187 168.913 191.886 168.896 195 169C194.988 170.039 194.977 171.078 194.965 172.148C194.906 179.83 194.973 187.369 196 195C189.375 196.25 189.375 196.25 186 194C185.959 194.681 185.918 195.361 185.875 196.063C184.623 200.265 182.327 203.162 179 206C175.625 206.938 175.625 206.938 173 207C167.979 201.008 167.623 194.837 168.219 187.195C169.656 177.44 173.218 169.601 181.02 163.41C185.791 160.013 189.186 157.886 195 160Z" fill="black"></path><path d="M211 150C210.67 163.2 210.34 176.4 210 190C204 191 204 191 202.168 189.88C200.677 187.48 200.497 185.739 200.305 182.922C200.229 181.925 200.153 180.929 200.074 179.902C200.008 178.862 199.943 177.822 199.875 176.75C199.728 174.703 199.58 172.656 199.43 170.609C199.33 169.157 199.33 169.157 199.228 167.675C199.034 165.395 198.736 163.19 198.348 160.938C198 158 198 158 199.563 155.25C203.057 152.024 206.175 150 211 150Z" fill="black"></path><path d="M210 136C210.75 139.25 210.75 139.25 211 143C208.429 146.805 205.331 147.819 201 149C200.34 148.34 199.68 147.68 199 147C199 143.625 199 143.625 200 140C203.611 136.87 205.176 136 210 136Z" fill="black"></path></svg></div> ${path === "/" ? `${slots.default ? slots.default({}) : ``}` : `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`}
export const prerender = true;`;
});
export {
  Layout as default
};
