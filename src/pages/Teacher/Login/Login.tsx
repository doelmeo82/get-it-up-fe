import React, { useState } from "react";
import Logo from "../../../image/Navbar/logo_main.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/appHooks";
import { loginSchema, loginTeacherSchema } from "../../../schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  updateIsLogged,
  updateUserId,
  updateUserInfo,
} from "../../../store/reducers/authSlice";
import { LocalStorage } from "../../../utils/LocalStorage";
import { login } from "../../../store/actions/auth.action";
interface LoginTeacherProps {
  emailteacher: string;
  passwordteacher: string;
}
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [showPass, setShowPass] = useState(false);
  const handleClick = () => {
    setShowPass(!showPass);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginTeacherProps>({
    defaultValues: {
      emailteacher: "",
      passwordteacher: "",
    },
    resolver: yupResolver(loginTeacherSchema),
  });
  const onSubmit = async (data: LoginTeacherProps) => {
    console.log(data);

    const payload = {
      email: data.emailteacher,
      password: data.passwordteacher,
    };
    const response: any = await dispatch(login(payload));
    console.log("🚀 ~ file: Login.tsx:48 ~ onSubmit ~ response:", response);
    if (response.meta.requestStatus === "rejected") {
      toast({
        title: "Fail Login",
        description: response?.payload?.message,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    }
    if (response.meta.requestStatus === "fulfilled" && response?.payload) {
      if (response?.payload?.error) {
        toast({
          title: "Fail Login",
          description: response?.payload?.message,
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        // dispatch(updateIsLogged(true));
        // dispatch(updateUserId(response?.payload?.data?.infoUser?._id));
        if (
          response?.payload?.data?.infoUser?.roles?.some(
            (item: any) => item?.id === 3
          )
        ) {
          dispatch(updateUserId(response?.payload.data?.infoUser));
          LocalStorage.setUserId(response?.payload.data.infoUser._id);
          dispatch(updateIsLogged(true));
          LocalStorage.setToken(response?.payload.data?.token);
          LocalStorage.setRefreshToken(response?.payload.data?.refreshToken);
          console.log(LocalStorage.getAccessToken());
          dispatch(updateUserInfo(response?.payload.data?.infoUser));
          toast({
            title: "Login succeed",
            description: response?.payload?.message,
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
          setTimeout(() => {
            navigate("/teacher/dashboard");
          }, 1500);
        } else {
          toast({
            title: "Login succeed",
            description: response?.payload?.message,
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
          setTimeout(() => {
            navigate("/admin/student");
          }, 1500);
        }
      }
    }
  };
  return (
    <div className="w-screen h-screen bg-[#FF6636] flex justify-center items-center">
      <form
        className="flex flex-col items-center gap-y-4 w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <img src={Logo} alt="" />
        <div className="text-[30px] font-semibold text-white">
          Hello teachers. Invite teachers to Login
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <span className="text-[14px] font-medium text-white">
              Account Name
            </span>

            <input
              {...register("emailteacher")}
              type="text"
              className="w-full px-[18px] py-[13px] outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-[14px] font-medium text-white">Password</span>
            <div className="flex gap-x-3 bg-white items-center px-[18px] py-[13px]">
              <input
                {...register("passwordteacher")}
                type={showPass ? "text" : "password"}
                className="w-full bg-transparent outline-none"
              />
              {showPass ? (
                <AiFillEyeInvisible
                  className="text-[20px] cursor-pointer"
                  onClick={handleClick}
                />
              ) : (
                <AiFillEye
                  className="text-[20px] cursor-pointer"
                  onClick={handleClick}
                />
              )}
            </div>
          </div>
          <Button type="submit">Login</Button>
          <Button type="button" onClick={() => navigate("/")}>
            Return to Home page
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
