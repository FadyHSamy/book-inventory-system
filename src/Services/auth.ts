import { AxiosError, AxiosResponse } from "axios";
import { jwtDecode, JwtHeader, JwtPayload } from "jwt-decode";
import { post } from "./api";
import { useState } from "react";

interface UserInfo {
  username: string;
  userRole: string;
  status: string;
  iat: number;
  exp: number;
}

export const useAuth = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | void | null>(null);

  const handleAxiosError = (error: AxiosError): string | null => {
    if (error.response) {
      const errorMessage = (error.response.data as { error?: string })?.error || "Unknown error occurred";
      console.error("Error fetching data:", errorMessage);
      return errorMessage;
    } else {
      console.error("Network error during login:", error.message);
      return null;
    }
  };

  const decodeJwtToken = (token: string): UserInfo => {
    // Decode the JWT token using the correct parameter
    return jwtDecode<UserInfo>(token, { header: false });
  };

  const login = async (username: string, password: string): Promise<UserInfo | string | null> => {
    try {
      const response: AxiosResponse<{ token: string }> = await post("/user/login", {
        username,
        password,
      });

      const decodedToken = decodeJwtToken(response.data.token);
      setUserInfo(decodedToken);

      return decodedToken;
    } catch (error) {
      if (error instanceof AxiosError) {
        return handleAxiosError(error);
      } else {
        console.error("Unexpected error:", error);
        return null;
      }
    }
  };

  return { userInfo, login };
};
