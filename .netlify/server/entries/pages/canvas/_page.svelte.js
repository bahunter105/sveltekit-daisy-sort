import { c as create_ssr_component } from "../../../chunks/index.js";
import "konva";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<div class="${"drawer"}"><input id="${"my-drawer"}" type="${"checkbox"}" class="${"drawer-toggle"}">
  <div class="${"drawer-content"}">
    <label for="${"my-drawer"}" class="${"btn btn-square btn-ghost"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" class="${"inline-block w-6 h-6 stroke-current"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></label>
    <div id="${"canvas"}"></div></div>
  <div class="${"drawer-side"}"><label for="${"my-drawer"}" class="${"drawer-overlay"}"></label>
    <ul class="${"menu p-4 w-80 bg-base-100 text-base-content"}">
      
      <li><a href="${"/"}">Home</a></li>
      <li><a>Sidebar Item 2</a></li></ul></div></div>`;
});
export {
  Page as default
};
