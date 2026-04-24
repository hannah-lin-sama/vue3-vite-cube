/* See licenses of bundled dependencies at https://example.com/license.md */
import { A as openBlock, B as withCtx, J as ref, M as renderList, O as onMounted, P as resolveComponent, _ as createVNode, g as createTextVNode, i as Fragment, l as computed, p as createElementBlock, u as createBaseVNode, v as defineComponent, xt as toDisplayString } from "./runtime-core.esm-bundler-DmVfr4RT.js";
import { c as useRoute, l as useRouter, u as _plugin_vue_export_helper_default } from "./index-DxlhaoiK.js";
import { t as route_block_default } from "./route-block-CG_8VGeu.js";
//#region src/pages/home/(admin)/user/details.[id].vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "user-details-container" };
var _hoisted_2 = { class: "page-header" };
var _hoisted_3 = { class: "breadcrumb" };
var _hoisted_4 = { class: "action-buttons" };
var _hoisted_5 = { class: "user-card" };
var _hoisted_6 = { class: "user-header" };
var _hoisted_7 = { class: "user-avatar-large" };
var _hoisted_8 = ["src", "alt"];
var _hoisted_9 = { class: "user-basic-info" };
var _hoisted_10 = { class: "user-name" };
var _hoisted_11 = { class: "user-id" };
var _hoisted_12 = { class: "user-meta" };
var _hoisted_13 = { class: "meta-item" };
var _hoisted_14 = { class: "meta-item" };
var _hoisted_15 = { class: "user-details" };
var _hoisted_16 = { class: "detail-section" };
var _hoisted_17 = { class: "detail-grid" };
var _hoisted_18 = { class: "detail-item" };
var _hoisted_19 = { class: "detail-value" };
var _hoisted_20 = { class: "detail-item" };
var _hoisted_21 = { class: "detail-value" };
var _hoisted_22 = { class: "detail-item" };
var _hoisted_23 = { class: "detail-value" };
var _hoisted_24 = { class: "detail-item" };
var _hoisted_25 = { class: "detail-value" };
var _hoisted_26 = { class: "detail-item" };
var _hoisted_27 = { class: "detail-value" };
var _hoisted_28 = { class: "detail-section" };
var _hoisted_29 = { class: "detail-grid" };
var _hoisted_30 = { class: "detail-item" };
var _hoisted_31 = { class: "detail-value" };
var _hoisted_32 = { class: "detail-item" };
var _hoisted_33 = { class: "detail-value" };
var _hoisted_34 = { class: "activity-section" };
var _hoisted_35 = { class: "activity-list" };
var _hoisted_36 = { class: "activity-icon" };
var _hoisted_37 = { class: "activity-content" };
var _hoisted_38 = { class: "activity-text" };
var _hoisted_39 = { class: "activity-time" };
var details__id__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "UserDetailsView",
	__name: "details.[id]",
	setup(__props) {
		const router = useRouter();
		const route = useRoute();
		const user = ref({
			id: 1,
			name: "张三",
			avatar: "https://picsum.photos/seed/user1/200/200",
			address: "北京市朝阳区",
			email: "zhangsan@example.com",
			phone: "13800138001"
		});
		const activities = ref([
			{
				icon: "📝",
				text: "更新了个人信息",
				time: "2026-03-20 14:30"
			},
			{
				icon: "🔑",
				text: "登录了系统",
				time: "2026-03-19 09:15"
			},
			{
				icon: "📤",
				text: "导出了数据报表",
				time: "2026-03-18 16:45"
			},
			{
				icon: "📥",
				text: "上传了文件",
				time: "2026-03-17 11:20"
			}
		]);
		const formattedDate = computed(() => {
			return (/* @__PURE__ */ new Date()).toLocaleDateString("zh-CN");
		});
		const lastLoginDate = computed(() => {
			const date = /* @__PURE__ */ new Date();
			date.setDate(date.getDate() - 2);
			return date.toLocaleString("zh-CN");
		});
		const handleEdit = () => {
			router.push({ path: `/home/user/create/${user.value.id}` });
		};
		onMounted(() => {
			const userId = route.params.id;
			if (userId) console.log("获取用户数据:", userId);
		});
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [
					createBaseVNode("div", _hoisted_3, [
						createVNode(_component_router_link, {
							to: "/home",
							class: "breadcrumb-item"
						}, {
							default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("首页", -1)])]),
							_: 1
						}),
						_cache[3] || (_cache[3] = createBaseVNode("span", { class: "breadcrumb-separator" }, "/", -1)),
						createVNode(_component_router_link, {
							to: "/home/user",
							class: "breadcrumb-item"
						}, {
							default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("用户管理", -1)])]),
							_: 1
						}),
						_cache[4] || (_cache[4] = createBaseVNode("span", { class: "breadcrumb-separator" }, "/", -1)),
						_cache[5] || (_cache[5] = createBaseVNode("span", { class: "breadcrumb-item active" }, "用户详情", -1))
					]),
					_cache[6] || (_cache[6] = createBaseVNode("h2", null, "用户详情", -1)),
					_cache[7] || (_cache[7] = createBaseVNode("p", null, "查看用户的详细信息", -1))
				]),
				createBaseVNode("div", _hoisted_4, [createBaseVNode("button", {
					class: "back-button",
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push("/home/user"))
				}, "← 返回列表"), createBaseVNode("button", {
					class: "edit-button",
					onClick: handleEdit
				}, "✏️ 编辑用户")]),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("img", {
					src: user.value.avatar,
					alt: user.value.name
				}, null, 8, _hoisted_8)]), createBaseVNode("div", _hoisted_9, [
					createBaseVNode("h3", _hoisted_10, toDisplayString(user.value.name), 1),
					createBaseVNode("p", _hoisted_11, "用户ID: " + toDisplayString(user.value.id), 1),
					createBaseVNode("div", _hoisted_12, [createBaseVNode("span", _hoisted_13, " 📧 " + toDisplayString(user.value.email), 1), createBaseVNode("span", _hoisted_14, " 📱 " + toDisplayString(user.value.phone), 1)])
				])]), createBaseVNode("div", _hoisted_15, [createBaseVNode("div", _hoisted_16, [_cache[13] || (_cache[13] = createBaseVNode("h4", { class: "section-title" }, "基本信息", -1)), createBaseVNode("div", _hoisted_17, [
					createBaseVNode("div", _hoisted_18, [_cache[8] || (_cache[8] = createBaseVNode("span", { class: "detail-label" }, "姓名", -1)), createBaseVNode("span", _hoisted_19, toDisplayString(user.value.name), 1)]),
					createBaseVNode("div", _hoisted_20, [_cache[9] || (_cache[9] = createBaseVNode("span", { class: "detail-label" }, "用户ID", -1)), createBaseVNode("span", _hoisted_21, toDisplayString(user.value.id), 1)]),
					createBaseVNode("div", _hoisted_22, [_cache[10] || (_cache[10] = createBaseVNode("span", { class: "detail-label" }, "邮箱", -1)), createBaseVNode("span", _hoisted_23, toDisplayString(user.value.email), 1)]),
					createBaseVNode("div", _hoisted_24, [_cache[11] || (_cache[11] = createBaseVNode("span", { class: "detail-label" }, "联系方式", -1)), createBaseVNode("span", _hoisted_25, toDisplayString(user.value.phone), 1)]),
					createBaseVNode("div", _hoisted_26, [_cache[12] || (_cache[12] = createBaseVNode("span", { class: "detail-label" }, "地址", -1)), createBaseVNode("span", _hoisted_27, toDisplayString(user.value.address), 1)])
				])]), createBaseVNode("div", _hoisted_28, [_cache[18] || (_cache[18] = createBaseVNode("h4", { class: "section-title" }, "账户信息", -1)), createBaseVNode("div", _hoisted_29, [
					createBaseVNode("div", _hoisted_30, [_cache[14] || (_cache[14] = createBaseVNode("span", { class: "detail-label" }, "注册时间", -1)), createBaseVNode("span", _hoisted_31, toDisplayString(formattedDate.value), 1)]),
					_cache[16] || (_cache[16] = createBaseVNode("div", { class: "detail-item" }, [createBaseVNode("span", { class: "detail-label" }, "账户状态"), createBaseVNode("span", { class: "detail-value status-active" }, "活跃")], -1)),
					createBaseVNode("div", _hoisted_32, [_cache[15] || (_cache[15] = createBaseVNode("span", { class: "detail-label" }, "最后登录", -1)), createBaseVNode("span", _hoisted_33, toDisplayString(lastLoginDate.value), 1)]),
					_cache[17] || (_cache[17] = createBaseVNode("div", { class: "detail-item" }, [createBaseVNode("span", { class: "detail-label" }, "角色"), createBaseVNode("span", { class: "detail-value" }, "普通用户")], -1))
				])])])]),
				createBaseVNode("div", _hoisted_34, [_cache[19] || (_cache[19] = createBaseVNode("h3", { class: "section-title" }, "最近活动", -1)), createBaseVNode("div", _hoisted_35, [(openBlock(true), createElementBlock(Fragment, null, renderList(activities.value, (activity, index) => {
					return openBlock(), createElementBlock("div", {
						class: "activity-item",
						key: index
					}, [createBaseVNode("div", _hoisted_36, toDisplayString(activity.icon), 1), createBaseVNode("div", _hoisted_37, [createBaseVNode("p", _hoisted_38, toDisplayString(activity.text), 1), createBaseVNode("p", _hoisted_39, toDisplayString(activity.time), 1)])]);
				}), 128))])])
			]);
		};
	}
});
//#endregion
//#region src/pages/home/(admin)/user/details.[id].vue
if (typeof route_block_default === "function") route_block_default(details__id__vue_vue_type_script_setup_true_lang_default);
var details__id__default = /* @__PURE__ */ _plugin_vue_export_helper_default(details__id__vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ff514be1"]]);
//#endregion
export { details__id__default as default };

//# sourceMappingURL=details._id_-HYqQvnjP.js.map