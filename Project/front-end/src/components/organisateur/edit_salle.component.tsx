import axios from "axios";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SalleInputs, Type, OrganisateurData, SalleDetails } from "src/models";
import useLocalStorage from "../../common/hooks/useLocaleStorage";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./add_salle.component.css";

const AddSalle = (salle: any) => {
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



  const [user] = useLocalStorage<OrganisateurData>("user");
  const MySwal = withReactContent(Swal);

  const onSubmit: SubmitHandler<SalleInputs> = (data) => {
    let dataInput: SalleInputs = { ...data };

    // change name of the image to start with org_ and add random number to avoid duplicate name and add extension
    let image = dataInput.images[0];
    let imageName: string = image.name;
    let imageExtension = imageName.split(".").pop();
    let newImageName = `salle_${Math.floor(
      Math.random() * 100000
    )}.${imageExtension}`;

    let salleData = {
      ...data,
      organisateur_id: user.id,
      images: newImageName,
    };

    axios
      .post("http://localhost/mon_organisateur/salles/addSalle", salleData)
      .then((res) => {
        if (res.data) {
          handleCloseForm();
          
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
  };

  return (
    <div
      className={`flex align-middle justify-center rounded-md ${
        openForm && "openForm"
      }`}
    >
      {/* <input id="button" type="checkbox" /> */}
      <button
        onClick={() => handleCloseForm()}
        type="button"
        id="label_button"
        className="w-full m-1 p-2 text-sm bg-green-400 rounded-md hover:bg-green-500"
      >
        edit
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
          <div className="flex items-center border-2 py-2 px-3 rounded-md mt-4">
            {/* <svg/> */}
            <input
              className="pl-2 w-full outline-none border-none"
              placeholder="Address"
              type="text"
              {...register("address", { required: "Address est obligatoire" })}
            />
          </div>
          <p className="text-red-500">{errors.address?.message}</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-md mt-4">
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
          <div className="flex items-center border-2 py-2 px-3 rounded-md mt-4">
            {/* <svg/> */}
            <input
              className="pl-2 w-full outline-none border-none"
              placeholder="Prix"
              type="number"
              {...register("prix", { required: "Prix est obligatoire" })}
            />
          </div>
          <p className="text-red-500">{errors.prix?.message}</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-md mt-4">
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
          <textarea
            placeholder="Description"
            {...register("description", {
              required: "Description est obligatoire",
            })}
          />
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
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-md text-white font-semibold mb-2 cursor-pointer"
            value="Ajouter"
          />
        </form>
      </div>
    </div>
  );
};

export default AddSalle;
