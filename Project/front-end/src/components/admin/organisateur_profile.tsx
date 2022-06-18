import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { OrganisateurData } from "../../models";
import { Default_image } from "../../common/images";

import "./organisateur_profile.css";
import { getCloudinaryImgUrl } from "src/services/cloudinary";

const default_image: string = Default_image;

interface OrganisateurProfileProps {
  person?: OrganisateurData;
  openMore: boolean;
  setOpenMore: () => void;
}

const OrganisateurProfile = ({
  person,
  openMore,
  setOpenMore,
}: OrganisateurProfileProps) => {
  return (
    <Transition.Root show={openMore} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenMore}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="openProfile relative bg-white rounded-lg px-4 pt- pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-9">
                <div
                  className="exit cursor-pointer"
                  onClick={() => {
                    setOpenMore();
                  }}
                ></div>
                <div className="gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  <div className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="flex-1 flex flex-col p-8">
                      <img
                        className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                        src={`${
                          person!.image_profile === "default.png"
                            ? default_image
                            : getCloudinaryImgUrl(person!.image_profile)
                        }`}
                        alt=""
                      />
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        {person!.nom + " " + person!.prenom}
                      </Dialog.Title>

                      <dl className="mt-1 flex-grow flex flex-col justify-between">
                        <dt className="sr-only">Title</dt>
                        <dd className="text-gray-500 text-sm">
                          {person!.nom_entreprise}
                        </dd>
                        <dt className="sr-only">Role</dt>
                        <dd className="mt-3">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              person!.status === 0
                                ? "bg-yellow-100 text-yellow-500"
                                : person!.status === -1
                                ? "bg-red-100 text-red-500"
                                : "bg-green-100 text-green-500"
                            } `}
                          >
                            {person!.status === 0
                              ? "Pending"
                              : person!.status === -1
                              ? "Rejected"
                              : "Approved"}
                          </span>
                        </dd>
                        <dt className="sr-only">Adresse</dt>
                        <dd className="mt-3">
                        <p> hello </p>

                        </dd>
                      </dl>
                    </div>
                    <div>
                      <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="w-0 flex-1 flex">
                          <a
                            href={`mailto:${person!.email}`}
                            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                          >
                            <MailIcon
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-3">Email</span>
                          </a>
                        </div>
                        <div className="-ml-px w-0 flex-1 flex">
                          <a
                            href={`tel:${person!.telephone}`}
                            className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                          >
                            <PhoneIcon
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-3">Call</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default OrganisateurProfile;
