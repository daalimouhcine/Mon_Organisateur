import { useEffect, useState } from "react";
import axios from "axios";
import { UserGroupIcon, CakeIcon, CogIcon } from "@heroicons/react/outline";
import AddSalle from "./add_salle.component";
import { OrganisateurData, SalleDetails, SalleInputs } from "src/models";
import { Default_image } from "src/common/images/default_image";
import { DotsVerticalIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { getCloudinaryImgUrl } from "src/services/cloudinary";

import "./salles.component.css";
import EditSalle from "./edit_salle.component";
import useLocalStorage from "src/common/hooks/useLocaleStorage";

let default_image = Default_image;

const SallesComponent = () => {
  const { storedValue: user} = useLocalStorage<OrganisateurData>("user");
  const [addSalle, setAddSalle] = useState(false);
  const addedSalle = () => {
    setAddSalle(!addSalle);
  };

  const [salles, setSalles] = useState<Array<SalleDetails>>();

  const fetchSalles = async () => {
    const response = await axios.post(
      "http://localhost/mon_organisateur/salles/getSallesByOrganisateur",
      user.id
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
          <h1 className="text-xl font-semibold text-gray-900">Salles</h1>
          <p className="mt-2 text-sm text-gray-700">
            Une liste de tous les services de votre compte, avec leur titre,
            leur adresse électronique et leur prix etc...
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
                            src={getCloudinaryImgUrl(salle.images)}
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
                          <DotsVerticalIcon className=" rounded-md hover:opacity-80 bg-gray-100 hover:shadow-xl text-[#100D3F] shadow-slate-900 transition-all" />
                          <div className="options flex absolute flex-col">
                            <EditSalle
                              salle={editSalle(salle)}
                              showUpdate={addedSalle}
                            />
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
                              className="h-auto w-10 md:w-48   rounded-full"
                              src={`${
                                salle.image_profile === "default.png"
                                  ? default_image
                                  : getCloudinaryImgUrl(salle.image_profile)
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
