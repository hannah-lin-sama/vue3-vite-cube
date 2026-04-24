/* See licenses of bundled dependencies at https://example.com/license.md */
import { A as openBlock, J as ref, M as renderList, V as withDirectives, f as createCommentVNode, i as Fragment, l as computed, p as createElementBlock, u as createBaseVNode, v as defineComponent, xt as toDisplayString } from "./runtime-core.esm-bundler-DmVfr4RT.js";
import { g as withKeys, l as useRouter, m as vModelText, u as _plugin_vue_export_helper_default } from "./index-DxlhaoiK.js";
import { t as route_block_default } from "./route-block-CG_8VGeu.js";
//#region src/pages/home/(admin)/user/index.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "user-management" };
var _hoisted_2 = { class: "action-bar" };
var _hoisted_3 = { class: "search-box" };
var _hoisted_4 = { class: "action-buttons" };
var _hoisted_5 = { class: "user-table-container" };
var _hoisted_6 = { class: "user-table" };
var _hoisted_7 = { class: "user-avatar" };
var _hoisted_8 = ["src", "alt"];
var _hoisted_9 = { class: "action-column" };
var _hoisted_10 = ["onClick"];
var _hoisted_11 = ["onClick"];
var _hoisted_12 = ["onClick"];
var _hoisted_13 = { key: 0 };
var _hoisted_14 = {
	key: 0,
	class: "pagination"
};
var _hoisted_15 = ["disabled"];
var _hoisted_16 = ["disabled"];
var _hoisted_17 = { class: "pagination-info" };
var _hoisted_18 = ["disabled"];
var _hoisted_19 = ["disabled"];
var _hoisted_20 = {
	key: 1,
	class: "dialog-overlay"
};
var _hoisted_21 = { class: "dialog delete-dialog" };
var _hoisted_22 = { class: "dialog-header" };
var _hoisted_23 = { class: "dialog-body" };
var _hoisted_24 = { class: "form-actions" };
var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "UserView",
	__name: "index",
	setup(__props) {
		const searchKeyword = ref("");
		const currentPage = ref(1);
		const pageSize = ref(10);
		const showDeleteDialog = ref(false);
		const deleteUserId = ref();
		const users = ref([
			{
				id: 1,
				name: "张三",
				avatar: "https://picsum.photos/seed/user1/100/100",
				address: "北京市朝阳区",
				email: "zhangsan@example.com",
				phone: "13800138001"
			},
			{
				id: 2,
				name: "李四",
				avatar: "https://picsum.photos/seed/user2/100/100",
				address: "上海市浦东新区",
				email: "lisi@example.com",
				phone: "13900139001"
			},
			{
				id: 3,
				name: "王五",
				avatar: "https://picsum.photos/seed/user3/100/100",
				address: "广州市天河区",
				email: "wangwu@example.com",
				phone: "13700137001"
			},
			{
				id: 4,
				name: "赵六",
				avatar: "https://picsum.photos/seed/user4/100/100",
				address: "深圳市南山区",
				email: "zhaoliu@example.com",
				phone: "13600136001"
			},
			{
				id: 5,
				name: "钱七",
				avatar: "https://picsum.photos/seed/user5/100/100",
				address: "杭州市西湖区",
				email: "qianqi@example.com",
				phone: "13500135001"
			},
			{
				id: 6,
				name: "孙八",
				avatar: "https://picsum.photos/seed/user6/100/100",
				address: "成都市锦江区",
				email: "sunba@example.com",
				phone: "13400134001"
			},
			{
				id: 7,
				name: "周九",
				avatar: "https://picsum.photos/seed/user7/100/100",
				address: "武汉市武昌区",
				email: "zhoujiu@example.com",
				phone: "13300133001"
			},
			{
				id: 8,
				name: "吴十",
				avatar: "https://picsum.photos/seed/user8/100/100",
				address: "西安市雁塔区",
				email: "wushi@example.com",
				phone: "13200132001"
			},
			{
				id: 9,
				name: "郑十一",
				avatar: "https://picsum.photos/seed/user9/100/100",
				address: "南京市玄武区",
				email: "zhengshiyi@example.com",
				phone: "13100131001"
			},
			{
				id: 10,
				name: "王十二",
				avatar: "https://picsum.photos/seed/user10/100/100",
				address: "重庆市渝中区",
				email: "wangshier@example.com",
				phone: "13000130001"
			},
			{
				id: 11,
				name: "李十三",
				avatar: "https://picsum.photos/seed/user11/100/100",
				address: "天津市和平区",
				email: "lishisan@example.com",
				phone: "13800138002"
			}
		]);
		const filteredUsers = computed(() => {
			if (!searchKeyword.value) return users.value;
			return users.value.filter((user) => user.name.toLowerCase().includes(searchKeyword.value.toLowerCase()));
		});
		const paginatedUsers = computed(() => {
			const start = (currentPage.value - 1) * pageSize.value;
			const end = start + pageSize.value;
			return filteredUsers.value.slice(start, end);
		});
		const totalUsers = computed(() => filteredUsers.value.length);
		const totalPages = computed(() => {
			return Math.ceil(totalUsers.value / pageSize.value);
		});
		const handleSearch = () => {
			currentPage.value = 1;
		};
		const router = useRouter();
		const handleView = (user) => {
			router.push({
				path: `/home/user/details/${user.id}`,
				state: user
			});
		};
		const handleEdit = (user) => {
			router.push({
				path: `/home/user/create/${user.id}`,
				state: user
			});
		};
		const handleDelete = (userId) => {
			deleteUserId.value = userId;
			showDeleteDialog.value = true;
		};
		const confirmDelete = () => {
			users.value = users.value.filter((user) => user.id !== deleteUserId.value);
			showDeleteDialog.value = false;
		};
		const handleDownload = () => {
			alert("下载功能开发中...");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				_cache[12] || (_cache[12] = createBaseVNode("div", { class: "page-header" }, [createBaseVNode("h2", null, "用户管理"), createBaseVNode("p", null, "管理系统用户信息")], -1)),
				createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [withDirectives(createBaseVNode("input", {
					type: "text",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchKeyword.value = $event),
					placeholder: "请输入用户名称搜索",
					class: "search-input",
					onKeyup: withKeys(handleSearch, ["enter"])
				}, null, 544), [[vModelText, searchKeyword.value]]), createBaseVNode("button", {
					class: "search-button",
					onClick: handleSearch
				}, "🔍 搜索")]), createBaseVNode("div", _hoisted_4, [createBaseVNode("button", {
					class: "primary-button",
					onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.push("/home/user/create"))
				}, "➕ 新增用户"), createBaseVNode("button", {
					class: "secondary-button",
					onClick: handleDownload
				}, "📥 下载列表")])]),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("table", _hoisted_6, [_cache[9] || (_cache[9] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", null, "用户ID"),
					createBaseVNode("th", null, "用户头像"),
					createBaseVNode("th", null, "用户名称"),
					createBaseVNode("th", null, "地址"),
					createBaseVNode("th", null, "邮箱"),
					createBaseVNode("th", null, "联系方式"),
					createBaseVNode("th", null, "操作")
				])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(paginatedUsers.value, (user) => {
					return openBlock(), createElementBlock("tr", { key: user.id }, [
						createBaseVNode("td", null, toDisplayString(user.id), 1),
						createBaseVNode("td", null, [createBaseVNode("div", _hoisted_7, [createBaseVNode("img", {
							src: user.avatar,
							alt: user.name
						}, null, 8, _hoisted_8)])]),
						createBaseVNode("td", null, toDisplayString(user.name), 1),
						createBaseVNode("td", null, toDisplayString(user.address), 1),
						createBaseVNode("td", null, toDisplayString(user.email), 1),
						createBaseVNode("td", null, toDisplayString(user.phone), 1),
						createBaseVNode("td", _hoisted_9, [
							createBaseVNode("button", {
								class: "view-button",
								onClick: ($event) => handleView(user)
							}, "👁️ 查看", 8, _hoisted_10),
							createBaseVNode("button", {
								class: "edit-button",
								onClick: ($event) => handleEdit(user)
							}, "✏️ 编辑", 8, _hoisted_11),
							createBaseVNode("button", {
								class: "delete-button",
								onClick: ($event) => handleDelete(user.id)
							}, "🗑️ 删除", 8, _hoisted_12)
						])
					]);
				}), 128)), paginatedUsers.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_13, [..._cache[8] || (_cache[8] = [createBaseVNode("td", {
					colspan: "7",
					class: "empty-state"
				}, "暂无用户数据", -1)])])) : createCommentVNode("", true)])])]),
				totalUsers.value > 0 ? (openBlock(), createElementBlock("div", _hoisted_14, [
					createBaseVNode("button", {
						class: "pagination-button",
						disabled: currentPage.value === 1,
						onClick: _cache[2] || (_cache[2] = ($event) => currentPage.value = 1)
					}, "首页", 8, _hoisted_15),
					createBaseVNode("button", {
						class: "pagination-button",
						disabled: currentPage.value === 1,
						onClick: _cache[3] || (_cache[3] = ($event) => currentPage.value--)
					}, "上一页", 8, _hoisted_16),
					createBaseVNode("span", _hoisted_17, " 第 " + toDisplayString(currentPage.value) + " 页，共 " + toDisplayString(totalPages.value) + " 页 ", 1),
					createBaseVNode("button", {
						class: "pagination-button",
						disabled: currentPage.value === totalPages.value,
						onClick: _cache[4] || (_cache[4] = ($event) => currentPage.value++)
					}, "下一页", 8, _hoisted_18),
					createBaseVNode("button", {
						class: "pagination-button",
						disabled: currentPage.value === totalPages.value,
						onClick: _cache[5] || (_cache[5] = ($event) => currentPage.value = totalPages.value)
					}, " 末页 ", 8, _hoisted_19)
				])) : createCommentVNode("", true),
				showDeleteDialog.value ? (openBlock(), createElementBlock("div", _hoisted_20, [createBaseVNode("div", _hoisted_21, [createBaseVNode("div", _hoisted_22, [_cache[10] || (_cache[10] = createBaseVNode("h3", null, "确认删除", -1)), createBaseVNode("button", {
					class: "close-button",
					onClick: _cache[6] || (_cache[6] = ($event) => showDeleteDialog.value = false)
				}, "×")]), createBaseVNode("div", _hoisted_23, [_cache[11] || (_cache[11] = createBaseVNode("p", null, "确定要删除该用户吗？此操作不可恢复。", -1)), createBaseVNode("div", _hoisted_24, [createBaseVNode("button", {
					class: "cancel-button",
					onClick: _cache[7] || (_cache[7] = ($event) => showDeleteDialog.value = false)
				}, "取消"), createBaseVNode("button", {
					class: "delete-confirm-button",
					onClick: confirmDelete
				}, "确认删除")])])])])) : createCommentVNode("", true)
			]);
		};
	}
});
//#endregion
//#region src/pages/home/(admin)/user/index.vue
if (typeof route_block_default === "function") route_block_default(index_vue_vue_type_script_setup_true_lang_default);
var user_default = /* @__PURE__ */ _plugin_vue_export_helper_default(index_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-a0bcb85a"]]);
//#endregion
export { user_default as default };

//# sourceMappingURL=user-p7dUY7Ig.js.map