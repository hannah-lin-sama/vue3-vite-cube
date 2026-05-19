/* See licenses of bundled dependencies at https://example.com/license.md */
import { F as onUnmounted, I as onUpdated, L as openBlock, N as onDeactivated, P as onMounted, Rt as toDisplayString, U as resolveDynamicComponent, a as KeepAlive, b as defineComponent, d as createBaseVNode, f as createBlock, ht as unref, k as onActivated, lt as shallowReadonly, m as createElementBlock, st as ref } from "./runtime-core.esm-bundler-DSU8tT8U.js";
//#region src/pages/cloud/bugs/components/KeepA.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { key: "KeepA--0" };
//#endregion
//#region src/pages/cloud/bugs/components/KeepA.vue
var KeepA_default = /* @__PURE__ */ defineComponent({
	__name: "KeepA",
	setup(__props) {
		const message = ref("Hello KeepA");
		const changeMessage = () => {
			message.value = "Hello KeepA " + Date.now().toString();
		};
		onActivated(() => {
			console.log("KeepA activated");
		});
		onDeactivated(() => {
			console.log("KeepA deactivated");
		});
		onMounted(() => {
			console.log("KeepA mounted");
		});
		onUpdated(() => {
			console.log("KeepA updated");
		});
		onUnmounted(() => {
			console.log("KeepA unmounted");
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$2, [
				_cache[0] || (_cache[0] = createBaseVNode("h2", null, "这里是KeepA", -1)),
				createBaseVNode("p", null, toDisplayString(message.value), 1),
				createBaseVNode("button", { onClick: changeMessage }, "改变消息")
			]);
		};
	}
});
//#endregion
//#region src/pages/cloud/bugs/components/KeepB.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: "KeepB--0" };
//#endregion
//#region src/pages/cloud/bugs/components/KeepB.vue
var KeepB_default = /* @__PURE__ */ defineComponent({
	__name: "KeepB",
	setup(__props) {
		const message = ref("Hello Keep");
		const changeMessage = () => {
			message.value = "Hello KeepB " + Date.now().toString();
		};
		onActivated(() => {
			console.log("KeepB activated");
		});
		onDeactivated(() => {
			console.log("KeepB deactivated");
		});
		onMounted(() => {
			console.log("KeepB mounted");
		});
		onUpdated(() => {
			console.log("KeepB updated");
		});
		onUnmounted(() => {
			console.log("KeepB unmounted");
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [
				_cache[0] || (_cache[0] = createBaseVNode("h2", null, "这里是KeepB", -1)),
				createBaseVNode("p", null, toDisplayString(message.value), 1),
				createBaseVNode("button", { onClick: changeMessage }, "改变消息")
			]);
		};
	}
});
//#endregion
//#region src/pages/cloud/bugs/components/KeepC.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: "KeepC--0" };
//#endregion
//#region src/pages/cloud/bugs/components/KeepC.vue
var KeepC_default = /* @__PURE__ */ defineComponent({
	__name: "KeepC",
	setup(__props) {
		const message = ref("Hello KeepC");
		const changeMessage = () => {
			message.value = "Hello KeepC " + Date.now().toString();
		};
		onActivated(() => {
			console.log("KeepB activated");
		});
		onDeactivated(() => {
			console.log("KeepB deactivated");
		});
		onMounted(() => {
			console.log("KeepB mounted");
		});
		onUpdated(() => {
			console.log("KeepB updated");
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				_cache[0] || (_cache[0] = createBaseVNode("h2", null, "这里是KeepC", -1)),
				createBaseVNode("p", null, toDisplayString(message.value), 1),
				createBaseVNode("button", { onClick: changeMessage }, "改变消息")
			]);
		};
	}
});
//#endregion
//#region src/pages/cloud/bugs/indexKeep.vue
var indexKeep_default = /* @__PURE__ */ defineComponent({
	name: "CloudBugsViewKeep",
	__name: "indexKeep",
	setup(__props) {
		const components = shallowReadonly([
			null,
			KeepA_default,
			KeepB_default,
			KeepC_default
		]);
		const tabId = ref(1);
		const handleClick = () => {
			console.log(tabId.value);
			if (tabId.value > 0 && tabId.value < 3) tabId.value++;
			else tabId.value = 1;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				_cache[0] || (_cache[0] = createBaseVNode("h2", null, "这里是问题管理", -1)),
				(openBlock(), createBlock(KeepAlive, {
					key: "keep-alive",
					max: "4",
					exclude: ["KeepC"],
					include: ["KeepA", "KeepB"]
				}, [(openBlock(), createBlock(resolveDynamicComponent(unref(components)[tabId.value])))], 1024)),
				createBaseVNode("button", { onClick: handleClick }, "切换组件")
			]);
		};
	}
});
//#endregion
export { indexKeep_default as default };

//# sourceMappingURL=indexKeep-C03z5qUf.js.map