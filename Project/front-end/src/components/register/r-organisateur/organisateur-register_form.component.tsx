import React from "react";
import { useForm } from "react-hook-form";
import { OrganiserRegisterInputs, RegisterMessage } from "../../../models";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Default_image } from '../../../common/images';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import storage from "../../../services/firebase";

import { PhoneIcon } from "../../icons/contact/phone-icon";
import { UserIcon } from "../../icons/user-icon";
import { UserIconAlt } from "../../icons/user-icon-alt";
import { MapPinIcon } from "../../icons/map-pin-icon";
import { HomeIcon } from "../../icons/home-icon";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "../../icons/social";

const MAX_STEPS = 3;

const OrganisateurRegisterForm: React.FC = () => {
  const {
    register,
    // watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<OrganiserRegisterInputs>({ mode: "all" });

  const [formStep, setFormStep] = React.useState(0);

  const handleStepCompletion = () => {
    isValid && setFormStep((cur) => cur + 1);
  };

  const [registerMessage, setRegisterMessage] = React.useState<RegisterMessage>(
    {
      message: "",
      type: "",
    }
  );

  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);

  const RegisterRequest = async (data: Object) => {
    let dataInput: any = { ...data };

    let newImageName: string = "default.png";
    // change name of the image to start with org_ and add random number to avoid duplicate name and add extension

    if (dataInput.image_profile[0] !== undefined) {
      let image = dataInput.image_profile[0];
      let imageName: string = image.name;
      let imageExtension = imageName.split(".").pop();
      newImageName = `org_${Math.floor(
        Math.random() * 100000
      )}.${imageExtension}`;
    }

    let dataOrganisateur = {
      nom: dataInput.nom,
      prenom: dataInput.prenom,
      email: dataInput.email,
      mot_de_passe: dataInput.mot_de_passe,
      telephone: dataInput.telephone,
      cin: dataInput.cin,
      nom_entreprise: dataInput.nom_entreprise,
      image_profile: newImageName,
      adresse: dataInput.adresse,
      facebook: dataInput.facebook,
      twitter: dataInput.twitter,
      instagram: dataInput.instagram,
    };

    await axios
      .post(
        "http://localhost/mon_organisateur/organisateurs/register",
        dataOrganisateur
      )
      .then((res) => {
        if (!res.data.error) {
          // store image in firebase storage
          const storagRef = ref(storage, `Orga/${dataOrganisateur.image_profile}`);
          const uploadTask = uploadBytesResumable(storagRef, dataInput.image_profile[0]);
      
          uploadTask.on(
            "state_changed",
            // (snapshot) => {
            //   // Observe state change events such as progress, pause, and resume
            //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            //   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //   console.log("Upload is " + progress + "% done");
            //   switch (snapshot.state) {
            //     case "paused": // or 'paused'
            //       console.log("Upload is paused");
            //       break;
            //     case "running": // or 'running'
            //       console.log("Upload is running");
            //       break;
            //   }
            // },
            // (error) => {
            //   // Handle unsuccessful uploads
            //   console.log(error);
            // },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
              });
              }
          );   

          setRegisterMessage({
            message: "Votre compte a été créé avec succès",
            type: "success",
          });

          MySwal.fire("Demande est faite avec succes", "Votre demande est encoure de traitment", "success").then(
            () => {
              return setTimeout(() => {
                navigate("/");
              }, 500);
            }
          );
        } else {
          setRegisterMessage({ message: res.data.error, type: "error" });
        }
        console.log(res);
      });
  };

  const handleFormCompletion = (values: any) => {
    // window.alert(JSON.stringify(values, null, 2));
    // setFormStep((cur) => cur + 1);
    RegisterRequest(values);
  };

  let [image, setImage] = React.useState<File | any>( Default_image );

  return (
    <div className=" bg-green-800 w-full h-fit">
      <div className="mx-auto text-center my-10">
        <h1 className="text-white text-5xl font-semibold">
          Welcome to <span className="text-yellow-500">Mon Organisateur</span>
        </h1>
        <p className="text-green-200 mt-2">
          Become a new member in 3 easy steps
        </p>
      </div>
      <div className="max-w-3xl w-full mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        {formStep < 3 && (
          <div className="h-2 w-full bg-gray-200">
            <div
              style={{ width: `${((formStep + 1) / MAX_STEPS) * 100}%` }}
              className="h-full bg-yellow-400"
            ></div>
          </div>
        )}
        <div className="px-16 py-10">
          <h3
            className={`font-bold text-xl mb-7 ${
              registerMessage.type === "error"
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {registerMessage.message}
          </h3>
          {formStep < 3 && (
            <div
              className={`flex ${
                formStep === 0 ? "justify-end" : "justify-between"
              } items-center mb-6 font-medium text-sm`}
            >
              {formStep > 0 && (
                <button
                  onClick={() => setFormStep((cur) => cur - 1)}
                  className="flex items-center text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </button>
              )}
              <p className="">
                Step {formStep + 1} of {MAX_STEPS}
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit(handleFormCompletion)}>
            {formStep >= 0 && (
              <section className={formStep === 0 ? "block" : "hidden"}>
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
            )}
            {formStep >= 1 && (
              <section className={formStep === 1 ? "block" : "hidden"}>
                <h2 className="font-semibold text-3xl mb-8">
                  Contact Informations
                </h2>
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
            )}
            {formStep >= 2 && (
              <section className={formStep === 2 ? "block" : "hidden"}>
                <h2 className="font-semibold text-3xl mb-8">
                  Account Information
                </h2>
                <div className="mt-6 flex flex-col">
                  <div className="mx-auto w-32 h-32 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                    <img
                      id="image"
                      className="object-cover w-full h-32 rounded-full"
                      src={image}
                      alt="profile"
                    />
                  </div>

                  <label
                    htmlFor="fileInput"
                    // type="button"
                    className="cursor-pointer w-fit mx-auto inline-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                        stroke="none"
                      ></rect>
                      <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                    Browse Photo
                  </label>

                  <div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">
                    Click to add profile picture
                  </div>

                  <input
                    id="fileInput"
                    accept="image/*"
                    className="hidden"
                    type="file"
                    {...register("image_profile", {
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                        e.target.files &&
                        setImage(URL.createObjectURL(e.target.files[0])),
                    })}
                  />
                </div>
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
              </section>
            )}
            {formStep >= 3 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">
                  Thank you for signing up!
                </h2>
                <p>You can now log in with your new account</p>
              </section>
            )}
            {formStep < 3 && (
              <button
                disabled={!isValid}
                onClick={formStep === 2 ? undefined : handleStepCompletion}
                type={formStep === 2 ? "submit" : "button"}
                className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400"
              >
                {formStep === 2 ? "Register" : "Next"}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrganisateurRegisterForm;
