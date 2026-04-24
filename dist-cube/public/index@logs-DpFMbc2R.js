/* See licenses of bundled dependencies at https://example.com/license.md */
import { A as openBlock, O as onMounted, p as createElementBlock, u as createBaseVNode, v as defineComponent } from "./runtime-core.esm-bundler-DmVfr4RT.js";
import { u as _plugin_vue_export_helper_default } from "./index-DxlhaoiK.js";
//#endregion
//#region src/pages/home/index@logs.vue
var index_logs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "IndexLogsView",
	__name: "index@logs",
	setup(__props) {
		onMounted(() => {
			console.log("IndexLogsView mounted");
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [createBaseVNode("p", { class: "title" }, "日志管理xxxx", -1), createBaseVNode("div", null, "xxcd", -1)])]);
		};
	}
}), [["__scopeId", "data-v-78ccbb18"]]);
//#endregion
export { index_logs_default as default };

//# sourceMappingURL=index@logs-DpFMbc2R.js.map