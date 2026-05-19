/* See licenses of bundled dependencies at https://example.com/license.md */
import { Ft as toDisplayString, L as openBlock, S as defineComponent, V as resolveComponent, Y as withCtx, at as ref, b as createVNode, f as createBaseVNode, h as createElementBlock, y as createTextVNode } from "./runtime-core.esm-bundler-iJ6VnBzh.js";
import { d as _plugin_vue_export_helper_default } from "./index-CKovKC9h.js";
//#region src/pages/home.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "layout" };
var _hoisted_2 = { class: "aside" };
var _hoisted_3 = { class: "nav-menu" };
var _hoisted_4 = { class: "main" };
var _hoisted_5 = { class: "top-nav" };
var _hoisted_6 = { class: "top-nav-right" };
var _hoisted_7 = { class: "language-selector" };
var _hoisted_8 = { class: "language-btn" };
var _hoisted_9 = { class: "content" };
//#endregion
//#region src/pages/home.vue
var home_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "HomeView",
	__name: "home",
	setup(__props) {
		const currentLanguage = ref("zh");
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [_cache[5] || (_cache[5] = createBaseVNode("div", { class: "brand" }, [createBaseVNode("h2", null, "Vue Cube")], -1)), createBaseVNode("nav", _hoisted_3, [createBaseVNode("ul", null, [
				createBaseVNode("li", null, [createVNode(_component_router_link, {
					to: "/home",
					class: "nav-link"
				}, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("span", { class: "nav-icon" }, "🏠", -1), createBaseVNode("span", { class: "nav-text" }, "首页", -1)])]),
					_: 1
				})]),
				createBaseVNode("li", null, [createVNode(_component_router_link, {
					to: "/home/user",
					class: "nav-link"
				}, {
					default: withCtx(() => [..._cache[1] || (_cache[1] = [createBaseVNode("span", { class: "nav-icon" }, "👤", -1), createBaseVNode("span", { class: "nav-text" }, "用户中心", -1)])]),
					_: 1
				})]),
				createBaseVNode("li", null, [createVNode(_component_router_link, {
					to: "/home/role",
					class: "nav-link"
				}, {
					default: withCtx(() => [..._cache[2] || (_cache[2] = [createBaseVNode("span", { class: "nav-icon" }, "⚙️", -1), createBaseVNode("span", { class: "nav-text" }, "角色管理", -1)])]),
					_: 1
				})]),
				createBaseVNode("li", null, [createVNode(_component_router_link, {
					to: "/home/task",
					class: "nav-link"
				}, {
					default: withCtx(() => [..._cache[3] || (_cache[3] = [createBaseVNode("span", { class: "nav-icon" }, "📋", -1), createBaseVNode("span", { class: "nav-text" }, "日志信息", -1)])]),
					_: 1
				})]),
				createBaseVNode("li", null, [createVNode(_component_router_link, {
					to: "/home/dashboard",
					class: "nav-link"
				}, {
					default: withCtx(() => [..._cache[4] || (_cache[4] = [createBaseVNode("span", { class: "nav-icon" }, "📊", -1), createBaseVNode("span", { class: "nav-text" }, "Dashboard", -1)])]),
					_: 1
				})])
			])])]), createBaseVNode("div", _hoisted_4, [createBaseVNode("header", _hoisted_5, [_cache[8] || (_cache[8] = createBaseVNode("div", { class: "top-nav-left" }, [createBaseVNode("h1", null, "管理控制台")], -1)), createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("button", _hoisted_8, [createTextVNode(toDisplayString(currentLanguage.value === "zh" ? "中文" : "English") + " ", 1), _cache[6] || (_cache[6] = createBaseVNode("span", { class: "dropdown-icon" }, "▼", -1))])]), _cache[7] || (_cache[7] = createBaseVNode("div", { class: "user-info" }, [createBaseVNode("span", { class: "user-name" }, "用户名称"), createBaseVNode("div", { class: "user-avatar" }, [createBaseVNode("img", {
				src: "https://picsum.photos/seed/mountain/800/500",
				alt: "头像"
			})])], -1))])]), createBaseVNode("main", _hoisted_9, [createVNode(_component_RouterView), createVNode(_component_RouterView, { name: "logs" })])])]);
		};
	}
}), [["__scopeId", "data-v-4ff7ef99"]]);
//#endregion
export { home_default as default };

//# sourceMappingURL=home-BWHkzV1G.js.map