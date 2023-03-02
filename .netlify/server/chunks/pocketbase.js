import PocketBase from "pocketbase";
import { w as writable } from "./index3.js";
const pb = new PocketBase("http://104.237.137.240:8090");
const currentUser = writable(pb.authStore.model);
export {
  currentUser as c,
  pb as p
};
