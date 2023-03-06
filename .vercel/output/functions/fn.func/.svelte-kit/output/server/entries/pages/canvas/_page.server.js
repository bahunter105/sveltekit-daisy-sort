import { e as error } from "../../../chunks/index.js";
const serializeNonPOJOs = (obj) => {
  return structuredClone(obj);
};
const actions = {
  default: async ({ locals, request }) => {
    const pb = locals.pb;
    const user = locals.user;
    const formData = await request.formData();
    const data = {
      "name": formData.get("name"),
      "goal": formData.get("goal"),
      "organization": user.organization
    };
    await pb.collection("teams").create(data);
    return { success: true };
  }
};
const load = ({ locals }) => {
  const getOrganization = async () => {
    try {
      const user = locals.user;
      const organization = serializeNonPOJOs(await locals.pb.collection("organizations").getOne(user.organization, {
        expand: "creator, groups(organization), teams(organization), teams(organization).roles, users(organization)"
      }));
      return organization;
    } catch (err) {
      console.log("Error: ", err);
      throw error(err.status, err.message);
    }
  };
  return {
    organization: getOrganization()
  };
};
export {
  actions,
  load
};
