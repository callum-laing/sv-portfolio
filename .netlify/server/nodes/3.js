

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.175332e1.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.4909de16.js"];
export const stylesheets = ["_app/immutable/assets/3.80412703.css"];
export const fonts = [];
