import cookie from "js-cookie";

export const auth = () => {
  const user = cookie.get("user");
  const parsed = user ? JSON.parse(user) : "";
  return parsed;
};

export const login = (user) => {
  cookie.set("user", user, { expires: 7 });
};

export const logout = () => {
  cookie.remove("user");
  window.location.reload();
};

export const register = (user) => {
  cookie.set("user", user, { expires: 7 });
};