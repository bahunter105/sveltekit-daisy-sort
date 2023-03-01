import PocketBase from "pocketbase";
import { w as writable } from "./index3.js";
const PUBLIC_POCKETBASE_URL = "http://127.0.0.1:8090";
const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
const currentUser = writable(pb.authStore.model);
export {
  currentUser as c,
  pb as p
};
