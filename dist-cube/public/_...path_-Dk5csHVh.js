/* See licenses of bundled dependencies at https://example.com/license.md */
import { A as openBlock, h as createStaticVNode, p as createElementBlock, u as createBaseVNode, v as defineComponent } from "./runtime-core.esm-bundler-DmVfr4RT.js";
import { l as useRouter, u as _plugin_vue_export_helper_default } from "./index-DxlhaoiK.js";
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
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", { class: "not-found-content" }, [_cache[0] || (_cache[0] = createStaticVNode("<div class=\"error-code\" data-v-fc62c91a><span class=\"digit\" data-v-fc62c91a>4</span><span class=\"digit\" data-v-fc62c91a>0</span><span class=\"digit\" data-v-fc62c91a>4</span></div><h1 class=\"error-title\" data-v-fc62c91a>页面不存在</h1><p class=\"error-description\" data-v-fc62c91a> 抱歉，您访问的页面可能已被删除、移动或输入了错误的地址。 </p>", 3)), createBaseVNode("div", {
				class: "back-home-btn",
				onClick: handleBackHomeClick
			}, "返回首页")])]);
		};
	}
}), [["__scopeId", "data-v-fc62c91a"]]);
//#endregion
export { ____path__default as default };

//# sourceMappingURL=_...path_-Dk5csHVh.js.map