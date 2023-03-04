import axios from "axios";
// const BASE_API_URL = "https://fakestoreapi.com";

axios.defaults.baseURL = "http://localhost:5000/api/";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

export async function GetPostsApi() {
  return await axios.get("/posts");
}

export async function GetPagesApi() {
  return await axios.get(`/pages/`);
}

export async function LoginApi({
  phone,
  password,
}: {
  phone: any;
  password: any;
  }) {
  
  return await axios.post(`/auth/login`, { phone, password });
}
