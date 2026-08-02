import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userLoginApi } from "../api/authApi";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);

  const loginForm = async (data) => {
    try {
      let response = await userLoginApi(data);
      localStorage.setItem("accessToken", response.accessToken);
      dispatch(addUser(response));
      toast.success("User Login Successfully");
    } catch (error) {
      console.log("error in login", error);
    }
  };

  const registerForm = (data) => {
    console.log(data);
  };

  return {
    navigate,
    dispatch,
    handleSubmit,
    register,
    reset,
    errors,
    setShowPasswordLogin,
    showPasswordLogin,
    showPasswordRegister,
    setShowPasswordRegister,
    loginForm,
    registerForm,
  };
};
