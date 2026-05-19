/* See licenses of bundled dependencies at https://example.com/license.md */
import { Ft as toDisplayString, L as openBlock, S as defineComponent, at as ref, f as createBaseVNode, h as createElementBlock, v as createStaticVNode } from "./runtime-core.esm-bundler-iJ6VnBzh.js";
//#region src/pages/cloud/bugs/components/ComPropsA.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: "ComPropsA--0" };
//#endregion
//#region src/pages/cloud/bugs/components/ComPropsA.vue
var ComPropsA_default = /* @__PURE__ */ defineComponent({
	__name: "ComPropsA",
	setup(__props) {
		const message = ref("Hello");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [_cache[0] || (_cache[0] = createStaticVNode(" 这里是文本节点 <p>段落1</p><p>段落2</p><p>段落3</p><p>段落4</p><p>段落5</p><p>段落6</p><p>段落7</p><p>段落8</p><p>段落9</p><p>段落10</p><p>段落11</p>", 12)), createBaseVNode("p", null, toDisplayString(message.value), 1)]);
		};
	}
});
//#endregion
export { ComPropsA_default as default };

//# sourceMappingURL=ComPropsA-6HkQVmQK.js.map