import { useEffect, useState } from "react";
import axios from "axios";
import { OrganisateurData } from "../../models";
import OrganisateurProfile from "./organisateur_profile";
import { Default_image } from "../../common/images/default_image";
import { getCloudinaryImgUrl } from "src/services/cloudinary";


const default_image: string = Default_image;

const OrganisateurPart = () => {
  const [organisateurs, setOrganisateurs] = useState<Array<OrganisateurData>>(
    []
  );
  const [changeStatus, setChangeStatus] = useState<boolean>(false);
  const [openMore, setOpenMore] = useState<boolean>(false);
  const [person, setPerson] = useState<OrganisateurData>({
    id: NaN,
    nom: '',
    prenom: '',
    image_profile: '',
    email: '',
    telephone: NaN ,
    cin: '',
    nom_entreprise: '',
    role: '',
    status: NaN,
    adresse: '',
  });

  const response = async () => {
    await axios
      .get(
        "http://localhost/mon_organisateur/organisateurs/getAllOrganisateurs"
      )
      .then((data) => {
        setOrganisateurs(data.data);
      });
  };

  useEffect(() => {
    response();
  }, [changeStatus]);

  const updateStatus = (id: number, status: number, index: number) => {
    axios
      .post(
        `http://localhost/mon_organisateur/organisateurs/changeOrganisateurStatus`,
        { status, id }
      )
      .then((res) => {
        setChangeStatus(!changeStatus);
      });
  };

  const openMoreProfile = (person: OrganisateurData) => {
    setPerson(person);
    setOpenMore(!openMore);
  };

  const closeMoreProfile = () => {
    setOpenMore(!openMore);
  }


  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <OrganisateurProfile person={person} openMore={openMore} setOpenMore={closeMoreProfile} />
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Organisateurs</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {organisateurs.map((person: OrganisateurData, index) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={`${
                                person.image_profile === "default.png"
                                  ? default_image
                                  : getCloudinaryImgUrl(person.image_profile)
                              }`}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {person.nom + " " + person.prenom}
                            </div>
                            <div className="text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {person.nom_entreprise}
                        </div>
                        <div className="text-gray-500">{person.adresse}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            person.status === 0
                              ? "bg-yellow-100 text-yellow-500"
                              : person.status === -1
                              ? "bg-red-100 text-red-500"
                              : "bg-green-100 text-green-500"
                          } `}
                        >
                          {person.status === 0
                            ? "Pending"
                            : person.status === -1
                            ? "Rejected"
                            : "Approved"}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          onClick={() => {
                            updateStatus(person.id, person.status, index);
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          {person.status === 0
                            ? "Accept"
                            : person.status === -1
                            ? "unsuspend"
                            : "Suspend"}
                          <span className="sr-only">, {person.nom}</span>
                        </button>
                        <button
                          onClick={() => {
                            openMoreProfile(person);
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          More Info
                          <span className="sr-only">, {person.nom}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisateurPart;
