import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import type { RegisterInputs, RegisterMessage } from "../../../models";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { PhoneIcon } from "../../icons/contact/phone-icon";

const ClientRegisterForm: React.FC = () => {
  const [registerMessage, setRegisterMessage] = useState<RegisterMessage>({
    message: "",
    type: "",
  });

  const navigate = useNavigate();

  const {
    register, // register the input
    handleSubmit, // <- needed to bind the form
    // watch, // to watch the value of a specific input
    formState: { errors }, // to get the form state
  } = useForm<RegisterInputs>();

  const MySwal = withReactContent(Swal);

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    axios
      .post("http://localhost/mon_organisateur/clients/register", data)
      .then((res) => {
        if (!res.data.error) {
          setRegisterMessage({
            message: "Votre compte a été créé avec succès",
            type: "success",
          });

          MySwal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          ).then(() => {
            return setTimeout(() => {
              navigate("/login");
            }, 1000);
          });
          
        } else {
          setRegisterMessage({ message: res.data.error, type: "error" });
        }
        console.log(res);
      });
  };

  // console.log(watch()); // Src: https://react-hook-form.com/get-started/ , watch input value by passing the name of it
  // console.log(errors);

  return (
    <div className="flex md:w-1/2 justify-center pb-10 items-center bg-white mt-12">
      <form className="bg-white mx-5" onSubmit={handleSubmit(onSubmit)}>
        <h3
          className={`font-bold text-xl mb-7 ${
            registerMessage.type === "error" ? "text-red-500" : "text-green-500"
          }`}
        >
          {registerMessage.message}
        </h3>
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
        <div className="flex items-center border-2 py-2 px-3 rounded-md mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="pl-2 w-1/2 outline-none border-none"
            type="text"
            id=""
            placeholder="Nom"
            {...register("nom", { required: "Nom est obligatoire" })}
          />
          <input
            className="pl-2 w-1/2 border-l border-l-slate-300 outline-none "
            id=""
            placeholder="Prenom"
            {...register("prenom", { required: "prenom est obligatoire" })}
          />
        </div>
        <p className="text-red-500">
          {errors.nom?.message}{" "}
          {errors.nom?.message && errors.prenom?.message && " et "}{" "}
          {errors.prenom?.message}
        </p>
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
            className="pl-2 w-full outline-none border-none"
            placeholder="Email Address"
            type="email"
            {...register("email", { required: "Email est obligatoire" })}
          />
        </div>
        <p className="text-red-500">{errors.email?.message}</p>
        <div className="flex items-center border-2 py-2 px-3 rounded-md mt-4">
          <PhoneIcon className="w-4 text-gray-400" />
          <input
            className="pl-2 outline-none border-none"
            type="text"
            id=""
            placeholder="06..."
            {...register("telephone", {
              required: "Numero de telephone est obligatoir",
              pattern: {
                value: /^[0-9]+$/,
                message: "Numero invalide",
              },
            })}
          />
        </div>
        <p className="text-red-500">{errors.telephone?.message}</p>
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
        <input
          type="submit"
          className="block w-full bg-indigo-600 mt-4 py-2 rounded-md text-white font-semibold mb-2 cursor-pointer"
          value="S'inscrire"
        />
        <span className="text-sm ml-2">
          Have an account?{" "}
          <NavLink to="/login" className="text-blue-500">
            Login
          </NavLink>
        </span>
      </form>
    </div>
  );
};

export default ClientRegisterForm;
