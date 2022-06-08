import { NavLink } from "react-router-dom";

import "./footer.component.css";

const Footer: React.FC = () => {
  return (
    <section className="py-10 bg-black">
      <div className="px-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <a
            href="#_"
            className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg mb-7 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-500 rounded-xxl"
          >
            <svg
              className="w-5 h-5 text-white fill-current"
              viewBox="0 0 39 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.252 1.152C4.184 2.526.454 6.918.061 14.329c1.963-4.049 4.798-5.975 8.503-5.778 2.115.112 3.84 1.295 5.75 2.603 3.11 2.133 6.712 4.601 13.281 3.324 7.068-1.374 10.798-5.766 11.191-13.177-1.963 4.049-4.798 5.975-8.503 5.779-2.115-.113-3.84-1.296-5.75-2.604-3.11-2.133-6.712-4.601-13.281-3.324z"
                fillRule="evenodd"
              ></path>
            </svg>
          </a>

          <div className="flex flex-row justify-center mb-4 -ml-4 -mr-4">
            {" "}
            <a href="_#" className="p-4 text-gray-700 hover:text-gray-400">
              {" "}
              <svg
                className="fill-current"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"></path>
              </svg>{" "}
            </a>{" "}
            <a href="#" className="p-4 text-gray-700 hover:text-gray-400">
              {" "}
              <svg
                className="fill-current"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"></path>
              </svg>{" "}
            </a>{" "}
            <a href="#" className="p-4 text-gray-700 hover:text-gray-400">
              {" "}
              <svg
                className="fill-current"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <circle cx="12.145" cy="3.892" r="1"></circle>
                  <path d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path>
                  <path d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"></path>
                </g>
              </svg>{" "}
            </a>{" "}
          </div>
        </div>
        <div className="flex flex-col justify-between text-center md:flex-row">
          <p className="order-last text-sm leading-tight text-gray-500 md:order-first">
            {" "}
            Crafted with{" "}
            <a href="https://devdojo.com/tails" className="text-white">
              Tails
            </a>
            . Built with ❤️ by our team.{" "}
          </p>
          <ul className="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm">
            <li>
              {" "}
              <a href="#_" className="px-4 text-gray-500 hover:text-white">
                Contact
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#_" className="px-4 text-gray-500 hover:text-white">
                About US
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#_" className="px-4 text-gray-500 hover:text-white">
                FAQ's
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#_" className="px-4 text-gray-500 hover:text-white">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
