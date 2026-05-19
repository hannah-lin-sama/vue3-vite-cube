/* See licenses of bundled dependencies at https://example.com/license.md */
import { Ft as toDisplayString, L as openBlock, S as defineComponent, Y as withCtx, at as ref, b as createVNode, f as createBaseVNode, ft as unref, h as createElementBlock } from "./runtime-core.esm-bundler-iJ6VnBzh.js";
import { d as _plugin_vue_export_helper_default } from "./index-CKovKC9h.js";
import { a as _sfc_main$f, i as _sfc_main$1, n as Position, o as useVueFlow } from "./style-B0Degpsi.js";
//#region src/pages/cloud/graph/components/BashGraph.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flow-container" };
var _hoisted_2 = { class: "custom-node" };
var _hoisted_3 = { class: "node-content" };
var _hoisted_4 = { class: "custom-node input-node" };
var _hoisted_5 = { class: "node-content" };
var _hoisted_6 = { class: "custom-node output-node" };
var _hoisted_7 = { class: "node-content" };
var _hoisted_8 = { class: "custom-node decision-node" };
var _hoisted_9 = { class: "node-content" };
//#endregion
//#region src/pages/cloud/graph/components/BashGraph.vue
var BashGraph_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "BashGraph",
	setup(__props) {
		const nodes = ref([
			{
				id: "1",
				type: "input",
				position: {
					x: 300,
					y: 50
				},
				data: { label: "开始" }
			},
			{
				id: "2",
				type: "default",
				position: {
					x: 300,
					y: 150
				},
				data: { label: "处理步骤 1" }
			},
			{
				id: "3",
				type: "default",
				position: {
					x: 300,
					y: 250
				},
				data: { label: "处理步骤 2" }
			},
			{
				id: "4",
				type: "decision",
				position: {
					x: 300,
					y: 350
				},
				data: { label: "判断条件" }
			},
			{
				id: "5",
				type: "default",
				position: {
					x: 150,
					y: 450
				},
				data: { label: "分支 A" }
			},
			{
				id: "6",
				type: "default",
				position: {
					x: 450,
					y: 450
				},
				data: { label: "分支 B" }
			},
			{
				id: "7",
				type: "output",
				position: {
					x: 300,
					y: 550
				},
				data: { label: "结束" }
			}
		]);
		const edges = ref([
			{
				id: "e1-2",
				source: "1",
				target: "2",
				sourceHandle: "bottom",
				targetHandle: "top"
			},
			{
				id: "e2-3",
				source: "2",
				target: "3",
				sourceHandle: "bottom",
				targetHandle: "top"
			},
			{
				id: "e3-4",
				source: "3",
				target: "4",
				sourceHandle: "bottom",
				targetHandle: "top"
			},
			{
				id: "e4-5",
				source: "4",
				target: "5",
				sourceHandle: "left",
				targetHandle: "top",
				label: "是"
			},
			{
				id: "e4-6",
				source: "4",
				target: "6",
				sourceHandle: "right",
				targetHandle: "top",
				label: "否"
			},
			{
				id: "e5-7",
				source: "5",
				target: "7",
				sourceHandle: "bottom",
				targetHandle: "top"
			},
			{
				id: "e6-7",
				source: "6",
				target: "7",
				sourceHandle: "bottom",
				targetHandle: "top"
			}
		]);
		const { addNodes, addEdges, removeNodes, removeEdges, updateNodePosition, onNodesChange, onEdgesChange } = useVueFlow();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(_sfc_main$1), {
				nodes: nodes.value,
				"onUpdate:nodes": _cache[0] || (_cache[0] = ($event) => nodes.value = $event),
				edges: edges.value,
				"onUpdate:edges": _cache[1] || (_cache[1] = ($event) => edges.value = $event),
				"nodes-draggable": true,
				"nodes-connectable": true,
				"edges-updatable": true
			}, {
				"node-default": withCtx((props) => [createBaseVNode("div", _hoisted_2, [
					createVNode(unref(_sfc_main$f), {
						type: "target",
						position: unref(Position).Top,
						class: "handle-top"
					}, null, 8, ["position"]),
					createBaseVNode("div", _hoisted_3, toDisplayString(props.data.label), 1),
					createVNode(unref(_sfc_main$f), {
						type: "source",
						position: unref(Position).Bottom,
						class: "handle-bottom"
					}, null, 8, ["position"])
				])]),
				"node-input": withCtx((props) => [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, toDisplayString(props.data.label), 1), createVNode(unref(_sfc_main$f), {
					type: "source",
					position: unref(Position).Bottom,
					class: "handle-bottom"
				}, null, 8, ["position"])])]),
				"node-output": withCtx((props) => [createBaseVNode("div", _hoisted_6, [createVNode(unref(_sfc_main$f), {
					type: "target",
					position: unref(Position).Top,
					class: "handle-top"
				}, null, 8, ["position"]), createBaseVNode("div", _hoisted_7, toDisplayString(props.data.label), 1)])]),
				"node-decision": withCtx((props) => [createBaseVNode("div", _hoisted_8, [
					createVNode(unref(_sfc_main$f), {
						type: "target",
						position: unref(Position).Top,
						class: "handle-top"
					}, null, 8, ["position"]),
					createBaseVNode("div", _hoisted_9, toDisplayString(props.data.label), 1),
					createVNode(unref(_sfc_main$f), {
						type: "source",
						position: unref(Position).Left,
						class: "handle-left"
					}, null, 8, ["position"]),
					createVNode(unref(_sfc_main$f), {
						type: "source",
						position: unref(Position).Right,
						class: "handle-right"
					}, null, 8, ["position"]),
					createVNode(unref(_sfc_main$f), {
						type: "source",
						position: unref(Position).Bottom,
						class: "handle-bottom"
					}, null, 8, ["position"])
				])]),
				_: 1
			}, 8, ["nodes", "edges"])]);
		};
	}
}), [["__scopeId", "data-v-3cb13eb3"]]);
//#endregion
export { BashGraph_default as default };

//# sourceMappingURL=BashGraph-Da6E_0iD.js.map