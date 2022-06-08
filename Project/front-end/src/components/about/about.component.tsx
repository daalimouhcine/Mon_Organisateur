const AboutComponent: React.FC = () => {
  return (
    <>
      <section className="relative leading-7 text-gray-900 border-solid h-auto p-6 mx-auto space-y-3 overflow-hidden transform -translate-y-12 bg-white rounded-lg shadow-md  lg:max-w-6xl lg:flex-row lg:space-y-0 lg:space-x-3 flex flex-col-reverse items-center px-10 max-w-7xl">
        <div className="box-border mx-auto border-solid lg:pl-8 max-w-7xl">
          <div className="flex flex-col items-center leading-7 text-gray-900 border-0 border-gray-200 lg:flex-row">
            <div className="box-border flex flex-col justify-center w-full h-full p-8 text-gray-900 border-solid lg:w-1/2 md:p-16 lg:p-0 lg:pl-10 lg:pr-20">
              <h2 className="m-0 text-3xl font-medium leading-tight tracking-tight text-left text-black sm:text-4xl md:text-5xl">
                Why Choose Us
              </h2>
              <p className="mt-2 text-xl text-left border-0 border-gray-200 sm:text-2xl">
                We offer the best features in the industry.
              </p>
              <div className="grid gap-4 mt-8 leading-7 border-0 border-gray-200 sm:mt-10 sm:gap-6 lg:mt-12 lg:gap-8">
                <div className="box-border flex items-start text-gray-900 border-solid">
                  <div className="flex items-center justify-center w-12 h-12 leading-7 bg-blue-600 border-0 border-gray-200 rounded-full">
                    <p className="box-border m-0 text-xl text-white border-solid">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        ></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                    <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black border-solid sm:text-xl md:text-2xl">
                      Automated Tasks
                    </h3>
                    <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">
                      No more wasting time on manual tasks, you can leverage our
                      automated tasks to make your life easier.
                    </p>
                  </div>
                </div>
                <div className="box-border flex items-start text-gray-900 border-solid">
                  <div className="flex items-center justify-center w-12 h-12 leading-7 bg-blue-600 border-0 border-gray-200 rounded-full">
                    <p className="box-border m-0 text-xl text-white border-solid">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        ></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                    <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black border-solid sm:text-xl md:text-2xl">
                      Email Campaigns
                    </h3>
                    <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">
                      Utilize our email campaigns to send your users up-to-date
                      information about your product and services.
                    </p>
                  </div>
                </div>
                <div className="box-border flex items-start text-gray-900 border-solid">
                  <div className="flex items-center justify-center w-12 h-12 leading-7 bg-blue-600 border-0 border-gray-200 rounded-full">
                    <p className="box-border m-0 text-xl text-white border-solid">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                    <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black border-solid sm:text-xl md:text-2xl">
                      Great Support
                    </h3>
                    <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">
                      We offer some of the best support available. Contact us
                      anytime of the day and we'll help you out ASAP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full overflow-hidden leading-7 text-gray-900 border-0 border-gray-200 lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1553484771-047a44eee27a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1234&amp;h=1600&amp;q=80"
                className="object-cover w-full h-full"
                alt="hero"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
