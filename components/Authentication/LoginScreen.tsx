import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import {
  setUser,
  setEmail,
  setName,
  setPic,
} from "../../redux/slices/chatSlice";

// Define the type for login data
interface LoginData {
  user: any; // Replace `any` with a more specific type if possible
  email: string;
  name: string;
  pic: string;
}

const LoginScreen: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.chat.user);

  const handleLogin = (loginData: LoginData) => {
    dispatch(setUser(loginData.user));
    dispatch(setEmail(loginData.email));
    dispatch(setName(loginData.name));
    dispatch(setPic(loginData.pic));
  };

  return (
    <></> // Your component UI
  );
};

export default LoginScreen;
