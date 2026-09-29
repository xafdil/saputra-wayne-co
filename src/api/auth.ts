import { backendlessAPI } from "./backendless";

export interface LoginResponse {
  objectId: string;
  email: string;
  userToken: string;
}

export const loginUser = async (email: string, password: string) => {
  const response = await backendlessAPI.post<LoginResponse>("/users/login", {
    login: email,
    password,
  });

  return response.data;
};

export const getUserByEmail = async (email: string) => {
  const response = await backendlessAPI.get(
    `/data/Users?where=email='${email}'`,
  );

  return response.data[0];
};