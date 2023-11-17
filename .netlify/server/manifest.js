export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","calculator.JPG","css-svgrepo-com.svg","etch.JPG","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","fleur.JPG","hike-three.JPG","hike-two.JPG","html-svgrepo-com.svg","js-svgrepo-com.svg","rps.JPG","selfie.jpg","site.webmanifest","svelte-16-svgrepo-com.svg","svg-svgrepo-com.svg","title.svg","todo.JPG"]),
	mimeTypes: {".png":"image/png",".JPG":"image/jpeg",".svg":"image/svg+xml",".jpg":"image/jpeg",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.6b3dce0e.js","app":"_app/immutable/entry/app.c0d2fec9.js","imports":["_app/immutable/entry/start.6b3dce0e.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/singletons.3ea09a34.js","_app/immutable/entry/app.c0d2fec9.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.4909de16.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
