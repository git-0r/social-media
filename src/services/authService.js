import { BASE_URL, token } from "./index";

export const loginService = async (credentials, thunkAPI) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const { accessToken, ...others } = await response.json();
  localStorage.setItem("token", JSON.stringify(accessToken));
  return others;
};

export const signupService = async (credentials, thunkAPI) => {
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const { accessToken, ...others } = await response.json();
  localStorage.setItem("token", JSON.stringify(accessToken));
  return others;
};

export const editProfileService = async ({ _id, formData }) => {
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/user/edit/${_id}`,
    {
      method: "POST",
      headers: {
        Authorization: token(),
      },
      body: formData,
    }
  );
  const data = await res.json();
  return data;
};
