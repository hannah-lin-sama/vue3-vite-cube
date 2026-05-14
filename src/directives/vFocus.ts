import type { Directive } from "vue";

// const vFoucs: Directive = {
//   created(el: HTMLInputElement, binding, vnode, args) {
//     console.log("v-focus created el", el);
//     console.log("v-focus created binding", binding);
//     console.log("v-focus created vnode", vnode);
//     console.log("v-focus created args", args);
//   },
//   beforeMount(el: HTMLInputElement, binding, vnode, args) {
//     console.log("v-focus beforeMount", el);
//   },
//   mounted(el: HTMLInputElement) {
//     el.focus();
//   },
// };

const vFocus: Directive = (el: HTMLInputElement) => { 
  el.focus()
}

export default vFocus;
