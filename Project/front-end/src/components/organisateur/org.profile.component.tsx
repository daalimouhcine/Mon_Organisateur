import { HomeIcon, PhoneIcon, UserIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useLocalStorage from "src/common/hooks/useLocaleStorage";
import { Default_image } from "src/common/images/default_image";
import { OrganisateurData, OrganiserRegisterInputs } from "src/models";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MapPinIcon } from "../icons/map-pin-icon";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "../icons/social";
import { getCloudinaryImgUrl } from "src/services/cloudinary";

const default_image = Default_image;

const OrgProfile = () => {
  const { storedValue: user, setValue: setUser} = useLocalStorage<OrganisateurData>("user");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<OrganiserRegisterInputs>({ defaultValues: user });

  const MySwal = withReactContent(Swal);

  const onSubmit = (data: OrganiserRegisterInputs) => {
    axios
      .post(
        "http://localhost/mon_organisateur/organisateurs/updateOrganisateur",
        data
      )
      .then((res) => {
        if (res.data.error) {
          MySwal.fire(res.data.error, "😢", "error");
        } else if (res.data.done) {
          MySwal.fire(res.data.done, "😍", "success").then(() => {
            // console.log(res.data.user);
            setUser(res.data.user);
          });
        }
      });
  };

  // const [image, setImage] = useState<File | any>();

  return (
    <form
      action=""
      className="space-y-8 divide-y divide-gray-200"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <section className="mb-5">
            <h2 className="font-semibold text-3xl mb-8">
            Informations personnelles
            </h2>
            <div className="flex items-center border-2 py-2 px-3 rounded-md mt-4">
              <UserIcon className="h-5 w-5 text-gray-400" />
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
                {...register("prenom", {
                  required: "Prenom est obligatoire",
                })}
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
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                id=""
                placeholder="CIN"
                {...register("cin", {
                  required: "CIN est obligatoire",
                })}
              />
            </div>
            <p className="text-red-500">{errors.cin?.message}</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-md mt-4">
              <MapPinIcon className="h-5 w-5 text-gray-400" />
              <input
                className="pl-2 outline-none border-none"
                type="text"
                id=""
                placeholder="Adresse"
                {...register("adresse", {
                  required: "Adresse est obligatoire",
                })}
              />
            </div>
            <p className="text-red-500">{errors.adresse?.message}</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-md mt-4">
              <HomeIcon className="h-5 w-5 text-gray-400" />
              <input
                className="pl-2 outline-none border-none"
                type="text"
                id=""
                placeholder="Nom de l'entreprise"
                {...register("nom_entreprise", {
                  required: "Nom de l'entreprise est obligatoire",
                })}
              />
            </div>
            <p className="text-red-500">{errors.nom_entreprise?.message}</p>
          </section>

          <section className="mb-5">
            <h2 className="font-semibold text-3xl mb-8">
            Informations de contact
            </h2>
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
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email est obligatoire",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Email invalide",
                  },
                })}
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
              <FacebookIcon className="w-4 text-gray-400" />
              <input
                className="pl-2 outline-none border-none"
                type="text"
                id=""
                placeholder="Facebook"
                {...register("facebook")}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-md mt-4">
              <TwitterIcon className="w-4 text-gray-400" />
              <input
                className="pl-2 outline-none border-none"
                type="text"
                id=""
                placeholder="Twitter"
                {...register("twitter")}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-md mt-4">
              <InstagramIcon className="w-4 text-gray-400" />
              <input
                className="pl-2 outline-none border-none"
                type="text"
                id=""
                placeholder="Instagram"
                {...register("instagram")}
              />
            </div>
          </section>
        </div>
      </div>

      <div className="pt-5">
        <input
          type="submit"
          value="Save"
          className="ml-3 cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
      </div>
    </form>
  );
};

export default OrgProfile;
