import { api } from "../../../config/api";

export const userLoginApi = async (credentails) => {
  try {
    const res = await api.post("/auth/login", credentails);
    return res.data;
  } catch (error) {
    console.log("Error in Login API", error);
  }
};

export const hydrateUserApi = async () => {

  const token = localStorage.getItem('accessToken')

  try {
    const res = await api.get("/auth/me", {
      headers: {
          'Authorization': `Bearer ${token}`, 
      }
    });
    return res.data;
  } catch (error) {
    console.log("Error in Login API", error);
  }
}