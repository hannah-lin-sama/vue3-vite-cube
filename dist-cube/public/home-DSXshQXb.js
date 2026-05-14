/* See licenses of bundled dependencies at https://example.com/license.md */
import { L as openBlock, S as defineComponent, f as createBaseVNode, h as createElementBlock, y as createTextVNode } from "./runtime-core.esm-bundler-iJ6VnBzh.js";
import { d as _plugin_vue_export_helper_default } from "./index-CKovKC9h.js";
//#endregion
//#region src/pages/home/index.vue
var home_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "HomeIndexView",
	__name: "index",
	setup(__props) {
		const handleClick = () => {
			console.log("click");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				_cache[0] || (_cache[0] = createBaseVNode("p", null, "Home Index", -1)),
				createBaseVNode("p", { onClick: handleClick }, "Home Index"),
				_cache[1] || (_cache[1] = createBaseVNode("p", null, "Home Index", -1)),
				_cache[2] || (_cache[2] = createTextVNode(" 平层层 ", -1))
			]);
		};
	}
}), [["__scopeId", "data-v-379d8551"]]);
//#endregion
export { home_default as default };

//# sourceMappingURL=home-DSXshQXb.js.map