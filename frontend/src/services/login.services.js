import http from "./http-common";
export async function addUser(u) {
  return await http.post("/signup", u);
}

export async function userLogin(loginData) {
  return await http.post("/login", loginData);
}
