import { AxiosError, AxiosResponse } from "axios";
import { jwtDecode, JwtHeader, JwtPayload } from "jwt-decode";
import { post } from "./api";
import { useState } from "react";
import { registerRequestModel } from "@/Models/Auth/register";

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
      throw errorMessage;
    } else {
      console.error("Network error during login:", error.message);
      throw null;
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

  const register = async (registerData: registerRequestModel): Promise<UserInfo | string | null> => {
    try {
      let object: registerRequestModel = {
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        username: registerData.username,
        password: registerData.password,
        rePassword: registerData.rePassword,
        phoneNumber: registerData.phoneNumber,
      };
      const response: AxiosResponse<{ message: string }> = await post("/user/register", {
        firstName: object.firstName,
        lastName: object.lastName,
        username: object.username,
        password: object.password,
        rePassword: object.rePassword,
        phoneNumber: object.phoneNumber,
      });

      return "";
    } catch (error) {
      if (error instanceof AxiosError) {
        throw handleAxiosError(error);
      } else {
        console.error("Unexpected error:", error);
        throw null;
      }
    }
  };

  return { userInfo, login, register };
};
