/* See licenses of bundled dependencies at https://example.com/license.md */
import { A as openBlock, P as resolveComponent, _ as createVNode, p as createElementBlock, v as defineComponent } from "./runtime-core.esm-bundler-DmVfr4RT.js";
//#endregion
//#region src/pages/home/dashboard.vue
var dashboard_default = /* @__PURE__ */ defineComponent({
	name: "HomeDashboardView",
	__name: "dashboard",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_router_view = resolveComponent("router-view");
			return openBlock(), createElementBlock("div", null, [createVNode(_component_router_view), createVNode(_component_router_view, { name: "logs" })]);
		};
	}
});
//#endregion
export { dashboard_default as default };

//# sourceMappingURL=dashboard-DdcV4EgK.js.map