import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
const hero = "/_app/immutable/assets/kelly-sikkema-8jjQ4hmCOcM-unsplash-becb0029.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"hero min-h-screen"}" style="${"background-image: url(" + escape(hero, true) + ");"}" alt="${"Sorting Photo by Kelly Sikkema on Unsplash"}"><div class="${"hero-overlay bg-opacity-60"}"></div>
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
