import axios from "axios";
import { useCookie } from "#app";

export const getAccessTokenFromCookies = () => {
  const accessTokenCookie = useCookie("AccessToken");
  return accessTokenCookie.value; // AccessToken from cookies
};

export const getCurrentUser = async () => {
  const accessToken = getAccessTokenFromCookies();

  try {
    const response = await axios.get("https://dev.24cases.ru/v1/users/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
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
