import axios from "axios";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SalleDetail, Type } from 'src/models';

import "./add_salle.component.css";



const AddSalle = () => {
  const [types, setTypes] = useState<Array<Type>>();
  const response = async () => {
    await axios
      .get("http://localhost/mon_organisateur/salles/getTypes")
      .then((data) => {
          console.log(data.data);
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
    formState: { errors }, // to get the form state
  } = useForm<any>();
  
  const onSubmit: SubmitHandler<SalleDetail> = (data) => {
    console.log(data);
    // axios
    //   .post("http://localhost/mon_organisateur/clients/register", data)
    //   .then((res) => {
    //     if (!res.data.error) {
    //       setRegisterMessage({
    //         message: "Votre compte a été créé avec succès",
    //         type: "success",
    //       });

    //       MySwal.fire(
    //         "Vous avez créé un compte !",
    //         "accéder à votre compte",
    //         "success"
    //       ).then(() => {
    //         return setTimeout(() => {
    //           navigate("/login");
    //         }, 1000);
    //       });
    //     } else {
    //       setRegisterMessage({ message: res.data.error, type: "error" });
    //     }
    //     console.log(res);
    //   });
  };

  return (
    <div className="flex align-middle justify-center p-3 rounded-md">
      <input id="button" type="checkbox" />
      <label
        htmlFor="button"
        id="label_button"
        className="inline-flex items-center justify-center cursor-pointer rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
      >
        Add Salle
      </label>
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
              {...register("nombre_places", { required: "Nombre de places est obligatoire" })}
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
                    <option key={type.id} value={type.id}>{type.nom}</option>
                ))}
            </select>
            </div>
            <p className="text-red-500">{errors.prix?.message}</p>
            <textarea
            placeholder="Description"
            {...register("description", { required: "Description est obligatoire" })}
            />
            <p className="text-red-500">{errors.description?.message}</p>
        </form>
      </div>
    </div>
  );
};

export default AddSalle;
