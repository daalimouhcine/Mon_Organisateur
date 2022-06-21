import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import type { LoginInputs, LoginMessage } from "../../models";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useLocalStorage from "../../common/hooks/useLocaleStorage";
import { OrganisateurData } from "../../models";

import "./login.component.css";
import { useAppDispatch, useAppSelector } from "src/common/hooks/reduxHooks";
import { setUser } from "src/slices/profile";

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
  const dispatch = useAppDispatch();

  const MySwal = withReactContent(Swal);

  const { setValue } = useLocalStorage<OrganisateurData>("user");

  const requestLogin: SubmitHandler<LoginInputs> = async (data) => {
    await axios
      .post("http://localhost/mon_organisateur/admins/login", data)
      .then((res) => {
        if (res.data.user) {
          let user = res.data.user;
          dispatch(setUser(user));
          setValue(user);
          navigate("/");
        } else if (res.data.type) {
          setLoginMessage({ message: res.data.error, type: "error" });
        } else {
          axios
            .post("http://localhost/mon_organisateur/clients/login", data)
            .then((res) => {
              if (res.data.user) {
                let user = res.data.user;
                dispatch(setUser(user));
                setValue(user);
                navigate("/");
              } else if (res.data.type) {
                setLoginMessage({ message: res.data.error, type: "error" });
              } else {
                axios
                  .post(
                    "http://localhost/mon_organisateur/organisateurs/login",
                    data
                  )
                  .then((res) => {
                    if (res.data.user) {
                      if (res.data.user.status === 0) {
                        MySwal.fire(
                          "Votre compte pas encore activé!",
                          "Nous vous informerons lorsque votre compte est activé",
                          "warning"
                        );
                      } else if (res.data.user.status === -1) {
                        MySwal.fire(
                          "Votre compte est banni!",
                          "Contactez nous pour plus d'information",
                          "error"
                        );
                      } else {
                        let user = res.data.user;
                        dispatch(setUser(user));
                        setValue(user);
                        navigate("/");
                      }
                    } else {
                      setLoginMessage({
                        message: res.data.error,
                        type: "error",
                      });
                    }
                  });
              }
            });
        }
      });
  };

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    requestLogin(data);
  };

  return (
    <div className="flex w-fit h-fit justify-center p-10 items-center bg-white rounded-md m-auto">
      <form className="bg-white mx-5" onSubmit={handleSubmit(onSubmit)}>
        <h3
          className={`font-bold text-xl mb-7 ${
            loginMessage.type === "error" ? "text-red-500" : "text-green-500"
          }`}
        >
          {loginMessage.message}
        </h3>
        <h1 className="text-gray-800 font-bold text-2xl mb-1">
          Bonjour encore !
        </h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Bienvenue</p>
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
            type="password"
            id=""
            placeholder="********"
            {...register("mot_de_passe", {
              required: "Mot de passe est obligatoire",
            })}
          />
        </div>
        <p className="text-red-500">{errors.mot_de_passe?.message}</p>
        <button
          type="submit"
          className="relative block px-5 py-2 mt-4 mb-2 mx-auto overflow-hidden font-semibold text-[#100D3F] bg-[#BA9672] border border-[#BA9672] rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#100D3F] opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#BA9672] ease">
            S'inscrire
          </span>
        </button>
        {/* <input
          type="submit"
          className="block w-full bg-[#100D3F] hover:bg-[#201b6a] mt-4 py-2 rounded-md text-white font-semibold mb-2 cursor-pointer"
          value="S'inscrire"
        /> */}
        <span className="text-sm ml-2">
          Vous n'avez pas de compte ?{" "}
          <NavLink to="/register" className="text-[#BA9672]">
            Registre
          </NavLink>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
