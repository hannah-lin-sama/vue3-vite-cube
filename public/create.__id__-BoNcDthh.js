/* See licenses of bundled dependencies at https://example.com/license.md */
import { L as openBlock, P as onMounted, Rt as toDisplayString, Z as withDirectives, at as reactive, b as defineComponent, d as createBaseVNode, m as createElementBlock, v as createTextVNode } from "./runtime-core.esm-bundler-DSU8tT8U.js";
import { g as vModelText, i as _plugin_vue_export_helper_default, n as useRoute, r as useRouter, y as withModifiers } from "./index-CnE-UBym.js";
import { t as route_block_default } from "./route-block-CDEvzV8V.js";
//#region src/pages/home/(admin)/user/create.[[id]].vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "user-form-container" };
var _hoisted_2 = { class: "page-header" };
var _hoisted_3 = { class: "form-container" };
var _hoisted_4 = { class: "form-group" };
var _hoisted_5 = { class: "form-group" };
var _hoisted_6 = { class: "form-group" };
var _hoisted_7 = { class: "form-group" };
var _hoisted_8 = { class: "form-actions" };
var _hoisted_9 = {
	type: "submit",
	class: "submit-button"
};
var create___id___vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "UserCreateView",
	__name: "create.[[id]]",
	props: { user: {
		type: Object,
		default: null
	} },
	setup(__props) {
		const router = useRouter();
		const route = useRoute();
		const props = __props;
		const formData = reactive({
			id: "",
			name: "",
			address: "",
			email: "",
			phone: "",
			avatar: ""
		});
		onMounted(() => {
			if (route.params.id) Object.assign(formData, props.user);
			else resetForm();
		});
		const resetForm = () => {
			Object.assign(formData, {
				id: "",
				name: "",
				address: "",
				email: "",
				phone: "",
				avatar: ""
			});
		};
		const handleSubmit = () => {
			setTimeout(() => {
				if (route.params.id) {
					console.log("编辑用户:", formData);
					alert("用户信息已更新");
				} else {
					const newUser = {
						...formData,
						id: Date.now(),
						avatar: `https://picsum.photos/seed/user${Date.now()}/100/100`
					};
					console.log("新增用户:", newUser);
					alert("用户已新增");
				}
				router.push("/home/user");
			}, 500);
		};
		const handleCancel = () => {
			router.push("/home/user");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", null, toDisplayString(_ctx.$route.params?.id ? "编辑用户" : "新增用户"), 1), createBaseVNode("p", null, toDisplayString(_ctx.$route.params?.id ? "修改用户信息" : "添加新用户"), 1)]), createBaseVNode("div", _hoisted_3, [createBaseVNode("form", { onSubmit: withModifiers(handleSubmit, ["prevent"]) }, [
				createBaseVNode("div", _hoisted_4, [_cache[4] || (_cache[4] = createBaseVNode("label", null, [createTextVNode("用户名称 "), createBaseVNode("span", { class: "required" }, "*")], -1)), withDirectives(createBaseVNode("input", {
					type: "text",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.name = $event),
					placeholder: "请输入用户名称",
					required: "",
					class: "form-input"
				}, null, 512), [[vModelText, formData.name]])]),
				createBaseVNode("div", _hoisted_5, [_cache[5] || (_cache[5] = createBaseVNode("label", null, "地址", -1)), withDirectives(createBaseVNode("input", {
					type: "text",
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.address = $event),
					placeholder: "请输入地址",
					class: "form-input"
				}, null, 512), [[vModelText, formData.address]])]),
				createBaseVNode("div", _hoisted_6, [_cache[6] || (_cache[6] = createBaseVNode("label", null, [createTextVNode("邮箱 "), createBaseVNode("span", { class: "required" }, "*")], -1)), withDirectives(createBaseVNode("input", {
					type: "email",
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.email = $event),
					placeholder: "请输入邮箱",
					required: "",
					class: "form-input"
				}, null, 512), [[vModelText, formData.email]])]),
				createBaseVNode("div", _hoisted_7, [_cache[7] || (_cache[7] = createBaseVNode("label", null, "联系方式", -1)), withDirectives(createBaseVNode("input", {
					type: "tel",
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.phone = $event),
					placeholder: "请输入联系方式",
					class: "form-input"
				}, null, 512), [[vModelText, formData.phone]])]),
				createBaseVNode("div", _hoisted_8, [createBaseVNode("button", {
					type: "button",
					class: "cancel-button",
					onClick: handleCancel
				}, "取消"), createBaseVNode("button", _hoisted_9, toDisplayString(_ctx.$route.params?.id ? "保存" : "新增"), 1)])
			], 32)])]);
		};
	}
});
//#endregion
//#region src/pages/home/(admin)/user/create.[[id]].vue
if (typeof route_block_default === "function") route_block_default(create___id___vue_vue_type_script_setup_true_lang_default);
var create___id___default = /* @__PURE__ */ _plugin_vue_export_helper_default(create___id___vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ca635d49"]]);
//#endregion
export { create___id___default as default };

//# sourceMappingURL=create.__id__-BoNcDthh.js.map