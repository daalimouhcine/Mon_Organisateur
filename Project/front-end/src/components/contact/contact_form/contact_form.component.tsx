import "./contact.component.css";

const ContactForm: React.FC = () => {
  return (
    <div className="w-full bg-[#BA9672] min-h-screen h-fit">
      <div className="bg-gradient-to-b bg-[#100D3F] h-96"></div>
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="bg-[#100D3F] w-full shadow rounded p-8 sm:p-12 -mt-72">
          <p className="text-3xl font-bold leading-7 text-center text-white">
            Contactez-moi
          </p>
          <form action="" method="post">
            <div className="md:flex items-center mt-12">
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold leading-none text-gray-300">
                  Nom Complet
                </label>
                <input
                  type="text"
                  className="leading-none text-[#100D3F] p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-300 rounded"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="font-semibold leading-none text-gray-300">
                  Telephone
                </label>
                <input
                  type="email"
                  className="leading-none text-[#100D3F] p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-300 rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-300">
                  Subjet
                </label>
                <input
                  type="text"
                  className="leading-none text-[#100D3F] p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-300 rounded"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none text-gray-300">
                  Message
                </label>
                <textarea className="h-40 text-base leading-none text-[#100D3F] p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-300 border-0 rounded"></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <button className="relative inline-flex items-center justify-center p-4 px-10 py-2.5 mx-2 mt-4 overflow-hidden font-semibold text-[#8f7051] transition duration-300 ease-out border-2 border-[#BA9672] rounded-md shadow-md group">
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
                  Envoyer un message
                </span>
                <span className="relative invisible">Button Text</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
