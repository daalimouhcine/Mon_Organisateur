import { HomeIcon, PhoneIcon, UserIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import useLocalStorage from "src/common/hooks/useLocaleStorage";
import { Default_image } from "src/common/images";
import { OrganisateurData, OrganiserRegisterInputs } from "src/models";
import { MapPinIcon } from "../icons/map-pin-icon";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "../icons/social";

const default_image = Default_image;

const OrgProfile = () => {
  const [user] = useLocalStorage<OrganisateurData>("user");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<OrganiserRegisterInputs>();

  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Profile
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo
              </label>
              <div className="mt-1 flex items-center">
                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <img
                    className="w-full h-full rounded-full"
                    src={`${
                      user.image_profile === "default.png"
                        ? default_image
                        : "https://firebasestorage.googleapis.com/v0/b/mon-organisateur.appspot.com/o/Orga%2person.image_profile?alt=media"
                    }`}
                    alt=""
                  />
                </span>
                <button
                  type="button"
                  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <section className="mb-5">
            <h2 className="font-semibold text-3xl mb-8">
              Personal Information
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
              Contact Informations
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
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default OrgProfile;
