/* See licenses of bundled dependencies at https://example.com/license.md */
import { Ft as toDisplayString, L as openBlock, Nt as normalizeClass, P as onMounted, Pt as normalizeStyle, S as defineComponent, at as ref, f as createBaseVNode, h as createElementBlock, i as Fragment, z as renderList } from "./runtime-core.esm-bundler-iJ6VnBzh.js";
import { d as _plugin_vue_export_helper_default } from "./index-CKovKC9h.js";
//#region src/pages/home/dashboard/index@logs.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "logs-dashboard" };
var _hoisted_2 = { class: "time-range-selector" };
var _hoisted_3 = ["onClick"];
var _hoisted_4 = { class: "metrics-cards" };
var _hoisted_5 = { class: "metric-info" };
var _hoisted_6 = { class: "metric-title" };
var _hoisted_7 = { class: "metric-value" };
var _hoisted_8 = { class: "trend-charts" };
var _hoisted_9 = { class: "chart-container" };
var _hoisted_10 = { class: "chart-placeholder" };
var _hoisted_11 = { class: "chart-grid" };
var _hoisted_12 = { class: "chart-labels" };
var _hoisted_13 = { class: "chart-container" };
var _hoisted_14 = { class: "chart-placeholder" };
var _hoisted_15 = { class: "chart-grid" };
var _hoisted_16 = { class: "chart-labels" };
var _hoisted_17 = { class: "logs-table-container" };
var _hoisted_18 = { class: "table-wrapper" };
var _hoisted_19 = { class: "logs-table" };
//#endregion
//#region src/pages/home/dashboard/index@logs.vue
var index_logs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "HomeDashboardIndexLogsView",
	__name: "index@logs",
	setup(__props) {
		const timeRanges = [
			{
				label: "过去24小时",
				value: "24h"
			},
			{
				label: "过去7天",
				value: "7d"
			},
			{
				label: "过去30天",
				value: "30d"
			},
			{
				label: "过去90天",
				value: "90d"
			}
		];
		const selectedTimeRange = ref("24h");
		const metrics = ref([
			{
				id: 1,
				title: "总请求数",
				value: "12,458",
				change: "+12.5%",
				changeClass: "positive",
				icon: "📈",
				iconClass: "primary"
			},
			{
				id: 2,
				title: "平均响应时间",
				value: "123ms",
				change: "-8.2%",
				changeClass: "positive",
				icon: "⚡",
				iconClass: "success"
			},
			{
				id: 3,
				title: "错误率",
				value: "2.3%",
				change: "+1.1%",
				changeClass: "negative",
				icon: "⚠️",
				iconClass: "warning"
			},
			{
				id: 4,
				title: "系统负载",
				value: "45%",
				change: "-3.4%",
				changeClass: "positive",
				icon: "🏋️",
				iconClass: "info"
			}
		]);
		const timeLabels = ref([
			"00:00",
			"04:00",
			"08:00",
			"12:00",
			"16:00",
			"20:00"
		]);
		const responseTimeData = ref([
			{
				height: 45,
				color: "#1890ff"
			},
			{
				height: 38,
				color: "#1890ff"
			},
			{
				height: 65,
				color: "#ff4d4f"
			},
			{
				height: 52,
				color: "#1890ff"
			},
			{
				height: 48,
				color: "#1890ff"
			},
			{
				height: 35,
				color: "#1890ff"
			}
		]);
		const requestCountData = ref([
			{
				height: 30,
				color: "#52c41a"
			},
			{
				height: 25,
				color: "#52c41a"
			},
			{
				height: 60,
				color: "#52c41a"
			},
			{
				height: 75,
				color: "#52c41a"
			},
			{
				height: 65,
				color: "#52c41a"
			},
			{
				height: 45,
				color: "#52c41a"
			}
		]);
		const recentLogs = ref([
			{
				id: 1,
				time: "2026-03-23 14:30:22",
				level: "INFO",
				levelClass: "info",
				module: "API",
				message: "用户登录成功",
				responseTime: "45ms"
			},
			{
				id: 2,
				time: "2026-03-23 14:28:15",
				level: "ERROR",
				levelClass: "error",
				module: "Database",
				message: "数据库连接超时",
				responseTime: "2500ms"
			},
			{
				id: 3,
				time: "2026-03-23 14:25:47",
				level: "INFO",
				levelClass: "info",
				module: "API",
				message: "数据查询成功",
				responseTime: "67ms"
			},
			{
				id: 4,
				time: "2026-03-23 14:22:18",
				level: "WARN",
				levelClass: "warning",
				module: "Cache",
				message: "缓存容量不足",
				responseTime: "12ms"
			},
			{
				id: 5,
				time: "2026-03-23 14:18:55",
				level: "INFO",
				levelClass: "info",
				module: "API",
				message: "文件上传成功",
				responseTime: "124ms"
			}
		]);
		onMounted(() => {
			console.log("Logs dashboard loaded");
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				_cache[4] || (_cache[4] = createBaseVNode("div", { class: "logs-header" }, [createBaseVNode("h3", null, "系统日志分析"), createBaseVNode("p", null, "展示系统运行的周期性指标信息")], -1)),
				createBaseVNode("div", _hoisted_2, [(openBlock(), createElementBlock(Fragment, null, renderList(timeRanges, (range) => {
					return createBaseVNode("button", {
						key: range.value,
						class: normalizeClass(["time-btn", { active: selectedTimeRange.value === range.value }]),
						onClick: ($event) => selectedTimeRange.value = range.value
					}, toDisplayString(range.label), 11, _hoisted_3);
				}), 64))]),
				createBaseVNode("div", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(metrics.value, (metric) => {
					return openBlock(), createElementBlock("div", {
						class: "metric-card",
						key: metric.id
					}, [createBaseVNode("div", { class: normalizeClass(["metric-icon", metric.iconClass]) }, toDisplayString(metric.icon), 3), createBaseVNode("div", _hoisted_5, [
						createBaseVNode("h4", _hoisted_6, toDisplayString(metric.title), 1),
						createBaseVNode("p", _hoisted_7, toDisplayString(metric.value), 1),
						createBaseVNode("p", { class: normalizeClass(["metric-change", metric.changeClass]) }, toDisplayString(metric.change), 3)
					])]);
				}), 128))]),
				createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [_cache[0] || (_cache[0] = createBaseVNode("h4", { class: "chart-title" }, "系统响应时间趋势", -1)), createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [(openBlock(true), createElementBlock(Fragment, null, renderList(responseTimeData.value, (point, index) => {
					return openBlock(), createElementBlock("div", {
						key: index,
						class: "chart-bar",
						style: normalizeStyle({
							height: point.height + "%",
							backgroundColor: point.color
						})
					}, null, 4);
				}), 128))]), createBaseVNode("div", _hoisted_12, [(openBlock(true), createElementBlock(Fragment, null, renderList(timeLabels.value, (label, index) => {
					return openBlock(), createElementBlock("span", { key: index }, toDisplayString(label), 1);
				}), 128))])])]), createBaseVNode("div", _hoisted_13, [_cache[1] || (_cache[1] = createBaseVNode("h4", { class: "chart-title" }, "请求量趋势", -1)), createBaseVNode("div", _hoisted_14, [createBaseVNode("div", _hoisted_15, [(openBlock(true), createElementBlock(Fragment, null, renderList(requestCountData.value, (point, index) => {
					return openBlock(), createElementBlock("div", {
						key: index,
						class: "chart-bar",
						style: normalizeStyle({
							height: point.height + "%",
							backgroundColor: point.color
						})
					}, null, 4);
				}), 128))]), createBaseVNode("div", _hoisted_16, [(openBlock(true), createElementBlock(Fragment, null, renderList(timeLabels.value, (label, index) => {
					return openBlock(), createElementBlock("span", { key: index }, toDisplayString(label), 1);
				}), 128))])])])]),
				createBaseVNode("div", _hoisted_17, [_cache[3] || (_cache[3] = createBaseVNode("h4", { class: "table-title" }, "最近日志记录", -1)), createBaseVNode("div", _hoisted_18, [createBaseVNode("table", _hoisted_19, [_cache[2] || (_cache[2] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", null, "时间"),
					createBaseVNode("th", null, "级别"),
					createBaseVNode("th", null, "模块"),
					createBaseVNode("th", null, "消息"),
					createBaseVNode("th", null, "响应时间")
				])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(recentLogs.value, (log) => {
					return openBlock(), createElementBlock("tr", {
						key: log.id,
						class: normalizeClass(log.levelClass)
					}, [
						createBaseVNode("td", null, toDisplayString(log.time), 1),
						createBaseVNode("td", null, [createBaseVNode("span", { class: normalizeClass(["level-badge", log.levelClass]) }, toDisplayString(log.level), 3)]),
						createBaseVNode("td", null, toDisplayString(log.module), 1),
						createBaseVNode("td", null, toDisplayString(log.message), 1),
						createBaseVNode("td", null, toDisplayString(log.responseTime), 1)
					], 2);
				}), 128))])])])])
			]);
		};
	}
}), [["__scopeId", "data-v-cbc70a3c"]]);
//#endregion
export { index_logs_default as default };

//# sourceMappingURL=index@logs-D3YIbuZc.js.map