const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["public/ComPropsA-6HkQVmQK.js","public/runtime-core.esm-bundler-iJ6VnBzh.js"])))=>i.map(i=>d[i]);
/* See licenses of bundled dependencies at https://example.com/license.md */
import { L as openBlock, S as defineComponent, V as resolveComponent, Y as withCtx, b as createVNode, f as createBaseVNode, h as createElementBlock, o as Suspense, p as createBlock, x as defineAsyncComponent } from "./runtime-core.esm-bundler-iJ6VnBzh.js";
import { c as __vitePreload, d as _plugin_vue_export_helper_default } from "./index-CKovKC9h.js";
//#region src/components/Fallback.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { key: "Fallback--0" };
//#endregion
//#region src/components/Fallback.vue
var Fallback_default = /* @__PURE__ */ defineComponent({
	name: "Suspense-Fallback",
	__name: "Fallback",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [..._cache[0] || (_cache[0] = [createBaseVNode("p", null, "fallback", -1)])]);
		};
	}
});
//#endregion
//#region src/components/Error.vue
var Error_default = /* @__PURE__ */ defineComponent({
	name: "Suspense-Error",
	__name: "Error",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [createBaseVNode("p", null, "error 页面", -1)])]);
		};
	}
});
//#endregion
//#region src/components/Loading.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { key: "Loading--0" };
var SuspenceD_vue_vue_type_script_lang_default = {
	components: {
		AsyncComponent: defineAsyncComponent({
			loader: () => __vitePreload(() => import("./ComPropsA-6HkQVmQK.js"), __vite__mapDeps([0,1])),
			delay: 0,
			loadingComponent: /* @__PURE__ */ defineComponent({
				name: "Suspense-Loading",
				__name: "Loading",
				setup(__props) {
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", _hoisted_1$2, [..._cache[0] || (_cache[0] = [createBaseVNode("p", null, "loading...", -1)])]);
					};
				}
			}),
			errorComponent: Error_default,
			suspensible: true
		}),
		Fallback: Fallback_default
	},
	methods: {
		handleFallback() {
			console.log("handleFallback");
		},
		handlePending() {
			console.log("handlePending");
		},
		handleResolve() {
			console.log("handleResolve");
		}
	},
	mounted() {
		console.log("mounted");
	},
	onErrorCaptured(error) {
		console.log(error);
	}
};
//#endregion
//#region src/pages/cloud/bugs/components/SuspenceD.vue
var _hoisted_1$1 = { key: "div--0" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_AsyncComponent = resolveComponent("AsyncComponent");
	const _component_Fallback = resolveComponent("Fallback");
	return openBlock(), createElementBlock("div", _hoisted_1$1, [(openBlock(), createBlock(Suspense, {
		timeout: "10",
		key: "SuspenseD--0",
		onFallback: $options.handleFallback,
		onPending: $options.handlePending,
		onResolve: $options.handleResolve
	}, {
		default: withCtx(() => [createVNode(_component_AsyncComponent, { key: "AsyncComponent-A" })]),
		fallback: withCtx(() => [createVNode(_component_Fallback, { key: "Fallback-A" })]),
		_: 1
	}, 8, [
		"onFallback",
		"onPending",
		"onResolve"
	]))]);
}
var SuspenceD_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SuspenceD_vue_vue_type_script_lang_default, [["render", _sfc_render]]);
//#endregion
//#region src/pages/cloud/bugs/index.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: "view--0" };
//#endregion
//#region src/pages/cloud/bugs/index.vue
var bugs_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(SuspenceD_default)]);
		};
	}
});
//#endregion
export { bugs_default as default };

//# sourceMappingURL=bugs-C-VXild2.js.map