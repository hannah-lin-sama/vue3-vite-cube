/* See licenses of bundled dependencies at https://example.com/license.md */
import { H as resolveDirective, L as openBlock, M as onBeforeUpdate, Rt as toDisplayString, Z as withDirectives, b as defineComponent, d as createBaseVNode, ht as unref, m as createElementBlock, st as ref, u as computed } from "./runtime-core.esm-bundler-DSU8tT8U.js";
import { a as defineStore, g as vModelText } from "./index-CnE-UBym.js";
//#region src/stores/counter.ts
var useCounterStore = defineStore("counter", () => {
	const count = ref(0);
	const doubleCount = computed(() => count.value * 2);
	function increment() {
		count.value++;
	}
	function decrement() {
		count.value--;
	}
	return {
		count,
		doubleCount,
		increment,
		decrement
	};
});
//#endregion
//#region src/directives/vFocus.ts
var vFocus = {
	created(el, binding, vnode, args) {
		console.log("v-focus created el", el);
		console.log("v-focus created binding", binding);
		console.log("v-focus created vnode", vnode);
		console.log("v-focus created args", args);
	},
	beforeMount(el, binding, vnode, args) {
		console.log("v-focus beforeMount", el);
	},
	mounted(el) {
		el.focus();
	}
};
//#endregion
//#region src/pages/cloud/bugs/index.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: "view--0" };
//#endregion
//#region src/pages/cloud/bugs/index.vue
var bugs_default = /* @__PURE__ */ defineComponent({
	name: "ComPropsA",
	directives: { focus: vFocus },
	__name: "index",
	setup(__props) {
		const message = ref("Hello");
		const counterStore = useCounterStore();
		console.log(counterStore);
		onBeforeUpdate(() => {
			console.log("ComPropsA beforeUpdate", counterStore.count);
		});
		return (_ctx, _cache) => {
			const _directive_focus = resolveDirective("focus");
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("p", null, toDisplayString(unref(counterStore).count), 1),
				createBaseVNode("button", { onClick: _cache[0] || (_cache[0] = (...args) => unref(counterStore).increment && unref(counterStore).increment(...args)) }, "增加"),
				createBaseVNode("button", { onClick: _cache[1] || (_cache[1] = (...args) => unref(counterStore).decrement && unref(counterStore).decrement(...args)) }, "减少"),
				_cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
				withDirectives(createBaseVNode("input", {
					type: "text",
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => message.value = $event)
				}, null, 512), [[_directive_focus], [vModelText, message.value]])
			]);
		};
	}
});
//#endregion
export { bugs_default as default };

//# sourceMappingURL=bugs-COqzh79l.js.map