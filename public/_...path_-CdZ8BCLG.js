/* See licenses of bundled dependencies at https://example.com/license.md */
import { L as openBlock, _ as createStaticVNode, b as defineComponent, d as createBaseVNode, m as createElementBlock } from "./runtime-core.esm-bundler-DSU8tT8U.js";
import { i as _plugin_vue_export_helper_default, r as useRouter } from "./index-CnE-UBym.js";
//#region src/pages/[...path].vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "not-found-container" };
//#endregion
//#region src/pages/[...path].vue
var ____path__default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "NotFoundView",
	__name: "[...path]",
	setup(__props) {
		const router = useRouter();
		const handleBackHomeClick = () => {
			console.log("返回首页", location);
			const mainPath = location.pathname.split("/")[1];
			router.push({ path: mainPath ? `/${mainPath}` : "/home" });
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", { class: "not-found-content" }, [_cache[0] || (_cache[0] = createStaticVNode("<div class=\"error-code\" data-v-5b349f6a><span class=\"digit\" data-v-5b349f6a>4</span><span class=\"digit\" data-v-5b349f6a>0</span><span class=\"digit\" data-v-5b349f6a>4</span></div><h1 class=\"error-title\" data-v-5b349f6a>页面不存在</h1><p class=\"error-description\" data-v-5b349f6a>抱歉，您访问的页面可能已被删除、移动或输入了错误的地址。</p>", 3)), createBaseVNode("div", {
				class: "back-home-btn",
				onClick: handleBackHomeClick
			}, "返回首页")])]);
		};
	}
}), [["__scopeId", "data-v-5b349f6a"]]);
//#endregion
export { ____path__default as default };

//# sourceMappingURL=_...path_-CdZ8BCLG.js.map