

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.332ab5c6.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.4909de16.js"];
export const stylesheets = ["_app/immutable/assets/4.f9c13504.css"];
export const fonts = [];
