import axios from "axios";
import { useGlobalStore } from "@/stores/useGlobalStore";
import { useCookie } from "#app";
import axiosClient from "~/helper/axiosClient.js";

export const checkEmailExists = async (email) => {
  try {
    const response = await axiosClient.get(`/exists/${email}`);
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
    const response = await axiosClient.post("/auth/register", {
      email,
      password,
      role: "User",
    });

    const { token, user } = response.data;
    tokenCookie.value = token;
    globalStore.setAuthorized(true);
    globalStore.setCurrentUser(user);
    return response.data;
  } catch (error) {
    console.error("Error creating account:", error);
    throw error;
  }
};

export const login = async (email, password) => {
  const globalStore = useGlobalStore();
  const accessTokenCookie = useCookie("AccessToken");
  const refreshTokenCookie = useCookie("RefreshToken");

  try {
    const response = await axiosClient.post(
      "/auth/login",
      { email, password },
      { withCredentials: true },
    );

    const { accessToken, refreshToken } = response.data;

    accessTokenCookie.value = accessToken;
    refreshTokenCookie.value = refreshToken;

    globalStore.setAuthorized(true);

    const currentUser = await getCurrentUser();
    globalStore.setCurrentUser(currentUser);

    console.log("Login successful, current user updated in the store.");
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  const globalStore = useGlobalStore();

  try {
    const response = await axiosClient.get("users/me");
    globalStore.setCurrentUser(response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching current user:",
      error.response?.data || error.message,
    );
    throw error;
  }
};
