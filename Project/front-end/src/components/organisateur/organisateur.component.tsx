import { Fragment, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import useLocalStorage from "src/common/hooks/useLocaleStorage";
import { logout } from "../../services/logout";
import { OrganisateurData } from "src/models";
import { Default_image } from "src/common/images/default_image";
import SallesComponent from "./salles.component";
import ClientReservations from "./client.reservations";
import OrgProfile from "./org.profile.component";
import { NavLinks } from "src/models";
import { getCloudinaryImgUrl } from "src/services/cloudinary";

let default_image: string = Default_image;

const OrganisateurHome: React.FC = () => {
  const [user] = useLocalStorage<OrganisateurData>("user");

  const [navigation, setNavigation] = useState<Array<NavLinks>>([
    { name: "Home", component: "SallesComponent", current: true },
    { name: "Profile", component: "OrgProfile", current: false },
  ]);

  const changeNavigationCurrent = (name: string) => {
    navigation.forEach((link) => {
      if (link.name === name) {
        link.current = true;
      } else {
        link.current = false;
      }
    });
    setNavigation([...navigation]);
  };

  const userNavigation = [{ name: "Sign out", href: "#" }];
  const stats = [
    { label: "Vacation days left", value: 12 },
    { label: "Sick days left", value: 4 },
    { label: "Personal days left", value: 2 },
  ];

  let classNames: (...classes: any) => any = function (...classes): any {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <>
      <div className="min-h-full">
        <Popover
          as="header"
          className="pb-24 bg-gradient-to-r from-[#100D3F] to-[#BA9672]"
        >
          {({ open }: any) => (
            <>
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                  {/* Logo */}
                  <div className="absolute left-0 py-5 flex-shrink-0 lg:static">
                    <img
                    className="w-32"
                      src={require("src/common/images/negative-horizontal.png")}
                    alt=""
                    />
                  </div>

                  {/* Right section on desktop */}
                  <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-4 relative flex-shrink-0">
                      <div>
                        <Menu.Button className="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={`${
                              user.image_profile === "default.png"
                                ? default_image
                                : getCloudinaryImgUrl(user.image_profile)
                            }`}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }: any) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                  onClick={() => {
                                    item.name === "Sign out" && logout();
                                  }}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                  <div className="w-full py-5 mt-10 lg:border-t lg:border-white lg:border-opacity-20">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                      {/* Left nav */}
                      <div className="hidden lg:block lg:col-span-2">
                        <nav className="flex space-x-4">
                          {navigation.map((item) => (
                            <div
                              key={item.name}
                              className={classNames(
                                item.current
                                  ? "text-white bg-opacity-20"
                                  : "text-cyan-100",
                                "text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10 cursor-pointer"
                              )}
                              aria-current={item.current ? "page" : undefined}
                              onClick={() => {
                                changeNavigationCurrent(item.name);
                              }}
                            >
                              {item.name}
                            </div>
                          ))}
                        </nav>
                      </div>
                      <div className="px-12 lg:px-0">
                        {/* Search */}
                        {/* <div className="max-w-xs mx-auto w-full lg:max-w-md">
                          <label htmlFor="search" className="sr-only">
                            Search
                          </label>
                          <div className="relative text-white focus-within:text-gray-600">
                            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                              <SearchIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </div>
                            <input
                              id="search"
                              className="block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                              placeholder="Search"
                              type="search"
                              name="search"
                            />
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* Menu button */}
                  <div className="absolute right-0 flex-shrink-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Popover.Button>
                  </div>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div className="lg:hidden">
                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                    >
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                        <div className="pt-3 pb-2">
                          <div className="flex items-center justify-between px-4">
                            <div>
                              <img
                                className="w-32"
                                src={require("src/common/images/normal-horizontal.png")}
                                alt="Workflow"
                              />
                            </div>
                            <div className="-mr-2">
                              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                <span className="sr-only">Close menu</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                          <div className="mt-3 px-2 space-y-1">
                            {navigation.map((item) => (
                              <div
                                key={item.name}
                                className={`block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800 cursor-pointer ${
                                  item.current && "bg-gray-100"
                                }`}
                                onClick={() => {
                                  changeNavigationCurrent(item.name);
                                }}
                              >
                                {item.name}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="pt-4 pb-2">
                          <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={`${
                                  user.image_profile === "default.png"
                                    ? default_image
                                    : getCloudinaryImgUrl(user.image_profile)
                                }`}
                                alt=""
                              />
                            </div>
                            <div className="ml-3 min-w-0 flex-1">
                              <div className="text-base font-medium text-gray-800 truncate">
                                {user.nom + " " + user.prenom}{" "}
                                <span className="text-gray-500 text-sm">
                                  ({user.nom_entreprise})
                                </span>
                              </div>
                              <div className="text-sm font-medium text-gray-500 truncate">
                                {user.email}
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 px-2 space-y-1">
                            {userNavigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800 cursor-pointer"
                                onClick={() => {
                                  item.name === "Sign out" && logout();
                                }}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </>
          )}
        </Popover>
        <main className="-mt-24 pb-8">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-3xl lg:px-8">
            <h1 className="sr-only">Profile</h1>
            {/* Main 3 column grid */}
            <div className="flex flex-col mx-auto w-fit  ">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                {/* Welcome panel */}
                <>
                  <section aria-labelledby="profile-overview-title">
                    <div className="rounded-lg bg-white overflow-hidden shadow">
                      <h2 className="sr-only" id="profile-overview-title">
                        Profile Overview
                      </h2>
                      <div className="bg-white p-6">
                        <div className="sm:flex sm:items-center sm:justify-between">
                          <div className="sm:flex sm:space-x-5">
                            <div className="flex-shrink-0">
                              <img
                                className="mx-auto h-20 w-20 rounded-full"
                                src={`${
                                  user.image_profile === "default.png"
                                    ? default_image
                                    : getCloudinaryImgUrl(user.image_profile)
                                }`}
                                alt=""
                              />
                            </div>
                            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                              <p className="text-sm font-medium text-gray-600">
                              Bienvenue,
                              </p>
                              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                                {user.nom + " " + user.prenom}{" "}
                                <span className="text-gray-500 text-sm">
                                  ({user.nom_entreprise})
                                </span>
                              </p>
                              <p className="text-sm font-medium text-gray-600">
                                {user.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                        {/* {stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="px-6 py-5 text-sm font-medium text-center"
                          >
                            <span className="text-gray-900">{stat.value}</span>{" "}
                            <span className="text-gray-600">{stat.label}</span>
                          </div>
                        ))} */}
                      </div>
                    </div>
                  </section>

                  {navigation[0].current ? (
                    <SallesComponent />
                  ) : navigation[1].current ? (
                    <OrgProfile />
                  ) : (
                    ""
                  )}
                </>
              </div>

              {/* Right column */}
              {/* <div className="grid grid-cols-1 gap-4"> */}
              {/* Recent Hires */}
              {/* <ClientReservations /> */}
              {/* </div> */}
            </div>
          </div>
        </main>
        <footer>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
              <span className="flex flex-row sm:inline">
                &copy;{" "}
                <p className="order-last text-sm leading-tight text-[#BA9672] md:order-first">
                  Built with ❤️ by{" "}
                  <a
                    href="https://portfolio-mouhcine-daali.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#BA9672]"
                  >
                    Mouhcine Daali
                  </a>
                </p>
              </span>{" "}
              <span className="block sm:inline">All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default OrganisateurHome;
