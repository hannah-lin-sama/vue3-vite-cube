const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["public/BashGraph-Da6E_0iD.js","public/index-CKovKC9h.js","public/runtime-core.esm-bundler-iJ6VnBzh.js","public/index-6XWZW3R_.css","public/style-B0Degpsi.js","public/style-H50OK_E_.css","public/BashGraph-BiAvUpW_.css","public/AccountApply-BofhgvYX.js","public/AccountApply-BPgtkiD8.css"])))=>i.map(i=>d[i]);
/* See licenses of bundled dependencies at https://example.com/license.md */
import { Ft as toDisplayString, H as resolveDynamicComponent, J as watchEffect, L as openBlock, S as defineComponent, at as ref, ct as shallowRef, f as createBaseVNode, h as createElementBlock, i as Fragment, p as createBlock, z as renderList } from "./runtime-core.esm-bundler-iJ6VnBzh.js";
import { c as __vitePreload, d as _plugin_vue_export_helper_default } from "./index-CKovKC9h.js";
//#region src/pages/cloud/graph/index.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-tab"];
//#endregion
//#region src/pages/cloud/graph/index.vue
var graph_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "GraphIndexView",
	__name: "index",
	setup(__props) {
		const tabId = ref("apply-account");
		const currentTab = shallowRef();
		const tabs = [{
			id: "bashGraph",
			label: "Bash 图",
			component: () => __vitePreload(() => import("./BashGraph-Da6E_0iD.js"), __vite__mapDeps([0,1,2,3,4,5,6]))
		}, {
			id: "apply-account",
			label: "申请账号图",
			component: () => __vitePreload(() => import("./AccountApply-BofhgvYX.js"), __vite__mapDeps([7,1,2,3,4,5,8]))
		}];
		const handleSelect = async (event) => {
			tabId.value = event.target.dataset.tab || "";
		};
		watchEffect(async () => {
			console.log(tabId.value);
			if (tabId.value) {
				const tab = tabs.find((item) => item.id === tabId.value);
				if (tab) currentTab.value = (await tab.component()).default;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				_cache[0] || (_cache[0] = createBaseVNode("h2", null, "这里是图管理", -1)),
				createBaseVNode("div", { onClick: handleSelect }, [(openBlock(), createElementBlock(Fragment, null, renderList(tabs, (tab) => {
					return createBaseVNode("span", {
						"data-tab": tab.id,
						key: tab.id,
						class: "tab-item"
					}, toDisplayString(tab.label), 9, _hoisted_1);
				}), 64))]),
				createBaseVNode("div", null, [(openBlock(), createBlock(resolveDynamicComponent(currentTab.value)))])
			]);
		};
	}
}), [["__scopeId", "data-v-6408e7a8"]]);
//#endregion
export { graph_default as default };

//# sourceMappingURL=graph-BdvUUJvN.js.map