import axios from "axios";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SalleInputs, Type, OrganisateurData } from "src/models";
import useLocalStorage from "../../common/hooks/useLocaleStorage";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getSignature, cloudinaryInfo, toFormData } from "src/services/cloudinary";


import "./add_salle.component.css";
import LoadingSpinner from "./loading.component";

const AddSalle = (props: any) => {
  const [cloudinaryResponse, setCloudinaryResponse] = useState<any>();

  useEffect(() => {
    getSignature().then((res) => {
      setCloudinaryResponse(res.data);
    });
  }, []);

  const [types, setTypes] = useState<Array<Type>>();
  const response = async () => {
    await axios
      .get("http://localhost/mon_organisateur/salles/getTypes")
      .then((data) => {
        setTypes(data.data);
      });
  };
  useEffect(() => {
    response();
  }, []);

  const {
    register, // register the input
    handleSubmit, // <- needed to bind the form
    // watch, // to watch the value of a specific input
    reset, // to reset the form
    formState: { errors }, // to get the form state
  } = useForm<SalleInputs>();

  const [showLoading, setShowLoading] = useState<boolean>(false);

  const { storedValue: user} = useLocalStorage<OrganisateurData>("user");
  const MySwal = withReactContent(Swal);

  const onSubmit: SubmitHandler<SalleInputs> = async (data) => {
    let dataInput: SalleInputs = { ...data };

    let cloudinaryData = {
      timestamp: cloudinaryResponse.timestamp,
      signature: cloudinaryResponse.signature,
      api_key: cloudinaryInfo.apiKey,
      file: dataInput.images[0],
      folder: cloudinaryInfo.folder,
    };

    setShowLoading(true);
    
    const formData = toFormData(cloudinaryData);
    const url = `https://api.cloudinary.com/v1_1/${cloudinaryInfo.cloudName}/image/upload`;
    const imageData = await axios.post(url, formData).then((res) => res.data);
    const salleImageName = imageData.public_id;

    let salleData = {
      ...data,
      organisateur_id: user.id,
      images: salleImageName,
    };

    axios
      .post("http://localhost/mon_organisateur/salles/addSalle", salleData)
      .then((res) => {
        if (res.data) {
          setShowLoading(false);
          handleCloseForm();
          props.close();
          MySwal.fire(
            "Vous avez ajouter un salle !",
            "Vous pouvez editer la salle dans la liste des salles",
            "success"
          ).then(() => {
            setOpenForm(false);
            return setTimeout(() => {
              // navigate("/login");
            }, 1000);
          });
        }
        console.log(res);
      });
  };

  const [openForm, setOpenForm] = useState(false);

  const handleCloseForm = () => {
    // reset the form
    openForm && reset();
    setOpenForm(!openForm);
  }

  return (
    <div
      className={`flex align-middle justify-center p-3 rounded-md ${
        openForm && "openForm"
      }`}
    >
      { showLoading && <LoadingSpinner /> }
      <button
        onClick={() => handleCloseForm()}
        type="button"
        id="label_button"
        className="inline-flex items-center justify-center cursor-pointer rounded-md border border-transparent bg-[#BA9672] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#a5805b] focus:outline-none focus:ring-2 focus:ring-[#BA9672] focus:ring-offset-2 sm:w-auto"
      >
        Ajouter un service
      </button>
      <div className="modal">
        <form
          action=""
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="user-box">
            {/* <svg/> */}
            <input
              className="pl-2 w-full outline-none border-none"
              placeholder="Titre"
              type="text"
              {...register("titre", { required: "Titre est obligatoire" })}
            />
          </div>
          <p className="text-red-500">{errors.titre?.message}</p>
          <div className="user-box">
            {/* <svg/> */}
            <input
              className="pl-2 w-full outline-none border-none"
              placeholder="Ville"
              type="text"
              {...register("ville", { required: "Ville est obligatoire" })}
            />
          </div>
          <p className="text-red-500">{errors.ville?.message}</p>
          <div className="user-box">
            {/* <svg/> */}
            <input
              className="pl-2 w-full outline-none border-none"
              placeholder="Address"
              type="text"
              {...register("address", { required: "Address est obligatoire" })}
            />
          </div>
          <p className="text-red-500">{errors.address?.message}</p>
          <div className="user-box">
            {/* <svg/> */}
            <input
              className="pl-2 w-full outline-none border-none"
              placeholder="Nombre de places"
              type="number"
              {...register("nombre_places", {
                required: "Nombre de places est obligatoire",
              })}
            />
          </div>
          <p className="text-red-500">{errors.nombre_places?.message}</p>
          <div className="user-box">
            {/* <svg/> */}
            <input
              className="pl-2 w-full outline-none border-none"
              placeholder="Prix"
              type="number"
              {...register("prix", { required: "Prix est obligatoire" })}
            />
          </div>
          <p className="text-red-500">{errors.prix?.message}</p>
          <div className="user-box">
            {/* <svg/> */}
            <select {...register("type_id")}>
              {types?.map((type: Type) => (
                <option key={type.id} value={type.id}>
                  {type.nom}
                </option>
              ))}
            </select>
          </div>
          <p className="text-red-500">{errors.prix?.message}</p>
          <div className="user-box mt-5">
          <textarea
            placeholder="Description"
            {...register("description", {
              required: "Description est obligatoire",
            })}
          />
          </div>
          <p className="text-red-500">{errors.description?.message}</p>
          <div className="mt-6 flex flex-col">
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
                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
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
              {...register("images", {
                required: "images est obligatoire",
              })}
            />
          </div>
          <p className="text-red-500">{errors.images?.message}</p>

          <input
            type="submit"
            className="block w-full bg-[#BA9672] hover:bg-[#BA9672] mt-4 py-2 rounded-md text-white font-semibold mb-2 cursor-pointer"
            value="Ajouter"
          />
        </form>
      </div>
    </div>
  );
};

export default AddSalle;
