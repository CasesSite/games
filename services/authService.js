import axios from "axios";
import { useGlobalStore } from "@/stores/useGlobalStore";

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
  try {
    const response = await axios.post(
      "https://dev.24cases.ru/v1/auth/register",
      {
        email,
        password,
        role: "User",
      },
    );
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
    const response = await axios.post("https://dev.24cases.ru/v1/auth/login", {
      email,
      password,
    });
    globalStore.setAuthorized(true);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
