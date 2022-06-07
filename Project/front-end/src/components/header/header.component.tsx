import { useState } from 'react';
import { NavLink } from 'react-router-dom';
  
import './header.component.css';



const Header: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }


  return (
      <section className="relative py-2 bg-gray-900">
          <div className="flex items-center justify-between h-20 px-8 mx-auto max-w-7xl">

              <NavLink to='/' className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-white select-none">
                  tails.
              </NavLink>

              <nav className="items-center justify-center hidden space-x-8 text-gray-200 md:flex">
                  <NavLink to='/' 
                    className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white">
                      <span className="block">Home</span>
                      <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                          <span className="absolute inset-0 inline-block w-full h-full transform border-t-2 border-blue-600" 
                          ></span>
                      </span>
                  </NavLink>
                  <NavLink to='/features'
                   className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white">
                      <span className="block">Features</span>
                      <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                          <span className="absolute inset-0 inline-block w-full h-full transform border-t-2 border-blue-600" 
                          ></span>
                      </span>
                  </NavLink>
                  <NavLink to='/about' x-data="{ hover: false }" 
                   className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white">
                      <span className="block">About</span>
                      <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                          <span className="absolute inset-0 inline-block w-full h-full transform border-t-2 border-blue-600" 
                          ></span>
                      </span>
                  </NavLink>
                  <NavLink to='/contact' x-data="{ hover: false }" 
                   className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white">
                      <span className="block">Contact Us</span>
                      <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                          <span className="absolute inset-0 inline-block w-full h-full transform border-t-2 border-blue-600" 
                          ></span>
                      </span>
                  </NavLink>
                  <div className="w-0 h-5 border border-r border-gray-700"></div>
                  <NavLink to='/login' x-data="{ hover: false }" 
                   className="relative inline-block ml-5 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white">
                      <span className="block">Login</span>
                      <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                          <span className="absolute inset-0 inline-block w-full h-full transform translate-x-0 border-t-2 border-gray-100"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                          <span className="absolute inset-0 inline-block w-full h-full transform border-t-2 border-blue-600" 
                          ></span>
                      </span>
                  </NavLink>
                  <NavLink to='/register' className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm focus:ring-offset-gray-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Register
                  </NavLink>
              </nav>

               {/* Mobile Button */}
              <div className="flex items-center justify-center h-full text-white cursor-pointer md:hidden" onClick={() => toggle()}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
                  </svg>
              </div>

          </div>
      </section>
  );
}

export default Header;