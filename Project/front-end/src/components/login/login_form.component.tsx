import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import type { LoginInputs, LoginMessage } from "../../models";

import "./login.component.css";

const LoginForm: React.FC = () => {
  const [loginMessage, setLoginMessage] = useState<LoginMessage>({
    message: "",
    type: "",
  });
  // const [shouldNavigate, setShouldNavigate] = useState<boolean>(false);

  const {
    register, // register the input
    handleSubmit, // <- needed to bind the form
    formState: { errors }, // to get the form state
  } = useForm<LoginInputs>();

  const navigate = useNavigate();

  const requestLogin: SubmitHandler<LoginInputs> = async (data) => {
    await axios.post("http://localhost/mon_organisateur/clients/login", data)
    .then(res => {
      if(res.data.error) {
        setLoginMessage({ message: res.data.error, type: "error" });
      } else {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      }
    });
  };

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    requestLogin(data);
  };

  return (
    <div className="flex md:w-1/2 justify-center pb-10 items-center bg-white mt-12">
      <form className="bg-white mx-5" onSubmit={handleSubmit(onSubmit)}>
        <h3
          className={`font-bold text-xl mb-7 ${
            loginMessage.type === "error" ? "text-red-500" : "text-green-500"
          }`}
        >
          {loginMessage.message}
        </h3>
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
        <div className="flex items-center border-2 py-2 px-3 rounded-md mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <input
            className="pl-2 outline-none border-none"
            placeholder="Email Address"
            type="email"
            {...register("email", { required: "Email est obligatoire" })}
          />
        </div>
        <p className="text-red-500">{errors.email?.message}</p>
        <div className="flex items-center border-2 py-2 px-3 rounded-md mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="pl-2 outline-none border-none"
            type="text"
            id=""
            placeholder="********"
            {...register("mot_de_passe", {
              required: "Mot de passe est obligatoire",
            })}
          />
        </div>
        <p className="text-red-500">{errors.mot_de_passe?.message}</p>
        <input
          type="submit"
          className="block w-full bg-indigo-600 mt-4 py-2 rounded-md text-white font-semibold mb-2 cursor-pointer"
          value="S'inscrire"
        />
        <span className="text-sm ml-2">
          Don't have account?{" "}
          <NavLink to="/register" className="text-blue-500">
            Register
          </NavLink>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
