import axios from "axios";
// const BASE_API_URL = "https://fakestoreapi.com";

axios.defaults.baseURL = "http://localhost/shop/wp-json/wp/v2";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

export async function GetPostsApi() {
  return await axios.get("/posts");
}

export async function GetPagesApi() {
  return await axios.get(`/pages/`);
}

