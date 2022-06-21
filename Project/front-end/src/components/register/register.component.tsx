import { NavLink } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <section className="block py-24 leading-7 text-left text-gray-900 bg-white">
      <div className="relative w-full px-8 mx-auto leading-7 text-gray-900 max-w-7xl lg:px-16 xl:px-32">
        <div className="flex flex-col flex-wrap items-center text-left md:flex-row">
          <div className="flex-1 opacity-100 xl:pr-12 transform-none">
            <h1 className="box-border mt-0 text-4xl font-normal tracking-tight text-center text-[#100D3F] sm:text-5xl md:text-4xl lg:text-5xl mb-7 md:text-left">
              Merci pour avoir choisi{" "}
              <span className="text-[#BA9672]">MonOrganisateur</span>.{" "}
            </h1>

            <p className="box-border mt-0 mb-8 text-base font-normal text-center text-gray-500 lg:text-xl md:text-left lg:mb-8">
              Bonne navigation sur notre site.
            </p>

            <div className="box-border leading-7 text-center text-gray-900 md:text-left">
              <NavLink
                to="/register/client"
                className="relative inline-flex items-center justify-center p-4 px-10 py-2.5 mx-2 overflow-hidden font-medium text-[#07051e] transition duration-300 ease-out border-2 border-[#100D3F] rounded-md shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#100D3F] group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-[#100D3F] transition-all duration-300 transform group-hover:translate-x-full ease">
                  Les Utilisateurs
                </span>
                <span className="relative invisible">Button Text</span>
              </NavLink>
              <NavLink
                to="/register/organisateur"
                className="relative inline-flex items-center justify-center p-4 px-10 py-2.5 mx-2 overflow-hidden font-medium text-[#8f7051] transition duration-300 ease-out border-2 border-[#BA9672] rounded-md shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#BA9672] group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-[#BA9672] transition-all duration-300 transform group-hover:translate-x-full ease">
                  Les Organisateurs
                </span>
                <span className="relative invisible">Button Text</span>
              </NavLink>
            </div>
          </div>

          <div className="relative flex justify-center flex-1 w-full px-5 mt-16 leading-7 text-gray-900 md:justify-end md:mt-0">
            {/* Image */}
            <img
              src="https://cdn.devdojo.com/images/november2020/welcome.png"
              className="w-full max-w-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
