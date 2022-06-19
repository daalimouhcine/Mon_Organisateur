import {
  CakeIcon,
  CogIcon,
  LocationMarkerIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Default_image } from "src/common/images";
import { SalleDetails } from "src/models";
import SalleCalendar from "./calender.component";
import NavBar from "./navbar.component";
import { getCloudinaryImgUrl } from "src/services/cloudinary";


let default_image = Default_image;

const ClientHome = () => {
  const [salles, setSalles] = useState<Array<SalleDetails>>();

  const sallesRequest = async () => {
    const response = await axios.get(
      "http://localhost/mon_organisateur/salles/getSalles"
    );
    setSalles(response.data);
  };

  useEffect(() => {
    sallesRequest();
  }, []);

  const [salleId, setSalleId] = useState<number | null>();

  const [showCalendar, setShowCalendar] = useState(false);
  const toggleCalender = () => {
    setShowCalendar(!showCalendar);
    salleId && setSalleId(null);
  };

  //   const reservations = async () => {
  //     const response = await axios.get("http://localhost/mon_organisateur/reservations/getReservations");
  //   }




  return (
    <div>
      <SalleCalendar showCalendar={showCalendar} closeCalendar={toggleCalender} salleId={salleId} />
      <NavBar />
      <div className="w-10/12 mx-auto">
        {salles &&
          salles.map((salle) => (
            <div key={salle.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-2 py-4 my-6">
              <div className="grid grid-cols-12 gap-3">
                <div className="relative sm:col-span-5 text-center hidden sm:flex ">
                  <div className="flex justify-center relative rounded-lg overflow-hidden h-52 my-auto">
                    <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 h-full w-full">
                      <img
                        className="w-full h-full overflow-hidden"
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

                    <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-1 bg-red-500 text-sm font-medium text-white select-none">
                      {salle.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col col-span-12 sm:col-start-6 sm:col-end-13 px-4 sm:px-2">
                  <div className="relative block sm:hidden">
                    <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                      <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 h-full w-full">
                        <img
                          className="w-full h-full overflow-hidden"
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

                      <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-1 bg-red-500 text-sm font-medium text-white select-none">
                        {salle.type}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2">
                    <p className="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold">
                      {salle.titre}
                    </p>

                    <p className="mt-2 text-gray-600 text-sm md:text-md">
                      {salle.description}
                    </p>
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
                      {salle.ville}, {salle.address}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 mt-4 my-auto">
                    <div className="col-none mr-2 lg:block lg:col-start-9 lg:col-end-12">
                      <a href="_#" className="flex items-center">
                        <img
                          src={`${
                            salle.image_profile === "default.png"
                              ? default_image
                              : getCloudinaryImgUrl(salle.image_profile)
                          }`}
                          alt="avatar"
                          className="mr-2 w-8 h-8 rounded-full"
                        />

                        <div className="text-gray-600 font-bold text-sm hover:underline">
                          {salle.nom_entreprise}
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="w-full flex justify-end">
                    <div className="flex justify-end">
                      <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                        <span className="text-sm uppercase">DH.</span>
                        <span className="text-lg">{salle.prix}</span>/Day
                      </p>
                    </div>
                    <button
                      className="ml-auto w-fit bg-gray-300 px-3 py-1 rounded-sm"
                      onClick={() => {
                        setSalleId(salle.id);
                        toggleCalender();
                      }}
                    >
                      hello
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ClientHome;
