/* This example requires Tailwind CSS v2.0+ */

import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:relative">
      <div className="flex-grow flex flex-col">
        <main className="flex-grow flex flex-col bg-white">
          <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 pt-10 sm:pt-16">
              <NavLink to="/" className="inline-flex">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-20 w-auto"
                  src={require("src/common/images/normal-horizontal.png")}
                  alt=""
                />
              </NavLink>
            </div>
            <div className="flex-shrink-0 my-auto py-16 sm:py-32">
              <p className="text-sm font-semibold text-[#BA9672] uppercase tracking-wide">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-[#100D3F] tracking-tight sm:text-5xl">
                Page non trouvée
              </h1>
              <p className="mt-2 text-base text-gray-500">
              Désolé, nous n'avons pas pu trouver la page que vous recherchez.
              </p>
              <div className="mt-6">
                <NavLink
                  to="/"
                  className="text-base font-medium text-[#BA9672] hover:text-indigo-500"
                >
                  Rentrer à la page d'accueil<span aria-hidden="true"> &rarr;</span>
                </NavLink>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0 bg-gray-50">
          <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">
            <nav className="flex space-x-4">
              <NavLink
                to="/contact"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Contact Support
              </NavLink>
              <span
                className="inline-block border-l border-gray-300"
                aria-hidden="true"
              />
              <a
                href="http://twitter.com"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Twitter
              </a>
            </nav>
          </div>
        </footer>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
          alt=""
        />
      </div>
    </div>
  );
};
export default NotFound;
