

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.db1c6f00.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.4909de16.js"];
export const stylesheets = ["_app/immutable/assets/2.3f9f2a2f.css"];
export const fonts = [];
