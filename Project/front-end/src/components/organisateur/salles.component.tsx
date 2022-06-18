import { useEffect, useState } from "react";
import axios from "axios";
import { UserGroupIcon, CakeIcon, CogIcon } from "@heroicons/react/outline";
import AddSalle from "./add_salle.component";
import { OrganisateurData, SalleDetails, SalleInputs } from "src/models";
import { Default_image } from "src/common/images";
import { DotsVerticalIcon, LocationMarkerIcon } from "@heroicons/react/solid";

import "./salles.component.css";
import EditSalle from "./edit_salle.component";
import useLocalStorage from "src/common/hooks/useLocaleStorage";

let default_image = Default_image;

const SallesComponent = () => {
  const [user] = useLocalStorage<OrganisateurData>('user');
  const [addSalle, setAddSalle] = useState(false);
  const addedSalle = () => {
    setAddSalle(!addSalle);
  };

  const [salles, setSalles] = useState<Array<SalleDetails>>();

  const fetchSalles = async () => {
    const response = await axios.post(
      "http://localhost/mon_organisateur/salles/getSallesByOrganisateur" ,  user.id 
    );
    setSalles(response.data);
  };


  useEffect(() => {
    fetchSalles();
  }, [addSalle]);

  const displayOptionsCondition = (e: any) => {
    let postDisplayOptions = e.target.parentElement.parentElement;
    postDisplayOptions.classList.toggle("post-display-options");
  };

  const editSalle = (salle: any) => {
    let data: SalleInputs = {
      salleId: salle.id,
      titre: salle.titre,
      ville: salle.ville,
      address: salle.address,
      nombre_places: salle.nombre_places,
      type_id: salle.type_id,
      description: salle.description,
      prix: salle.prix,
    };
    return data;
  };

  const deleteSalle = (salleId: number) => {
    axios
      .post("http://localhost/mon_organisateur/salles/deleteSalle", salleId)
      .then((response) => {
        addedSalle();
      });
  };

  return (
    <section aria-labelledby="quick-links-title">
      <div className="sm:flex sm:items-center px-5">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <AddSalle
            close={() => {
              addedSalle();
            }}
          />
        </div>
      </div>
      <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {salles &&
          salles.map((salle) => {
            return (
              <div
                key={salle.id}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500"
              >
                <div className="relative mx-auto w-full">
                  <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                    <div className="shadow p-4 rounded-lg bg-white">
                      <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                        <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                          <img
                            className="w-full h-full"
                            src="data:image/png;base64,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"
                            alt=""
                          />
                        </div>

                        <div className="absolute flex justify-center bottom-0 mb-3">
                          <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                            {salle.type === "Salle" && (
                              <p className="flex items-center font-medium text-gray-800">
                                <UserGroupIcon className="w-5 h-5 mx-1" />
                                {salle.nombre_places}
                              </p>
                            )}
                            {salle.type !== "Traiteur" && (
                              <p className="flex items-center font-medium text-gray-800">
                                <CogIcon className="w-5 h-5 mx-1" />
                              </p>
                            )}
                            {salle.type !== "Momawil" && (
                              <p className="flex items-center font-medium text-gray-800">
                                <CakeIcon className="w-5 h-5 mx-1" />
                              </p>
                            )}
                          </div>
                        </div>

                        <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                          {salle.type}
                        </span>
                        <div
                          className="w-8 y-8 absolute top-0 right-0 mt-3 mr-3 z-10 gridml-auto cursor-pointer text-black option"
                          onClick={(e) => {
                            displayOptionsCondition(e);
                          }}
                        >
                          <DotsVerticalIcon className=" rounded-md hover:opacity-80 hover:shadow-xl text-white shadow-slate-900 transition-all" />
                          <div className="options flex absolute flex-col">
                            <EditSalle salle={editSalle(salle)} showUpdate={addedSalle} />
                            <button
                              className="m-1 p-2 text-sm bg-red-400 rounded-md hover:bg-red-500"
                              onClick={() => {
                                deleteSalle(salle.id);
                              }}
                            >
                              delete
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h2
                          className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                          title="New York"
                        >
                          {salle.titre}
                        </h2>
                        <p
                          className="mt-2 flex text-sm text-gray-800 line-clamp-1"
                          title="New York, NY 10004, United States"
                        >
                          <LocationMarkerIcon className="w-5 h-5 mr-1" />
                          {salle.address}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 my-4">
                        <p className="text-xs font-medium text-gray-600">
                          {" "}
                          {salle.description}{" "}
                        </p>
                      </div>

                      <div className="grid grid-cols-2">
                        <div className="flex items-center">
                          <div className="relative">
                            <img
                              className="w-6 h-6 md:w-8 md:h-8  rounded-full"
                              src={`${
                                salle.image_profile === "default.png"
                                  ? default_image
                                  : "https://firebasestorage.googleapis.com/v0/b/mon-organisateur.appspot.com/o/Orga%2person.image_profile?alt=media"
                              }`}
                              alt=""
                            />
                            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                          </div>

                          <p className="ml-2 text-gray-800 line-clamp-1">
                            {salle.nom + " " + salle.prenom}
                          </p>
                        </div>

                        <div className="flex justify-end">
                          <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                            <span className="text-sm uppercase">DH.</span>
                            <span className="text-lg">{salle.prix}</span>/Day
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
export default SallesComponent;
