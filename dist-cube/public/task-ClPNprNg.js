/* See licenses of bundled dependencies at https://example.com/license.md */
import { F as onUnmounted, Ft as toDisplayString, L as openBlock, Nt as normalizeClass, P as onMounted, S as defineComponent, X as withDirectives, at as ref, d as computed, f as createBaseVNode, h as createElementBlock, i as Fragment, k as nextTick, m as createCommentVNode, v as createStaticVNode, y as createTextVNode, z as renderList } from "./runtime-core.esm-bundler-iJ6VnBzh.js";
import { _ as withKeys, d as _plugin_vue_export_helper_default, h as vModelText, m as vModelSelect } from "./index-CKovKC9h.js";
import { t as route_block_default } from "./route-block-CvgXkmMc.js";
//#region src/pages/home/task.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "task-management" };
var _hoisted_2 = { class: "action-bar" };
var _hoisted_3 = { class: "search-box" };
var _hoisted_4 = { class: "filter-box" };
var _hoisted_5 = { class: "task-table-container" };
var _hoisted_6 = { class: "task-table" };
var _hoisted_7 = { class: "user-info" };
var _hoisted_8 = ["src", "alt"];
var _hoisted_9 = { key: 0 };
var _hoisted_10 = {
	key: 0,
	class: "loading-indicator"
};
var task_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "task",
	setup(__props) {
		const searchKeyword = ref("");
		const platformFilter = ref("");
		const browserFilter = ref("");
		const currentPage = ref(1);
		const pageSize = ref(20);
		const isLoading = ref(false);
		const contentContainer = ref(null);
		const tasks = ref([]);
		const generateMockData = () => {
			const mockTasks = [];
			const users = [
				{
					id: 1,
					name: "张三",
					avatar: "https://picsum.photos/seed/user1/100/100"
				},
				{
					id: 2,
					name: "李四",
					avatar: "https://picsum.photos/seed/user2/100/100"
				},
				{
					id: 3,
					name: "王五",
					avatar: "https://picsum.photos/seed/user3/100/100"
				},
				{
					id: 4,
					name: "赵六",
					avatar: "https://picsum.photos/seed/user4/100/100"
				},
				{
					id: 5,
					name: "钱七",
					avatar: "https://picsum.photos/seed/user5/100/100"
				}
			];
			const pages = [
				"首页",
				"用户管理",
				"角色管理",
				"任务管理",
				"系统设置",
				"数据统计"
			];
			const operationTypes = [
				"create",
				"update",
				"delete",
				"view",
				"export"
			];
			const statuses = [
				"success",
				"warning",
				"error"
			];
			const mobileModels = [
				"iPhone 14",
				"iPhone 15",
				"Samsung Galaxy S23",
				"Huawei Mate 50",
				"Xiaomi 13"
			];
			const desktopModels = [
				"MacBook Pro",
				"Dell XPS",
				"HP Spectre",
				"Lenovo ThinkPad",
				"Asus ZenBook"
			];
			const browsers = [
				{
					name: "Chrome",
					version: "120.0.0.0"
				},
				{
					name: "Firefox",
					version: "115.0.0"
				},
				{
					name: "Safari",
					version: "16.0"
				},
				{
					name: "Edge",
					version: "120.0.0.0"
				}
			];
			for (let i = 1; i <= 300; i++) {
				const isMobile = Math.random() > .5;
				mockTasks.push({
					id: i,
					timestamp: new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1e3)),
					user: users[Math.floor(Math.random() * users.length)],
					page: pages[Math.floor(Math.random() * pages.length)],
					platform: {
						type: isMobile ? "mobile" : "desktop",
						model: isMobile ? mobileModels[Math.floor(Math.random() * mobileModels.length)] : desktopModels[Math.floor(Math.random() * desktopModels.length)]
					},
					browser: browsers[Math.floor(Math.random() * browsers.length)],
					operationType: operationTypes[Math.floor(Math.random() * operationTypes.length)],
					ip: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
					status: statuses[Math.floor(Math.random() * statuses.length)]
				});
			}
			return mockTasks.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
		};
		onMounted(() => {
			tasks.value = generateMockData();
			nextTick(() => {
				contentContainer.value = document.querySelector(".main .content");
				if (contentContainer.value) {
					contentContainer.value.addEventListener("scroll", handleScroll);
					console.log("已添加content容器滚动事件监听器");
				} else console.log("未找到content容器");
			});
		});
		onUnmounted(() => {
			if (contentContainer.value) contentContainer.value.removeEventListener("scroll", handleScroll);
		});
		const handleScroll = () => {
			if (!contentContainer.value) return;
			console.log("滚动事件触发");
			const { scrollTop, scrollHeight, clientHeight } = contentContainer.value;
			if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading.value && hasMoreTasks.value) loadMore();
		};
		const filteredTasks = computed(() => {
			return tasks.value.filter((task) => {
				const matchesSearch = !searchKeyword.value || task.user.name.toLowerCase().includes(searchKeyword.value.toLowerCase()) || task.page.toLowerCase().includes(searchKeyword.value.toLowerCase());
				const matchesPlatform = !platformFilter.value || task.platform.type === platformFilter.value;
				const matchesBrowser = !browserFilter.value || task.browser.name === browserFilter.value;
				return matchesSearch && matchesPlatform && matchesBrowser;
			});
		});
		const displayedTasks = computed(() => {
			const end = currentPage.value * pageSize.value;
			return filteredTasks.value.slice(0, end);
		});
		const hasMoreTasks = computed(() => {
			return displayedTasks.value.length < filteredTasks.value.length;
		});
		const loadMore = () => {
			if (!isLoading.value && hasMoreTasks.value) {
				isLoading.value = true;
				setTimeout(() => {
					currentPage.value++;
					isLoading.value = false;
				}, 500);
			}
		};
		const handleSearch = () => {
			currentPage.value = 1;
		};
		const formatDate = (date) => {
			return date.toLocaleString("zh-CN", {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit"
			});
		};
		const getOperationTypeText = (type) => {
			return {
				create: "创建",
				update: "更新",
				delete: "删除",
				view: "查看",
				export: "导出"
			}[type] || type;
		};
		const getStatusText = (status) => {
			return {
				success: "成功",
				warning: "警告",
				error: "错误"
			}[status] || status;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				_cache[9] || (_cache[9] = createBaseVNode("div", { class: "page-header" }, [createBaseVNode("h2", null, "操作记录"), createBaseVNode("p", null, "查看项目操作历史记录")], -1)),
				createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [withDirectives(createBaseVNode("input", {
					type: "text",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchKeyword.value = $event),
					placeholder: "请输入用户名称或操作页面搜索",
					class: "search-input",
					onKeyup: withKeys(handleSearch, ["enter"])
				}, null, 544), [[vModelText, searchKeyword.value]]), createBaseVNode("button", {
					class: "search-button",
					onClick: handleSearch
				}, "🔍 搜索")]), createBaseVNode("div", _hoisted_4, [withDirectives(createBaseVNode("select", {
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => platformFilter.value = $event),
					class: "filter-select"
				}, [..._cache[3] || (_cache[3] = [
					createBaseVNode("option", { value: "" }, "全部平台", -1),
					createBaseVNode("option", { value: "mobile" }, "手机", -1),
					createBaseVNode("option", { value: "desktop" }, "电脑", -1)
				])], 512), [[vModelSelect, platformFilter.value]]), withDirectives(createBaseVNode("select", {
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => browserFilter.value = $event),
					class: "filter-select"
				}, [..._cache[4] || (_cache[4] = [createStaticVNode("<option value=\"\" data-v-548feae4>全部浏览器</option><option value=\"Chrome\" data-v-548feae4>Chrome</option><option value=\"Firefox\" data-v-548feae4>Firefox</option><option value=\"Safari\" data-v-548feae4>Safari</option><option value=\"Edge\" data-v-548feae4>Edge</option>", 5)])], 512), [[vModelSelect, browserFilter.value]])])]),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("table", _hoisted_6, [_cache[7] || (_cache[7] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", null, "操作记录ID"),
					createBaseVNode("th", null, "操作时间"),
					createBaseVNode("th", null, "操作用户"),
					createBaseVNode("th", null, "操作页面"),
					createBaseVNode("th", null, "操作平台"),
					createBaseVNode("th", null, "浏览器"),
					createBaseVNode("th", null, "操作类型"),
					createBaseVNode("th", null, "IP地址"),
					createBaseVNode("th", null, "状态")
				])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayedTasks.value, (task) => {
					return openBlock(), createElementBlock("tr", { key: task.id }, [
						createBaseVNode("td", null, toDisplayString(task.id), 1),
						createBaseVNode("td", null, toDisplayString(formatDate(task.timestamp)), 1),
						createBaseVNode("td", null, [createBaseVNode("div", _hoisted_7, [createBaseVNode("img", {
							src: task.user.avatar,
							alt: task.user.name,
							class: "user-avatar"
						}, null, 8, _hoisted_8), createBaseVNode("span", null, toDisplayString(task.user.name), 1)])]),
						createBaseVNode("td", null, toDisplayString(task.page), 1),
						createBaseVNode("td", null, [
							createTextVNode(toDisplayString(task.platform.type === "mobile" ? "手机" : "电脑"), 1),
							_cache[5] || (_cache[5] = createBaseVNode("br", null, null, -1)),
							createTextVNode(toDisplayString(task.platform.model), 1)
						]),
						createBaseVNode("td", null, toDisplayString(task.browser.name) + " " + toDisplayString(task.browser.version), 1),
						createBaseVNode("td", null, [createBaseVNode("span", { class: normalizeClass(["operation-type", task.operationType]) }, toDisplayString(getOperationTypeText(task.operationType)), 3)]),
						createBaseVNode("td", null, toDisplayString(task.ip), 1),
						createBaseVNode("td", null, [createBaseVNode("span", { class: normalizeClass(["status", task.status]) }, toDisplayString(getStatusText(task.status)), 3)])
					]);
				}), 128)), displayedTasks.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_9, [..._cache[6] || (_cache[6] = [createBaseVNode("td", {
					colspan: "9",
					class: "empty-state"
				}, "暂无操作记录", -1)])])) : createCommentVNode("", true)])]), isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_10, [..._cache[8] || (_cache[8] = [createBaseVNode("span", { class: "loading-spinner" }, "⟳", -1), createBaseVNode("span", null, "加载中...", -1)])])) : createCommentVNode("", true)])
			]);
		};
	}
});
//#endregion
//#region src/pages/home/task.vue
if (typeof route_block_default === "function") route_block_default(task_vue_vue_type_script_setup_true_lang_default);
var task_default = /* @__PURE__ */ _plugin_vue_export_helper_default(task_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-548feae4"]]);
//#endregion
export { task_default as default };

//# sourceMappingURL=task-ClPNprNg.js.map