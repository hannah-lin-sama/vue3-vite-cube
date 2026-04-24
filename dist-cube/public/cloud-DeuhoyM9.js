/* See licenses of bundled dependencies at https://example.com/license.md */
import { A as openBlock, J as ref, O as onMounted, _ as createVNode, i as Fragment, p as createElementBlock, u as createBaseVNode, v as defineComponent, xt as toDisplayString } from "./runtime-core.esm-bundler-DmVfr4RT.js";
//#endregion
//#region src/pages/cloud/components/tabTwo.vue
var tabTwo_default = /* @__PURE__ */ defineComponent({
	__name: "tabTwo",
	props: {
		age: { default: () => 18 },
		dec: { default: "des" }
	},
	emits: ["change", "send"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		onMounted(() => {
			console.log(props);
			emit("change", { type: "测试" });
			emit("send", { age: 18 });
		});
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createBaseVNode("p", null, "age: " + toDisplayString(__props.age), 1), createBaseVNode("p", null, "dec: " + toDisplayString(__props.dec), 1)]);
		};
	}
});
//#endregion
//#region src/pages/cloud/index.vue
var cloud_default = /* @__PURE__ */ defineComponent({
	name: "CloudIndexView",
	__name: "index",
	setup(__props) {
		const age = ref();
		const dec = ref("descxxxxxxxxxxxx----xxxxxxx.   xxx.    xxxx");
		const changeAge = (data) => {
			console.log(data);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [_cache[0] || (_cache[0] = createBaseVNode("p", null, toDisplayString("这里是云平台首页"), -1)), createVNode(tabTwo_default, {
				age: age.value,
				dec: dec.value,
				onChange: changeAge,
				onSend: changeAge
			}, null, 8, ["age", "dec"])], 64);
		};
	}
});
//#endregion
export { cloud_default as default };

//# sourceMappingURL=cloud-DeuhoyM9.js.map