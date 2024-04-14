import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BkBL5mek.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_DwSxHWEb.mjs');
const _page1 = () => import('./chunks/index_B4Z0WudP.mjs');
const _page2 = () => import('./chunks/index_Cc_a6evv.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/es/index.astro", _page1],
    ["src/pages/index.astro", _page2]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "0773edf7-6cf5-41db-9e04-b30961e8ad72"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
