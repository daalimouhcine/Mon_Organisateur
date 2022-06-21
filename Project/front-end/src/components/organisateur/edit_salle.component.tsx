import axios from "axios";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SalleInputs, Type } from "src/models";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./add_salle.component.css";

const EditSalle = ({ salle, showUpdate }: any) => {
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
    // reset, // to reset the form
    formState: { errors }, // to get the form state
  } = useForm<SalleInputs>({ defaultValues: salle });

  const MySwal = withReactContent(Swal);

  const onSubmit: SubmitHandler<SalleInputs> = (data) => {
    axios
      .post("http://localhost/mon_organisateur/salles/updateSalle", data)
      .then((res) => {
        if (res.data) {
          MySwal.fire("Vous avez editer la salle !", "👍", "success").then(
            () => {
              handleCloseForm();
              showUpdate();
            }
          );
        }
      });
  };

  const [openForm, setOpenForm] = useState(false);

  const handleCloseForm = () => {
    // reset the form
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
        className="w-full m-1 p-2 text-sm bg-green-400 rounded-md hover:bg-green-500 cursor-pointer"
      >
        edit
      </button>
      <div className="modal">
        <form
          action=""
          className="flex flex-col cursor-default"
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
              {types?.map((type: Type) =>
                type.id === salle.type_id ? (
                  <option key={type.id} selected value={type.id}>
                    {type.nom}
                  </option>
                ) : (
                  <option key={type.id} value={type.id}>
                    {type.nom}
                  </option>
                )
              )}
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

          <input
            type="submit"
            className="block w-full bg-[#BA9672] hover:bg-[#9f7a55] mt-4 py-2 rounded-md text-white font-semibold mb-2 cursor-pointer"
            value="Editer"
          />
        </form>
      </div>
    </div>
  );
};

export default EditSalle;
