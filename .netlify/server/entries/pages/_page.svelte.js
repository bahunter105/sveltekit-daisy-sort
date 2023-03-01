import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape } from "../../chunks/index.js";
import { c as currentUser } from "../../chunks/pocketbase.js";
import "devalue";
import { a as avatar } from "../../chunks/avatar-user-circle.js";
const hero = "/_app/immutable/assets/kelly-sikkema-8jjQ4hmCOcM-unsplash-becb0029.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  $$unsubscribe_currentUser();
  return `<div class="${"navbar bg-base-100"}"><div class="${"flex-1"}"><div class="${"navbar-start"}"><div class="${"dropdown"}"><label tabindex="${"0"}" class="${"btn btn-ghost btn-circle"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" class="${"inline-block w-6 h-6 stroke-current"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></label>
      <ul tabindex="${"0"}" class="${"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"}"><li><a href="${"/"}">Home</a></li>
        <li><a href="${"/sorting"}">Matching Algorithm</a></li>
        <li><a href="${"/canvas"}">Zenhance Canvas</a></li></ul></div></div></div>
  <div class="${"flex-none"}"><div class="${"dropdown dropdown-end"}">${$currentUser ? `<label tabindex="${"0"}" class="${"btn btn-ghost btn-circle avatar online"}"><img${add_attribute("src", avatar, 0)}></label>` : `<label tabindex="${"0"}" class="${"btn btn-ghost btn-circle avatar offline"}"><img${add_attribute("src", avatar, 0)}></label>`}
      <ul tabindex="${"0"}" class="${"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"}">
        ${$currentUser ? `<li class="${"btn text-xs"}">${escape($currentUser.email)}</li>
        <li><form method="${"POST"}" action="${"/logout"}"><button>Log out</button></form></li>` : `<li><a href="${"/login"}">Log in</a></li>
        <li><a href="${"/register"}">Register</a></li>`}</ul></div></div></div>

<div class="${"hero min-h-screen"}" style="${"background-image: url(" + escape(hero, true) + ");"}" alt="${"Sorting Photo by Kelly Sikkema on Unsplash"}"><div class="${"hero-overlay bg-opacity-60"}"></div>
    <div class="${"hero-content text-center text-neutral-content"}"><div class="${"flex flex-col w-full border-opacity-50"}"><div class="${"place-items-center"}"><h1 class="${"mb-5 text-5xl font-bold"}">Hi there!</h1>
        <p class="${"mb-5"}">Want to see the NRMP Matching Algorithm in action?</p>
        <a href="${"/sorting"}" class="${"btn btn-primary"}">Check it now</a></div>
      <div class="${"divider"}">OR</div>
      <div class="${"rounded-box place-items-center"}"><p class="${"mb-5"}">Would you like to see the WIP Zenhance canvas?</p>
        <a href="${"/canvas"}" class="${"btn btn-secondary"}">Take a Peak</a></div></div>

      </div></div>`;
});
export {
  Page as default
};
