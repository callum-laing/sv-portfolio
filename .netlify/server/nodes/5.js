

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.de4f2628.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.4909de16.js"];
export const stylesheets = ["_app/immutable/assets/5.71cacebd.css"];
export const fonts = [];
