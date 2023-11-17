

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a2bb94be.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.4909de16.js","_app/immutable/chunks/stores.73073de4.js","_app/immutable/chunks/singletons.3ea09a34.js"];
export const stylesheets = [];
export const fonts = [];
