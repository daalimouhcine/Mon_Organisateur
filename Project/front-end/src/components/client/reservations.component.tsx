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
} from "@heroicons/react/solid";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfReservation from "src/services/generate_pdf.reservation";

const Reservations = () => {
  const [user] = useLocalStorage<ClientData>("user");
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

  return (
    <>
      <NavBar />
      <div className="animatedReservation bg-white shadow overflow-hidden sm:rounded-md ml-[70px] sm:ml-[100px] mr-5 sm:mr-10 mt-[10vh] sm:mt-[15vh]">
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
                    <PDFDownloadLink
                      document={<PdfReservation />}
                      fileName="reservation.pdf"
                    >
                        {({loading}) => (loading ? <p>Loading...</p> : <DownloadIcon className="text-green-500" />)}
                    </PDFDownloadLink>

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
                    <button className="text-red-500">
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
