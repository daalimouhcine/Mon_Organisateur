import axios from "axios";
import { useEffect, useState } from "react";
import { SalleDetails } from "src/models";
import NavBar from "./navbar.component";

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

  return (
    <div>
      <NavBar />
      <div className="w-10/12 mx-auto">
        <div className="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-2 py-4 my-6">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-0 sm:col-span-2 text-center hidden sm:block">
              <div className="grid grid-rows-2">
                <div className="inline-block font-medium text-xl">21</div>

                <div className="inline-block font-medium text-sm">Votes</div>
              </div>

              <a
                href="_#"
                className="grid grid-rows-2 mx-auto mb-3 py-1 w-4/5 2lg:w-3/5 rounded-md bg-green-400"
              >
                <div className="inline-block font-medium text-2xl text-white">
                  12
                </div>

                <div className="inline-block font-medium text-white mx-1 text-sm lg:text-md">
                  Answers
                </div>
              </a>

              <div className="grid my-3">
                <span className="inline-block font-bold text-xs">
                  1213 Vews
                </span>
              </div>
            </div>

            <div className="col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0">
              <div className="block sm:hidden">
                <div className="flex flex-wrap">
                  <div className="mr-2">
                    <div className="inline-block font-light capitalize">
                      <i className="uil uil-arrow-circle-up mr-1"></i>
                      <span className="text-sm">21 Votes</span>
                    </div>
                  </div>
                  <div className="mr-2">
                    <div className="inline-block font-light capitalize">
                      <i className="uil uil-check-circle mr-1"></i>
                      <span className="text-sm">21 Answers</span>
                    </div>
                  </div>
                  <div className="mr-2">
                    <div className="inline-block">
                      <i className="uil uil-eye mr-1"></i>
                      <span className="text-sm capitalize font-light">
                        21 Views
                      </span>
                    </div>
                  </div>

                  <div className="mr-2">
                    <div className="inline-block">
                      <i className="uil uil-clock mr-1"></i>
                      <span className="text-sm font-light">
                        a few mins ago ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" justify-between items-center hidden sm:block">
                <span className="font-light text-gray-600">a few min ago</span>
              </div>

              <div className="mt-2">
                <a
                  href="_#"
                  className="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold hover:underline"
                >
                  Praesent at arcu augue. Etiam lectus massa, consequat
                </a>

                <p className="mt-2 text-gray-600 text-sm md:text-md">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta totam totam gul koparam doloremque.
                  Excepturi iste iusto eos enim reprehenderit nisi, accusamus...
                </p>
              </div>

              <div className="grid grid-cols-2 mt-4 my-auto">
                <div className="col-span-12 lg:col-span-8">
                  <a
                    href="_#"
                    className="inline-block rounded-full text-white 
                            bg-red-400 hover:bg-red-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                  >
                    Caching
                  </a>
                  <a
                    href="_#"
                    className="inline-block rounded-full text-white 
                            bg-yellow-400 hover:bg-yellow-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                  >
                    RabbitMQ
                  </a>
                  <a
                    href="_#"
                    className="inline-block rounded-full text-white 
                            bg-green-400 hover:bg-green-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                  >
                    Memcached
                  </a>
                  <a
                    href="_#"
                    className="inline-block rounded-full text-white 
                            bg-blue-400 hover:bg-blue-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                  >
                    Redis
                  </a>
                </div>

                <div className="col-none mr-2 lg:block lg:col-start-9 lg:col-end-12">
                  <a href="_#" className="flex items-center">
                    <img
                      src="https://avatarfiles.alphacoders.com/165/thumb-1920-165285.png"
                      alt="avatar"
                      className="mr-2 w-8 h-8 rounded-full"
                    />

                    <div className="text-gray-600 font-bold text-sm hover:underline">
                      EgoistDeveloper
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
