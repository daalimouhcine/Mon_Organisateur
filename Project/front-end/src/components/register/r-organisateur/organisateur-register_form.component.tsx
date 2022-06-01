import React from "react";
import { useForm } from "react-hook-form";
import { OrganiserRegisterInputs } from "../../../models";

const MAX_STEPS = 3;

const OrganisateurRegisterForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<OrganiserRegisterInputs>({ mode: "all" });

  const [formStep, setFormStep] = React.useState(0);

  const handleStepCompletion = () => {
    isValid && setFormStep((cur) => cur + 1);
  };

  const handleFormCompletion = (values: any) => {
    window.alert(JSON.stringify(values, null, 2));
    setFormStep((cur) => cur + 1);
  };

  return (
    <div className=" bg-green-800 w-1/2 h-fit">
      <div className="mx-auto text-center my-10">
        <h1 className="text-white text-5xl font-semibold">
          Welcome to <span className="text-yellow-500">the Club</span>
        </h1>
        <p className="text-green-200 mt-2">
          Become a new member in 3 easy steps
        </p>
      </div>
      <div className="max-w-xl w-full mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        {formStep < 3 && (
          <div className="h-2 w-full bg-gray-200">
            <div
              style={{ width: `${((formStep + 1) / MAX_STEPS) * 100}%` }}
              className="h-full bg-yellow-400"
            ></div>
          </div>
        )}
        <div className="px-16 py-10">
          {formStep < 3 && (
            <div
              className={`flex ${
                formStep === 0 ? "justify-end" : "justify-between"
              } items-center mb-6 font-medium text-sm`}
            >
              {formStep > 0 && (
                <button
                  onClick={() => setFormStep((cur) => cur - 1)}
                  className="flex items-center text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </button>
              )}
              <p className="">
                Step {formStep + 1} of {MAX_STEPS}
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit(handleFormCompletion)}>
            {formStep >= 0 && (
              <section className={formStep === 0 ? "block" : "hidden"}>
                <h2 className="font-semibold text-3xl mb-8">
                  Personal Information
                </h2>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="nom"
                  className="text-input"
                  {...register("nom", { required: "Please type your nom" })}
                />
                {errors.nom && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.nom.message}
                  </p>
                )}
              </section>
            )}
            {formStep >= 1 && (
              <section className={formStep === 1 ? "block" : "hidden"}>
                <h2 className="font-semibold text-3xl mb-8">
                  Billing Information
                </h2>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  className="text-input"
                  {...register("adresse", {
                    required: "adresse est obligatoire",
                  })}
                />
                {errors.adresse && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.adresse.message}
                  </p>
                )}
              </section>
            )}
            {formStep >= 2 && (
              <section className={formStep === 2 ? "block" : "hidden"}>
                <h2 className="font-semibold text-3xl mb-8">
                  Legal Information
                </h2>
                <div className="block mt-6">
                  <input
                    className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                    type="email"
                    {...register("email", {
                      required: "email est obligatoire",
                    })}
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Terms and Conditions
                    </a>
                    .
                  </span>
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="block mt-6">
                  <input
                    className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                    type="checkbox"
                    {...register("cin", { required: "cin est obligatoire" })}
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Privacy Policy
                    </a>
                    .
                  </span>
                  {errors.cin && (
                    <p className="text-red-600 text-sm mt-2">
                      {errors.cin.message}
                    </p>
                  )}
                </div>
              </section>
            )}
            {formStep >= 3 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">
                  Thank you for signing up!
                </h2>
                <p>You can now log in with your new account</p>
              </section>
            )}
            {formStep < 3 && (
              <button
                disabled={!isValid}
                onClick={formStep === 2 ? undefined : handleStepCompletion}
                type={formStep === 2 ? "submit" : "button"}
                className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400"
              >
                Next
              </button>
            )}
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrganisateurRegisterForm;
