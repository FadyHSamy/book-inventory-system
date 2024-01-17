"use client";
import ButtonField from "@/components/Button/Button-mui";
import InputField from "@/components/InputField/InputField-mui";
import PasswordField from "@/components/PasswordField/PasswordField-mui";
import { Card, CardContent, InputLabel, Stack, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { useAuth } from "@/Services/auth";
import { registerRequestModel } from "@/Models/Auth/register";
import { useRouter } from "next/navigation";

function SignUp() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { register } = useAuth();

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleRePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRePassword(event.target.value);
  };
  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleRegisterBtn = async () => {
    try {
      if (!(username && password)) {
        console.log("not null");
        return;
      }
      let object: registerRequestModel = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        rePassword: rePassword,
        phoneNumber: phoneNumber,
      };
      const user = await register(object);
      console.log("Registration Completed", user);
      router.push("/sign-in", { scroll: false });
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const styles: Record<string, React.CSSProperties> = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "100vh",
      position: "relative",
    },
    card: {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
      zIndex: 1, // Set a higher z-index for the card to make sure it stays above the footer
    },
    footer: {
      bottom: 0,
      width: "100%",
      zIndex: 0, // Set a lower z-index for the footer to ensure it's behind the card
      left: 0,
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={styles.container}>
        <Card style={styles.card}>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h2" style={{ color: "#FFF" }} className="text-center">
                Sign up
              </Typography>
              <InputLabel style={{ color: "#FFF" }}>New here? Let's get started! Sign up to begin managing your candidates.</InputLabel>
              <InputField placeholder={"First name"} value={firstName} onChange={handleFirstNameChange} type={"text"}></InputField>
              <InputField placeholder={"Last name"} value={lastName} onChange={handleLastNameChange} type={"text"}></InputField>
              <InputField placeholder={"Username"} value={username} onChange={handleUserNameChange} type={"text"}></InputField>
              <PasswordField placeholder={"Password"} value={password} onChange={handlePasswordChange}></PasswordField>
              <PasswordField placeholder={"Re-Password"} value={rePassword} onChange={handleRePasswordChange}></PasswordField>
              <InputField placeholder={"Phone Number"} value={phoneNumber} onChange={handlePhoneNumberChange} type={"text"}></InputField>
              <ButtonField buttonName={"Register"} onClick={handleRegisterBtn}></ButtonField>
            </Stack>
          </CardContent>
        </Card>
        <footer style={styles.footer}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 111" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 44.4L42.6667 53.28C85.3333 62.16 170.667 79.92 256 75.48C341.333 71.04 426.667 44.4 512 26.64C597.333 8.88 682.667 0 768 0C853.333 0 938.667 8.88 1024 24.42C1109.33 39.96 1194.67 62.16 1237.33 73.26L1280 84.36V111H1237.33C1194.67 111 1109.33 111 1024 111C938.667 111 853.333 111 768 111C682.667 111 597.333 111 512 111C426.667 111 341.333 111 256 111C170.667 111 85.3333 111 42.6667 111H0V44.4Z"
              fill="#E5E5E5"
              fillOpacity="0.13"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0L53 4.17052C107 8.34104 213 16.6821 320 30.7977C427 45.2341 533 65.7659 640 69.9364C747 74.1069 853 61.5954 960 57.7457C1067 53.5751 1173 57.7457 1227 59.6705L1280 61.5954V111H1227C1173 111 1067 111 960 111C853 111 747 111 640 111C533 111 427 111 320 111C213 111 107 111 53 111H0V0Z"
              fill="#20DF7F"
              fillOpacity="0.09"
            />
          </svg>
        </footer>
      </div>
    </div>
  );
}

export default SignUp;
