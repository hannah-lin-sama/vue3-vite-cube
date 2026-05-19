/* See licenses of bundled dependencies at https://example.com/license.md */
import { L as openBlock, Rt as toDisplayString, Z as withDirectives, _ as createStaticVNode, at as reactive, b as defineComponent, d as createBaseVNode, m as createElementBlock, p as createCommentVNode, st as ref } from "./runtime-core.esm-bundler-DSU8tT8U.js";
import { g as vModelText, i as _plugin_vue_export_helper_default, m as vModelCheckbox, r as useRouter } from "./index-CnE-UBym.js";
import { t as route_block_default } from "./route-block-CDEvzV8V.js";
//#region src/pages/login.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "login-container" };
var _hoisted_2 = { class: "login-form-section" };
var _hoisted_3 = { class: "login-form-container" };
var _hoisted_4 = { class: "login-form" };
var _hoisted_5 = { class: "form-group" };
var _hoisted_6 = { class: "input-wrapper" };
var _hoisted_7 = {
	key: 0,
	class: "error-message"
};
var _hoisted_8 = { class: "form-group" };
var _hoisted_9 = { class: "input-wrapper" };
var _hoisted_10 = {
	key: 0,
	class: "error-message"
};
var _hoisted_11 = { class: "form-options" };
var _hoisted_12 = { class: "remember-me" };
var _hoisted_13 = ["disabled"];
var _hoisted_14 = { key: 0 };
var _hoisted_15 = {
	key: 1,
	class: "loading-spinner"
};
var login_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "LoginView",
	__name: "login",
	setup(__props) {
		const router = useRouter();
		const form = reactive({
			username: "",
			password: "",
			remember: false
		});
		const errors = reactive({
			username: "",
			password: ""
		});
		const showPassword = ref(false);
		const isLoading = ref(false);
		const focusedInput = ref("");
		const focusInput = (input) => {
			focusedInput.value = input;
			errors[input] = "";
		};
		const blurInput = (input) => {
			focusedInput.value = "";
		};
		const handleLogin = async () => {
			let isValid = true;
			if (!form.username) {
				errors.username = "请输入用户名";
				isValid = false;
			}
			if (!form.password) {
				errors.password = "请输入密码";
				isValid = false;
			}
			if (!isValid) return;
			isLoading.value = true;
			try {
				await new Promise((resolve) => setTimeout(resolve, 1500));
				router.push("/home");
			} catch (error) {
				console.error("登录失败:", error);
			} finally {
				isLoading.value = false;
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [_cache[16] || (_cache[16] = createBaseVNode("div", { class: "login-image-section" }, [createBaseVNode("img", {
				class: "login-image",
				src: "https://picsum.photos/seed/mountain/1200/800",
				alt: "登录背景"
			}), createBaseVNode("div", { class: "image-overlay" }, [createBaseVNode("div", { class: "overlay-content" }, [createBaseVNode("h2", null, "Vue Cube"), createBaseVNode("p", null, "平台")])])], -1)), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [_cache[15] || (_cache[15] = createBaseVNode("div", { class: "form-header" }, [createBaseVNode("h1", null, "登录"), createBaseVNode("p", { class: "form-subtitle" }, "请输入您的账号和密码")], -1)), createBaseVNode("form", _hoisted_4, [
				createBaseVNode("div", _hoisted_5, [
					_cache[9] || (_cache[9] = createBaseVNode("label", {
						for: "username",
						class: "form-label"
					}, "用户名", -1)),
					createBaseVNode("div", _hoisted_6, [_cache[8] || (_cache[8] = createBaseVNode("span", { class: "input-icon" }, "👤", -1)), withDirectives(createBaseVNode("input", {
						type: "text",
						id: "username",
						class: "form-input",
						placeholder: "请输入用户名",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.username = $event),
						onFocus: _cache[1] || (_cache[1] = ($event) => focusInput("username")),
						onBlur: _cache[2] || (_cache[2] = ($event) => blurInput("username"))
					}, null, 544), [[vModelText, form.username]])]),
					errors.username ? (openBlock(), createElementBlock("p", _hoisted_7, toDisplayString(errors.username), 1)) : createCommentVNode("", true)
				]),
				createBaseVNode("div", _hoisted_8, [
					_cache[11] || (_cache[11] = createBaseVNode("label", {
						for: "password",
						class: "form-label"
					}, "密码", -1)),
					createBaseVNode("div", _hoisted_9, [
						_cache[10] || (_cache[10] = createBaseVNode("span", { class: "input-icon" }, "🔒", -1)),
						withDirectives(createBaseVNode("input", {
							type: "password",
							id: "password",
							class: "form-input",
							placeholder: "请输入密码",
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.password = $event),
							onFocus: _cache[4] || (_cache[4] = ($event) => focusInput("password")),
							onBlur: _cache[5] || (_cache[5] = ($event) => blurInput("password"))
						}, null, 544), [[vModelText, form.password]]),
						createBaseVNode("button", {
							type: "button",
							class: "toggle-password",
							onClick: _cache[6] || (_cache[6] = ($event) => showPassword.value = !showPassword.value)
						}, toDisplayString(showPassword.value ? "👁️" : "👁️‍🗨️"), 1)
					]),
					errors.password ? (openBlock(), createElementBlock("p", _hoisted_10, toDisplayString(errors.password), 1)) : createCommentVNode("", true)
				]),
				createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [withDirectives(createBaseVNode("input", {
					type: "checkbox",
					id: "remember",
					"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.remember = $event)
				}, null, 512), [[vModelCheckbox, form.remember]]), _cache[12] || (_cache[12] = createBaseVNode("label", { for: "remember" }, "记住我", -1))]), _cache[13] || (_cache[13] = createBaseVNode("a", {
					href: "#",
					class: "forgot-password"
				}, "忘记密码？", -1))]),
				createBaseVNode("button", {
					type: "button",
					class: "login-button",
					onClick: handleLogin,
					disabled: isLoading.value
				}, [!isLoading.value ? (openBlock(), createElementBlock("span", _hoisted_14, "登录")) : (openBlock(), createElementBlock("span", _hoisted_15, "⟳"))], 8, _hoisted_13),
				_cache[14] || (_cache[14] = createStaticVNode("<div class=\"other-login-options\" data-v-ac4c0b3e><div class=\"divider\" data-v-ac4c0b3e><span data-v-ac4c0b3e>或使用以下方式登录</span></div><div class=\"social-login\" data-v-ac4c0b3e><button type=\"button\" class=\"social-button google\" data-v-ac4c0b3e><span class=\"social-icon\" data-v-ac4c0b3e>G</span> Google </button><button type=\"button\" class=\"social-button wechat\" data-v-ac4c0b3e><span class=\"social-icon\" data-v-ac4c0b3e>💬</span> 微信 </button></div></div>", 1))
			])])])]);
		};
	}
});
//#endregion
//#region src/pages/login.vue
if (typeof route_block_default === "function") route_block_default(login_vue_vue_type_script_setup_true_lang_default);
var login_default = /* @__PURE__ */ _plugin_vue_export_helper_default(login_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ac4c0b3e"]]);
//#endregion
export { login_default as default };

//# sourceMappingURL=login-BYAehk05.js.map