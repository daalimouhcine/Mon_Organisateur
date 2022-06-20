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
                className="inline-block w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-[#100D3F] border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-[#261f72]  hover:border-[#100D3F]  hover:text-white focus-within:bg-[#100D3F]  focus-within:border-[#100D3F] "
              >
                Les Utilisateurs
              </NavLink>
              <NavLink
                to="/register/organisateur"
                className="inline-block w-full px-5 py-3 text-base font-semibold text-white no-underline align-middle border border-transparent border-solid rounded-md cursor-pointer select-none bg-[#BA9672] sm:w-auto hover:bg-[#a7805a] hover:text-white focus-within:bg-[#d8b796]"
              >
                Les Organisateurs
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
