import { c as create_ssr_component, o as onDestroy } from "../../../chunks/index.js";
import "konva";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  onDestroy(() => {
  });
  return `<div id="${"canvas"}"></div>`;
});
export {
  Page as default
};
