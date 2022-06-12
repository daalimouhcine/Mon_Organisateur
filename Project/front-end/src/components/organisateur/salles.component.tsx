import { useEffect, useState } from "react";
import axios from "axios";
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  BellIcon,
  CashIcon,
  ClockIcon,
  MenuIcon,
  ReceiptRefundIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import AddSalle from "./add_salle.component";
import { SalleDetail } from "src/models";

const SallesComponent = () => {
  const [addSalle, setAddSalle] = useState(false);
  const addedSalle = () => {
    setAddSalle(!addSalle);
  };

  const [salles, setSalles] = useState<Array<SalleDetail>>();

  const fetchSalles = async () => {
    console.log('fetch');
    const response = await axios.get(
      "http://localhost/mon_organisateur/salles/getSalles"
    );
    setSalles(response.data);
  };

  useEffect(() => {
    fetchSalles();
  }, [addSalle]);

  const actions = [
    {
      icon: ClockIcon,
      name: "Request time off",
      href: "#",
      iconForeground: "text-teal-700",
      iconBackground: "bg-teal-50",
    },
    {
      icon: BadgeCheckIcon,
      name: "Benefits",
      href: "#",
      iconForeground: "text-purple-700",
      iconBackground: "bg-purple-50",
    },
    {
      icon: UsersIcon,
      name: "Schedule a one-on-one",
      href: "#",
      iconForeground: "text-sky-700",
      iconBackground: "bg-sky-50",
    },
    {
      icon: CashIcon,
      name: "Payroll",
      href: "#",
      iconForeground: "text-yellow-700",
      iconBackground: "bg-yellow-50",
    },
    {
      icon: ReceiptRefundIcon,
      name: "Submit an expense",
      href: "#",
      iconForeground: "text-rose-700",
      iconBackground: "bg-rose-50",
    },
    {
      icon: AcademicCapIcon,
      name: "Training",
      href: "#",
      iconForeground: "text-indigo-700",
      iconBackground: "bg-indigo-50",
    },
  ];

  let classNames: (...classes: any) => any = function (...classes): any {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <section aria-labelledby="quick-links-title">
      <div className="sm:flex sm:items-center px-5">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <AddSalle close={() => {addedSalle()}} />
        </div>
      </div>
      <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        <h2 className="sr-only" id="quick-links-title">
          Quick links
        </h2>
        {actions.map((action, actionIdx) => (
          <div
            key={action.name}
            className={classNames(
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === actions.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500"
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "rounded-lg inline-flex p-3 ring-4 ring-white"
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.name}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et
                dolorem. Sit repellendus qui ut at blanditiis et quo et
                molestiae.
              </p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SallesComponent;
