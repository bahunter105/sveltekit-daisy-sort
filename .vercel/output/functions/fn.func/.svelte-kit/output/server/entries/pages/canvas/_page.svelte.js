import { c as create_ssr_component, o as onDestroy } from "../../../chunks/index3.js";
import "konva";
import "../../../chunks/pocketbase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.organization;
  data.organization.expand.groups;
  data.organization.expand["teams(organization)"];
  onDestroy(() => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div id="${"canvas"}"></div>`;
});
export {
  Page as default
};
