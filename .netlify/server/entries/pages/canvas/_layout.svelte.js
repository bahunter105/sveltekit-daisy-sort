import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape } from "../../../chunks/index.js";
import { c as currentUser } from "../../../chunks/pocketbase.js";
import "devalue";
import { a as avatar } from "../../../chunks/avatar-user-circle.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  $$unsubscribe_currentUser();
  return `<div class="${"drawer"}"><input id="${"my-drawer"}" type="${"checkbox"}" class="${"drawer-toggle"}">
  <div class="${"drawer-content"}">
    <div class="${"navbar bg-base-100"}"><div class="${"flex-1"}"><div class="${"navbar-start"}"><label for="${"my-drawer"}" class="${"btn btn-square btn-ghost"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" class="${"inline-block w-6 h-6 stroke-current"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></label></div></div>
      <div class="${"flex-none"}"><div class="${"dropdown dropdown-end"}">${$currentUser ? `<label tabindex="${"0"}" class="${"btn btn-ghost btn-circle avatar online"}"><img${add_attribute("src", avatar, 0)}></label>` : `<label tabindex="${"0"}" class="${"btn btn-ghost btn-circle avatar offline"}"><img${add_attribute("src", avatar, 0)}></label>`}
          <ul tabindex="${"0"}" class="${"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"}">${$currentUser ? `<li class="${"btn text-xs"}">${escape($currentUser.email)}</li>
            <li><form method="${"POST"}" action="${"/logout"}"><button>Log out</button></form></li>` : `<li><a href="${"/login"}">Log in</a></li>
            <li><a href="${"/register"}">Register</a></li>`}</ul></div></div></div>
    ${slots.default ? slots.default({}) : ``}</div>
  <div class="${"drawer-side"}"><label for="${"my-drawer"}" class="${"drawer-overlay"}"></label>
    <ul class="${"menu p-4 w-80 bg-base-100 text-base-content"}">
      
      <li><a href="${"/"}">Home</a></li>
      <li><a href="${"/sorting"}">Sorting Algorithm</a></li></ul></div></div>`;
});
export {
  Layout as default
};
