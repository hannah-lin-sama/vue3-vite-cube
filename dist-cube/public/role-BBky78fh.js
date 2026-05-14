/* See licenses of bundled dependencies at https://example.com/license.md */
import { L as openBlock, S as defineComponent, X as withDirectives, at as ref, f as createBaseVNode, h as createElementBlock } from "./runtime-core.esm-bundler-iJ6VnBzh.js";
import { h as vModelText } from "./index-CKovKC9h.js";
//#endregion
//#region src/pages/home/(admin)/role/index.vue
var role_default = /* @__PURE__ */ defineComponent({
	name: "RoleIndexView",
	__name: "index",
	setup(__props) {
		const roleName = ref("");
		const roleID = ref("");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				withDirectives(createBaseVNode("input", {
					type: "text",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => roleName.value = $event),
					placeholder: "请输入角色名称"
				}, null, 512), [[vModelText, roleName.value]]),
				_cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
				withDirectives(createBaseVNode("input", {
					type: "text",
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => roleID.value = $event),
					placeholder: "请输入角色ID"
				}, null, 512), [[vModelText, roleID.value]])
			]);
		};
	}
});
//#endregion
export { role_default as default };

//# sourceMappingURL=role-BBky78fh.js.map