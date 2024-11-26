import axios from "axios";
import { useGlobalStore } from "@/stores/useGlobalStore";
import { useCookie } from "#app";

export const checkEmailExists = async (email) => {
  try {
    const response = await axios.get(
      `https://dev.24cases.ru/v1/exists/${email}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error checking email:", error);
    throw error;
  }
};

export const createAccount = async (email, password) => {
  const globalStore = useGlobalStore();
  const tokenCookie = useCookie("AccessToken");

  try {
    const response = await axios.post(
      "https://dev.24cases.ru/v1/auth/register",
      {
        email,
        password,
        role: "User",
      },
    );

    const { token } = response.data;
    tokenCookie.value = token;
    globalStore.setAuthorized(true);
    return response.data;
  } catch (error) {
    console.error("Error creating account:", error);
    throw error;
  }
};

export const login = async (email, password) => {
  const globalStore = useGlobalStore();

  try {
    const response = await axios.post(
      "https://dev.24cases.ru/v1/auth/login",
      { email, password },
      { withCredentials: true },
    );

    globalStore.setAuthorized(true);
    console.log("Login successful, cookies are now handled by the browser.");
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
export const getCurrentUser = async () => {
  try {
    const response = await axios.get("https://dev.24cases.ru/v1/users/me", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching current user:",
      error.response?.data || error.message,
    );
    throw error;
  }
};
