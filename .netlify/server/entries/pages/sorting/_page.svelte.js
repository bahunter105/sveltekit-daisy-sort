import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component } from "../../../chunks/index.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "person" } = $$props;
  let { subject = { name: "Arthur" } } = $$props;
  let { subtitle = "Select Entities in order of preference:" } = $$props;
  let { list = [{ name: "Apple" }, { name: "Orange" }, { name: "Tomato" }] } = $$props;
  let { sort_complete = false } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.subject === void 0 && $$bindings.subject && subject !== void 0)
    $$bindings.subject(subject);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.sort_complete === void 0 && $$bindings.sort_complete && sort_complete !== void 0)
    $$bindings.sort_complete(sort_complete);
  return `<div class="${"card w-40 md:w-52 m-4 p-2 bg-base-100 shadow-xl border lg:w-72"}"><figure>${type === "entity" ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"}"></path></svg>`}</figure>
  <div class="${"card-body"}"><h2 class="${"card-title"}">${escape(subject.name)}</h2>
    ${sort_complete === true ? `${type === "person" ? `<p>Selected Entity:</p>

        ${subject.selected_entity === null ? `<p><strong>None</strong></p>` : `<p><strong>${escape(subject.selected_entity.name)}</strong></p>`}` : `<p>Selected Candidates: </p>
        ${subject.slotted_candidates.length === 0 ? `<p><strong>None</strong></p>` : `<ul class="${"list-decimal"}">${each(subject.slotted_candidates, (list_item) => {
    return `<li><strong>${escape(list_item.name)}</strong></li>`;
  })}</ul>`}`}` : `<p>${escape(subtitle)}</p>
      <ol class="${"list-decimal"}">${each(list, (list_item, i) => {
    return `<li><select class="${"select select-bordered select-xs w-full max-w-xs"}"><option${add_attribute("data-subject", subject.name, 0)}${add_attribute("data-item", null, 0)} value="${""}"></option>${each(list, (list_item2, z) => {
      return `${subject.preferred_list[i] === list_item2 ? `<option selected${add_attribute("data-index", i, 0)}${add_attribute("data-subject", subject.name, 0)}${add_attribute("data-item", list_item2.name, 0)}${add_attribute("value", list_item2.name, 0)}>${escape(list_item2.name)}</option>` : `<option${add_attribute("data-index", i, 0)}${add_attribute("data-subject", subject.name, 0)}${add_attribute("data-item", list_item2.name, 0)}${add_attribute("value", list_item2.name, 0)}>${escape(list_item2.name)}</option>`}`;
    })}</select>
        </li>`;
  })}</ol>`}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots$1) => {
  let sort_complete = false;
  class Candidate {
    constructor(name, preferred_list = [], slotted = false, selected_entity = null) {
      this.name = name;
      this.preferred_list = preferred_list;
      this.slotted = slotted;
      this.selected_entity = selected_entity;
    }
  }
  class Entity {
    constructor(name, slots, preferred_list = [], slotted_candidates = []) {
      this.name = name;
      this.slots = slots;
      this.preferred_list = preferred_list;
      this.slotted_candidates = slotted_candidates;
    }
  }
  const candidate_array = [];
  const arthur = new Candidate("Arthur");
  candidate_array.push(arthur);
  const sunny = new Candidate("Sunny");
  candidate_array.push(sunny);
  const joseph = new Candidate("Joseph");
  candidate_array.push(joseph);
  const latha = new Candidate("Latha");
  candidate_array.push(latha);
  const darrius = new Candidate("Darrius");
  candidate_array.push(darrius);
  const entity_array = [];
  const mercy = new Entity("Mercy", 2, [darrius, joseph]);
  entity_array.push(mercy);
  const city = new Entity("City", 2, [darrius, arthur, sunny, latha, joseph]);
  entity_array.push(city);
  const general = new Entity("General", 2, [darrius, arthur, joseph, latha]);
  entity_array.push(general);
  arthur.preferred_list = [city];
  sunny.preferred_list = [city, mercy];
  joseph.preferred_list = [city, general, mercy];
  latha.preferred_list = [mercy, city, general];
  darrius.preferred_list = [city, mercy, general];
  return `<div class="${"navbar bg-base-100"}"><div class="${"navbar-start"}">
    <a href="${"/"}" class="${"btn btn-ghost normal-case text-xl"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}"></path></svg></a></div>
  <div class="${"navbar-center flex"}"><button class="${"btn btn-success shadow-md"}">Sort</button></div>
  <div style="${"display:none"}" class="${"navbar-center flex"}"><ul class="${"menu menu-horizontal px-1"}"><li><a data-sveltekit-reload href="${"/sorting"}">Refresh</a></li>
      <li><button>Clear</button></li></ul></div>
  <div class="${"navbar-end"}"><a class="${"btn"}" data-sveltekit-reload href="${"/sorting"}">Refresh</a>
    </div></div>

<div class="${"container mx-auto flex flex-wrap lg:flex-nowrap justify-center"}">${each(candidate_array, (candidate) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        type: "person",
        subject: candidate,
        subtitle: "Select Entities in order of preference:",
        list: entity_array,
        sort_complete
      },
      {},
      {}
    )}`;
  })}</div>

<div class="${"flex flex-col"}"><div class="${"divider"}"><button class="${"btn btn-wide btn-success m-4 p-2 shadow-md"}">Run Sorting Algorithm</button></div></div>


<div class="${"container mx-auto flex flex-wrap lg:flex-nowrap justify-center"}">${each(entity_array, (entity) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        type: "entity",
        subject: entity,
        subtitle: "Select Candidates in order of preference:",
        list: candidate_array,
        sort_complete
      },
      {},
      {}
    )}`;
  })}</div>`;
});
export {
  Page as default
};
