import axios from "axios";
import { useEffect, useState } from "react";
import useLocalStorage from "src/common/hooks/useLocaleStorage";
import { ClientData, Type } from "src/models";
import NavBar from "./navbar.component";
import {
  CalendarIcon,
  CurrencyDollarIcon,
  DocumentRemoveIcon,
  DownloadIcon,
  LocationMarkerIcon,
  UserIcon,
  UserRemoveIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfReservation from "src/services/generate_pdf.reservation";

const Reservations = () => {
  const { storedValue: user} = useLocalStorage<ClientData>("user");
  const [types, setTypes] = useState<Array<Type>>();

  const getTypes = async () => {
    await axios
      .get("http://localhost/mon_organisateur/salles/getTypes")
      .then((data) => {
        setTypes(data.data);
      });
  };

  const [reservations, setReservations] = useState<any>([]);

  const getReservations = async () => {
    const response = await axios.post(
      "http://localhost/mon_organisateur/reservations/getReservationsByClient",
      user.id
    );
    console.log(response.data);
    setReservations(response.data);
  };

  useEffect(() => {
    getTypes();
    getReservations();
  }, []);

  const MySwal = withReactContent(Swal);

  const deleteReservation = async (id: number) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
            axios
            .post(
              "http://localhost/mon_organisateur/reservations/deleteReservation",
              id
            )
            .then((res) => {
              if (res.data) {
                MySwal.fire(
                  "La reservation a été supprimée avec succès",
                  "👍",
                  "success"
                ).then(() => getReservations());
              } else {
                MySwal.fire(
                  "Une erreur est survenue lors de la suppression de la reservation",
                  "👎",
                  "error"
                );
              }
            });
        }
      })
  };

  return (
    <>
      <NavBar />
      <img src={require("src/common/images/normal-horizontal.png")} className="w-36 mx-auto" alt="" />
      <div className="animatedReservation bg-white shadow overflow-hidden sm:rounded-md ml-[70px] sm:ml-[100px] mr-5 sm:mr-10 mt-[1vh] sm:mt-[6vh]">
        <div role="list" className="divide-y divide-gray-200">
          {reservations.map((reservation: any) => (
            <li key={reservation.id}>
              <div className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {reservation.titre}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {types!.map(
                          (type: any) =>
                            type.id === reservation.type_id && type.nom
                        )}
                      </p>
                    </div>
                    {/* <PDFDownloadLink
                      document={<PdfReservation />}
                      fileName="reservation.pdf"
                    >
                        {({loading}) => (loading ? <p>Loading...</p> : <DownloadIcon className="text-green-500" />)}
                    </PDFDownloadLink> */}

                    {/* <button className="text-green-500">
                      <p>
                        <DownloadIcon className="w-6 h-6" />
                      </p>
                    </button> */}
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <CurrencyDollarIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {reservation.prix}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <LocationMarkerIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {reservation.address}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <UsersIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                        />
                        {reservation.nombre_places}
                        </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <CalendarIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <p>
                        <time dateTime={reservation.date}>
                          {reservation.date}
                        </time>
                      </p>
                    </div>
                    <button
                      className="text-red-500"
                      onClick={() => deleteReservation(reservation.id)}
                    >
                      <p>
                        <DocumentRemoveIcon className="w-6 h-6" />
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reservations;
