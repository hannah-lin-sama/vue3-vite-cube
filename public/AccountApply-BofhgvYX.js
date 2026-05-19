/* See licenses of bundled dependencies at https://example.com/license.md */
import { B as renderSlot, Ft as toDisplayString, H as resolveDynamicComponent, L as openBlock, Pt as normalizeStyle, S as defineComponent, X as withDirectives, Y as withCtx, at as ref, b as createVNode, d as computed, f as createBaseVNode, ft as unref, h as createElementBlock, i as Fragment, lt as toRef, m as createCommentVNode, p as createBlock, w as h, z as renderList } from "./runtime-core.esm-bundler-iJ6VnBzh.js";
import { d as _plugin_vue_export_helper_default, h as vModelText, m as vModelSelect } from "./index-CKovKC9h.js";
import { a as _sfc_main$f, i as _sfc_main$1$4, n as Position, o as useVueFlow, r as _sfc_main$3, t as PanelPosition } from "./style-B0Degpsi.js";
//#region node_modules/@vue-flow/background/dist/vue-flow-background.mjs
var BackgroundVariant = /* @__PURE__ */ ((BackgroundVariant2) => {
	BackgroundVariant2["Lines"] = "lines";
	BackgroundVariant2["Dots"] = "dots";
	return BackgroundVariant2;
})(BackgroundVariant || {});
var LinePattern = function({ dimensions, size, color }) {
	return h("path", {
		"stroke": color,
		"stroke-width": size,
		"d": `M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}`
	});
};
var DotPattern = function({ radius, color }) {
	return h("circle", {
		cx: radius,
		cy: radius,
		r: radius,
		fill: color
	});
};
BackgroundVariant.Lines, BackgroundVariant.Dots;
var DefaultBgColors = {
	[BackgroundVariant.Dots]: "#81818a",
	[BackgroundVariant.Lines]: "#eee"
};
var _hoisted_1$7 = [
	"id",
	"x",
	"y",
	"width",
	"height",
	"patternTransform"
];
var _hoisted_2$1 = {
	key: 2,
	height: "100",
	width: "100"
};
var _hoisted_3$6 = ["fill"];
var _hoisted_4$1 = [
	"x",
	"y",
	"fill"
];
var _sfc_main$2 = /* @__PURE__ */ defineComponent({
	name: "Background",
	compatConfig: { MODE: 3 },
	props: {
		id: {},
		variant: { default: () => BackgroundVariant.Dots },
		gap: { default: 20 },
		size: { default: 1 },
		lineWidth: { default: 1 },
		patternColor: {},
		color: {},
		bgColor: {},
		height: { default: 100 },
		width: { default: 100 },
		x: { default: 0 },
		y: { default: 0 },
		offset: { default: 0 }
	},
	setup(__props) {
		const { id: vueFlowId, viewport } = useVueFlow();
		const background = computed(() => {
			const zoom = viewport.value.zoom;
			const [gapX, gapY] = Array.isArray(__props.gap) ? __props.gap : [__props.gap, __props.gap];
			const scaledGap = [gapX * zoom || 1, gapY * zoom || 1];
			const scaledSize = __props.size * zoom;
			const [offsetX, offsetY] = Array.isArray(__props.offset) ? __props.offset : [__props.offset, __props.offset];
			return {
				scaledGap,
				offset: [offsetX * zoom || 1 + scaledGap[0] / 2, offsetY * zoom || 1 + scaledGap[1] / 2],
				size: scaledSize
			};
		});
		const patternId = toRef(() => `pattern-${vueFlowId}${__props.id ? `-${__props.id}` : ""}`);
		const patternColor = toRef(() => __props.color || __props.patternColor || DefaultBgColors[__props.variant || BackgroundVariant.Dots]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("svg", {
				class: "vue-flow__background vue-flow__container",
				style: normalizeStyle({
					height: `${_ctx.height > 100 ? 100 : _ctx.height}%`,
					width: `${_ctx.width > 100 ? 100 : _ctx.width}%`
				})
			}, [
				renderSlot(_ctx.$slots, "pattern-container", { id: patternId.value }, () => [createBaseVNode("pattern", {
					id: patternId.value,
					x: unref(viewport).x % background.value.scaledGap[0],
					y: unref(viewport).y % background.value.scaledGap[1],
					width: background.value.scaledGap[0],
					height: background.value.scaledGap[1],
					patternTransform: `translate(-${background.value.offset[0]},-${background.value.offset[1]})`,
					patternUnits: "userSpaceOnUse"
				}, [renderSlot(_ctx.$slots, "pattern", {}, () => [_ctx.variant === unref(BackgroundVariant).Lines ? (openBlock(), createBlock(unref(LinePattern), {
					key: 0,
					size: _ctx.lineWidth,
					color: patternColor.value,
					dimensions: background.value.scaledGap
				}, null, 8, [
					"size",
					"color",
					"dimensions"
				])) : _ctx.variant === unref(BackgroundVariant).Dots ? (openBlock(), createBlock(unref(DotPattern), {
					key: 1,
					color: patternColor.value,
					radius: background.value.size / 2
				}, null, 8, ["color", "radius"])) : createCommentVNode("", true), _ctx.bgColor ? (openBlock(), createElementBlock("svg", _hoisted_2$1, [createBaseVNode("rect", {
					width: "100%",
					height: "100%",
					fill: _ctx.bgColor
				}, null, 8, _hoisted_3$6)])) : createCommentVNode("", true)])], 8, _hoisted_1$7)]),
				createBaseVNode("rect", {
					x: _ctx.x,
					y: _ctx.y,
					width: "100%",
					height: "100%",
					fill: `url(#${patternId.value})`
				}, null, 8, _hoisted_4$1),
				renderSlot(_ctx.$slots, "default", { id: patternId.value })
			], 4);
		};
	}
});
//#endregion
//#region node_modules/@vue-flow/controls/dist/vue-flow-controls.mjs
var _sfc_main$1 = {
	name: "ControlButton",
	compatConfig: { MODE: 3 }
};
var _export_sfc = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1$5 = {
	type: "button",
	class: "vue-flow__controls-button"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("button", _hoisted_1$5, [renderSlot(_ctx.$slots, "default")]);
}
var ControlButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
var _hoisted_1$4 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 32 32"
};
var _hoisted_3$4 = [/* @__PURE__ */ createBaseVNode("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }, null, -1)];
function render$4(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
var PlusIcon = { render: render$4 };
var _hoisted_1$3 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 32 5"
};
var _hoisted_3$3 = [/* @__PURE__ */ createBaseVNode("path", { d: "M0 0h32v4.2H0z" }, null, -1)];
function render$3(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var MinusIcon = { render: render$3 };
var _hoisted_1$2 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 32 30"
};
var _hoisted_3$2 = [/* @__PURE__ */ createBaseVNode("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }, null, -1)];
function render$2(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var FitView = { render: render$2 };
var _hoisted_1$1 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 25 32"
};
var _hoisted_3$1 = [/* @__PURE__ */ createBaseVNode("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }, null, -1)];
function render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var Lock = { render: render$1 };
var _hoisted_1$6 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 25 32"
};
var _hoisted_3$5 = [/* @__PURE__ */ createBaseVNode("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z" }, null, -1)];
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$5);
}
var Unlock = { render };
var _sfc_main = /* @__PURE__ */ defineComponent({
	name: "Controls",
	compatConfig: { MODE: 3 },
	props: {
		showZoom: {
			type: Boolean,
			default: true
		},
		showFitView: {
			type: Boolean,
			default: true
		},
		showInteractive: {
			type: Boolean,
			default: true
		},
		fitViewParams: {},
		position: { default: () => PanelPosition.BottomLeft }
	},
	emits: [
		"zoomIn",
		"zoomOut",
		"fitView",
		"interactionChange"
	],
	setup(__props, { emit }) {
		const { nodesDraggable, nodesConnectable, elementsSelectable, setInteractive, zoomIn, zoomOut, fitView, viewport, minZoom, maxZoom } = useVueFlow();
		const isInteractive = toRef(() => nodesDraggable.value || nodesConnectable.value || elementsSelectable.value);
		const minZoomReached = toRef(() => viewport.value.zoom <= minZoom.value);
		const maxZoomReached = toRef(() => viewport.value.zoom >= maxZoom.value);
		function onZoomInHandler() {
			zoomIn();
			emit("zoomIn");
		}
		function onZoomOutHandler() {
			zoomOut();
			emit("zoomOut");
		}
		function onFitViewHandler() {
			fitView(__props.fitViewParams);
			emit("fitView");
		}
		function onInteractiveChangeHandler() {
			setInteractive(!isInteractive.value);
			emit("interactionChange", !isInteractive.value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(_sfc_main$3), {
				class: "vue-flow__controls",
				position: _ctx.position
			}, {
				default: withCtx(() => [
					renderSlot(_ctx.$slots, "top"),
					_ctx.showZoom ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [renderSlot(_ctx.$slots, "control-zoom-in", {}, () => [createVNode(ControlButton, {
						class: "vue-flow__controls-zoomin",
						disabled: maxZoomReached.value,
						onClick: onZoomInHandler
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "icon-zoom-in", {}, () => [(openBlock(), createBlock(resolveDynamicComponent(unref(PlusIcon))))])]),
						_: 3
					}, 8, ["disabled"])]), renderSlot(_ctx.$slots, "control-zoom-out", {}, () => [createVNode(ControlButton, {
						class: "vue-flow__controls-zoomout",
						disabled: minZoomReached.value,
						onClick: onZoomOutHandler
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "icon-zoom-out", {}, () => [(openBlock(), createBlock(resolveDynamicComponent(unref(MinusIcon))))])]),
						_: 3
					}, 8, ["disabled"])])], 64)) : createCommentVNode("", true),
					_ctx.showFitView ? renderSlot(_ctx.$slots, "control-fit-view", { key: 1 }, () => [createVNode(ControlButton, {
						class: "vue-flow__controls-fitview",
						onClick: onFitViewHandler
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "icon-fit-view", {}, () => [(openBlock(), createBlock(resolveDynamicComponent(unref(FitView))))])]),
						_: 3
					})]) : createCommentVNode("", true),
					_ctx.showInteractive ? renderSlot(_ctx.$slots, "control-interactive", { key: 2 }, () => [_ctx.showInteractive ? (openBlock(), createBlock(ControlButton, {
						key: 0,
						class: "vue-flow__controls-interactive",
						onClick: onInteractiveChangeHandler
					}, {
						default: withCtx(() => [isInteractive.value ? renderSlot(_ctx.$slots, "icon-unlock", { key: 0 }, () => [(openBlock(), createBlock(resolveDynamicComponent(unref(Unlock))))]) : createCommentVNode("", true), !isInteractive.value ? renderSlot(_ctx.$slots, "icon-lock", { key: 1 }, () => [(openBlock(), createBlock(resolveDynamicComponent(unref(Lock))))]) : createCommentVNode("", true)]),
						_: 3
					})) : createCommentVNode("", true)]) : createCommentVNode("", true),
					renderSlot(_ctx.$slots, "default")
				]),
				_: 3
			}, 8, ["position"]);
		};
	}
});
//#endregion
//#region src/pages/cloud/graph/components/AccountApply.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flow-container" };
var _hoisted_2 = { class: "config-panel" };
var _hoisted_3 = { class: "node-list" };
var _hoisted_4 = ["onUpdate:modelValue", "onChange"];
var _hoisted_5 = ["onClick"];
var _hoisted_6 = ["value"];
var _hoisted_7 = ["value"];
var _hoisted_8 = { class: "vue-flow-wrapper" };
var _hoisted_9 = { class: "custom-node" };
var _hoisted_10 = { class: "custom-node output-node" };
var _hoisted_11 = { class: "node-content" };
//#endregion
//#region src/pages/cloud/graph/components/AccountApply.vue
var AccountApply_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AccountApply",
	setup(__props) {
		const initialNodes = [
			{
				id: "1",
				label: "填写申请信息",
				position: {
					x: 100,
					y: 100
				},
				data: { label: "填写申请信息" }
			},
			{
				id: "2",
				label: "主管审批",
				position: {
					x: 100,
					y: 250
				},
				data: { label: "主管审批" }
			},
			{
				id: "3",
				label: "系统创建账号",
				position: {
					x: 100,
					y: 400
				},
				data: { label: "系统创建账号" }
			},
			{
				id: "4",
				label: "权限配置",
				position: {
					x: 100,
					y: 550
				},
				data: { label: "权限配置" }
			},
			{
				id: "5",
				label: "流程结束",
				position: {
					x: 100,
					y: 700
				},
				data: { label: "流程结束" }
			}
		];
		const initialEdges = [
			{
				id: "e1-2",
				source: "1",
				target: "2",
				label: "提交",
				data: { label: "提交" }
			},
			{
				id: "e2-3",
				source: "2",
				target: "3",
				label: "通过",
				data: { label: "通过" }
			},
			{
				id: "e3-4",
				source: "3",
				target: "4",
				label: "完成创建",
				data: { label: "完成创建" }
			},
			{
				id: "e4-5",
				source: "4",
				target: "5",
				label: "完成配置",
				data: { label: "完成配置" }
			}
		];
		const nodes = ref(initialNodes);
		const edges = ref(initialEdges);
		const newEdgeSource = ref("");
		const newEdgeTarget = ref("");
		const { fitView, addEdges, removeEdges, updateNode, addNodes, removeNodes } = useVueFlow();
		function updateNodeLabel(node) {
			updateNode(node.id, { label: node.label });
		}
		function removeNode(nodeId) {
			removeEdges(edges.value.filter((edge) => edge.source === nodeId || edge.target === nodeId).map((e) => e.id));
			removeNodes([nodeId]);
		}
		function addNewNode() {
			const maxY = Math.max(...nodes.value.map((n) => n.position.y), 0);
			addNodes([{
				id: String(Date.now()),
				label: "新步骤",
				position: {
					x: 100,
					y: maxY + 150
				},
				type: "default",
				data: { label: "新步骤" }
			}]);
		}
		function addEdge() {
			if (!newEdgeSource.value || !newEdgeTarget.value) {
				alert("请选择源节点和目标节点");
				return;
			}
			const newEdgeId = `e-${newEdgeSource.value}-${newEdgeTarget.value}`;
			if (edges.value.some((e) => e.id === newEdgeId)) {
				alert("连线已存在");
				return;
			}
			addEdges([{
				id: newEdgeId,
				source: newEdgeSource.value,
				target: newEdgeTarget.value,
				label: "新连线"
			}]);
			newEdgeSource.value = "";
			newEdgeTarget.value = "";
		}
		function exportFlow() {
			const flowData = {
				nodes: nodes.value,
				edges: edges.value
			};
			console.log("导出配置:", JSON.stringify(flowData, null, 2));
			alert("配置已导出，请查看控制台");
		}
		function onNodeClick({ node }) {
			console.log("点击节点:", node.label);
		}
		function onEdgeClick({ edge }) {
			console.log("点击连线:", edge.label);
		}
		function onConnect(connection) {
			console.log("新连线:", connection);
			addEdges([{
				id: `e-${connection.source}-${connection.target}`,
				...connection,
				label: "新连线"
			}]);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				_cache[8] || (_cache[8] = createBaseVNode("h3", null, "流程配置", -1)),
				createBaseVNode("div", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(nodes.value, (node) => {
					return openBlock(), createElementBlock("div", {
						key: node.id,
						class: "node-config-item"
					}, [withDirectives(createBaseVNode("input", {
						"onUpdate:modelValue": ($event) => node.label = $event,
						onChange: ($event) => updateNodeLabel(node)
					}, null, 40, _hoisted_4), [[vModelText, node.label]]), createBaseVNode("button", { onClick: ($event) => removeNode(node.id) }, "删除", 8, _hoisted_5)]);
				}), 128))]),
				createBaseVNode("button", { onClick: addNewNode }, "➕ 添加步骤"),
				_cache[9] || (_cache[9] = createBaseVNode("hr", null, null, -1)),
				createBaseVNode("div", null, [
					_cache[7] || (_cache[7] = createBaseVNode("h4", null, "添加连线", -1)),
					withDirectives(createBaseVNode("select", { "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newEdgeSource.value = $event) }, [_cache[5] || (_cache[5] = createBaseVNode("option", {
						disabled: "",
						value: ""
					}, "源节点", -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(nodes.value, (n) => {
						return openBlock(), createElementBlock("option", {
							key: n.id,
							value: n.id
						}, toDisplayString(n.label), 9, _hoisted_6);
					}), 128))], 512), [[vModelSelect, newEdgeSource.value]]),
					withDirectives(createBaseVNode("select", { "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newEdgeTarget.value = $event) }, [_cache[6] || (_cache[6] = createBaseVNode("option", {
						disabled: "",
						value: ""
					}, "目标节点", -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(nodes.value, (n) => {
						return openBlock(), createElementBlock("option", {
							key: n.id,
							value: n.id
						}, toDisplayString(n.label), 9, _hoisted_7);
					}), 128))], 512), [[vModelSelect, newEdgeTarget.value]]),
					createBaseVNode("button", { onClick: addEdge }, "添加连线")
				]),
				_cache[10] || (_cache[10] = createBaseVNode("hr", null, null, -1)),
				createBaseVNode("button", { onClick: _cache[2] || (_cache[2] = (...args) => unref(fitView) && unref(fitView)(...args)) }, "适应画布"),
				createBaseVNode("button", { onClick: exportFlow }, "导出 JSON")
			]), createBaseVNode("div", _hoisted_8, [createVNode(unref(_sfc_main$1$4), {
				nodes: nodes.value,
				"onUpdate:nodes": _cache[3] || (_cache[3] = ($event) => nodes.value = $event),
				edges: edges.value,
				"onUpdate:edges": _cache[4] || (_cache[4] = ($event) => edges.value = $event),
				"fit-view-on-init": true,
				"default-viewport": { zoom: 1.2 },
				"min-zoom": .5,
				"max-zoom": 2,
				onNodeClick,
				onEdgeClick,
				onConnect
			}, {
				"node-default": withCtx((props) => [createBaseVNode("div", _hoisted_9, [
					createVNode(unref(_sfc_main$f), {
						type: "target",
						position: unref(Position).Top
					}, null, 8, ["position"]),
					createBaseVNode("div", null, toDisplayString(props.data.label), 1),
					createVNode(unref(_sfc_main$f), {
						type: "source",
						position: unref(Position).Bottom
					}, null, 8, ["position"])
				])]),
				"node-input": withCtx((props) => [createBaseVNode("div", null, [createBaseVNode("div", null, toDisplayString(props.data.label), 1), createVNode(unref(_sfc_main$f), {
					type: "source",
					position: unref(Position).Bottom
				}, null, 8, ["position"])])]),
				"node-output": withCtx((props) => [createBaseVNode("div", _hoisted_10, [createVNode(unref(_sfc_main$f), {
					type: "target",
					position: unref(Position).Top,
					class: "handle-top"
				}, null, 8, ["position"]), createBaseVNode("div", _hoisted_11, toDisplayString(props.data.label), 1)])]),
				default: withCtx(() => [createVNode(unref(_sfc_main$2), {
					"pattern-color": "#aaa",
					gap: 20
				}), createVNode(unref(_sfc_main))]),
				_: 1
			}, 8, ["nodes", "edges"])])]);
		};
	}
}), [["__scopeId", "data-v-85e4522e"]]);
//#endregion
export { AccountApply_default as default };

//# sourceMappingURL=AccountApply-BofhgvYX.js.map