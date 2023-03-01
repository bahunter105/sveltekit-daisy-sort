import { r as redirect } from "../../../chunks/index2.js";
const actions = {
  default: async ({ locals }) => {
    locals.pb.authStore.clear();
    locals.user = null;
    throw redirect(303, "/");
  }
};
export {
  actions
};
