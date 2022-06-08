import CSS from "csstype";

const style: CSS.Properties = {
  backgroundImage: `url(${"https://cdn.devdojo.com/images/december2020/cta-bg.jpeg"})`,
};

const HomeComponent: React.FC = () => {
  return (
    <>
    <section className="flex flex-col-reverse w-full overflow-hidden bg-white lg:flex-row sm:mx-auto">
    <div className="flex justify-end p-8 bg-gray-100 z-10 bg-opacity-70 -mt-44 mb-20 lg:py-32 lg:px-16 lg:pl-10 lg:w-1/2 lg:mt-0 lg:bg-opacity-100 lg:mb-0 lg:bg-white">
        <div className="flex flex-col items-start justify-center w-full lg:max-w-lg">
            <p className="inline-block px-2 py-1 mb-5 font-medium tracking-wider text-gray-900 uppercase bg-gray-200 rounded-full text-xxs">
                Craft and build your website
            </p>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl lg:text-7xl">
                Building The Foundation
            </h5>
            <p className="py-5 mb-5 text-gray-600 lg:text-xl">
                <span className="font-bold">Our Platform</span> will help you craft and build your next idea. Utilize our
                drag and
                drop components to build the application of your dreams.
            </p>
            <div className="flex items-center">
                <button type="submit" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none">
                    Get started
                </button>
                <a href="/" aria-label="" className="inline-flex items-center text-lg text-gray-900 underline transition-colors duration-200">
                    Learn More
                    <svg className="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div className="relative lg:w-1/2">
        <img src="https://images.unsplash.com/photo-1578554700872-ef0e27c46d37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2934&amp;q=80" alt="Hero" className="object-cover w-full lg:absolute h-80 lg:h-full" />
    </div>
</section>
<section className="flex flex-col w-full bg-black md:flex-row">
    <div className="flex flex-col items-center justify-center w-full p-10 md:w-1/2 lg:p-16 xl:p-24">
        <h2 className="max-w-lg text-4xl font-light leading-tight text-white md:text-3xl lg:text-4xl xl:text-5xl">We have the tools you need to succeed</h2>
        <p className="max-w-lg mt-5 text-xl text-gray-500 md:text-base lg:text-xl">Our powerful and revolutionary tools are designed to help your business thrive.</p>
    </div>

    <div className="w-full md:w-1/2">
        <img src="https://cdn.devdojo.com/images/november2020/tools-bg.jpeg?q=75&amp;auto=format" className="inset-0 object-cover" alt="side content" />
    </div>
</section>
      <section className="relative block py-20 overflow-hidden leading-6 text-left text-indigo-900 bg-white">
        <div className="w-full max-w-2xl px-16 mx-auto leading-6 text-left sm:px-12 md:px-8 xl:px-12">
          <div className="relative w-full px-4 leading-6 text-center xl:flex-grow-0 xl:flex-shrink-0 lg:flex-grow-0 lg:flex-shrink-0">
            <div className="box-border text-sm font-semibold text-gray-700 uppercase">
              hand-crafted components
            </div>
            <h2 className="box-border mx-0 mt-6 mb-0 font-sans text-4xl font-bold leading-tight text-indigo-900 sm:text-5xl md:text-6xl">
              Start Crafting Your Next Great Idea
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="relative px-16 pt-20 pb-32 mx-auto max-w-7xl xl:px-16">
          <svg
            className="relative z-10 w-16 mb-12 text-yellow-300 transform opacity-100 fill-current sm:w-20 -rotate-0 rotate rotate-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 46"
          >
            <defs></defs>
            <g fillRule="nonzero">
              <path d="M46.651 2.666c1.892-.812 1.06-1.401-1.337-1.81A4.827 4.827 0 0044.323 0a3.914 3.914 0 00-.614.64C34.376-.395 11.639.36 8.676 1.976 6.99 1.437 1.364 9.542.344 13.552c-.436.1-.436.632-.12 1.487a.84.84 0 00.1.28v-.05a2.8 2.8 0 00.247.668h.06c2.814 5.749 14.356 19.796 15 20.673l-.149-.158c2.418 2.587 3.963 5.547 6.291 8.17 2.626 2.213 3.478 1.437 3.399-.065 2.784-1.171 3.289-3.73 4.775-5.655 5.608-7.904 14.742-14.651 19.498-22.763a2.347 2.347 0 00-.09-.575c1.725-2.429-.296-9.018-2.704-12.898zM38.25 24.093c-4.38 5.863-12.355 11.432-13.693 18.15-.33-.903-.903-1.75-1.684-2.493C15.987 31.616 10.4 22.828 3.088 14.931c3.101-1.997 3.636-6.021 5.469-8.615l-.09.187.199-.41-.06.13.08-.151c.31-1.051.463-2.123.455-3.198.876.312 1.796.553 2.745.719 10.333-.633 20.805-.144 31.129-.417.198 1.71 1.387 3.514 1.982 5.094 0-.057 0-.122-.08-.18 1.11 2.243.803 4.937 2.616 6.92-2.953 1.337-8.342 8.048-9.283 9.083zM7.5 14.505v-.01.01z"></path>
              <path d="M9.567 12.925c-.022.243.175.468.486.556 0 .065.05.13.08.094l.139-.05h.069c-1.015.233-1.858.754-2.341 1.445.908.243 1.84.436 2.787.578.208.5.484.985.824 1.445v.094-.036c.387.607.763 1.214 1.16 1.814v-.072c.516.816.992 1.64 1.548 2.457.555.817 1.13 1.9 1.736 2.782a.241.241 0 01-.05-.08c1.587 2.169 2.599 4.59 4.444 6.635 3.482 2.002-.536-3.874-1.2-4.777-1.101-1.662-2.232-3.324-3.294-5-.892-1.446-1.845-2.892-2.787-4.337-.149-.354-.298-.65-.446-.925 2.975-.152 5.951-.455 8.927-.513 3.849-.145 7.737 0 11.606 0-.466 1.604-.526 4.025-.992 4.85-.387 3.403-3.968 7.096-2.46 10.37.605-.477 1.029-1.06 1.23-1.692 1.21-4.43 3.918-8.99 3.75-13.535 2.579.03 5.159-.045 7.727-.224 3.65-.853 3.134-2.32-.546-2.349h.218c-2.55.05-5.098.058-7.648.05a27.367 27.367 0 00-3.095-5.181.511.511 0 01-.089-.13c-1.408 1.257.308 3.714 1.597 5.304-4.85 0-9.7 0-14.551.217h.218c-2.113.333-5.168.116-7.53.564.165-.11.255-.265.249-.427a.376.376 0 000-.151c2.48-2.212 7.241-8.166 3.115-6.367l-4.88 6.59zm3.68 3.526a.19.19 0 010 .065.285.285 0 010-.08v.015zM11.5 17.505v-.01z"></path>
              <path d="M14.499 21.55v-.1a.54.54 0 010 .1zM41.874 10c.462-1.423-.366-2.884-2.197-3.876A.87.87 0 0139.522 6c-1.373.757.287 2.644 1.266 3.49.303.209.671.382 1.086.51zM40.5 9.505v-.01z"></path>
            </g>
          </svg>

          <div className="relative z-20">
            <h3 className="text-5xl font-bold leading-tight text-left text-white md:text-6xl lg:text-7xl xl:text-7xl xl:leading-tight">
              Every great design begins with an even greater story...
            </h3>
            <div className="flex flex-col mt-14 sm:flex-row sm:items-center">
              <p className="text-xl font-normal text-left text-yellow-300">
                Use our designs to tell your story
              </p>
              <div className="flex mt-5 space-x-1 sm:mt-1 sm:ml-3">
                <div className="w-10 h-2 bg-yellow-300 rounded-full opacity-100"></div>
                <div className="w-8 h-2 bg-yellow-300 rounded-full opacity-75"></div>
                <div className="w-4 h-2 bg-yellow-300 rounded-full opacity-50"></div>
                <div className="w-3 h-2 bg-yellow-300 rounded-full opacity-25"></div>
                <div className="w-2 h-2 bg-yellow-300 rounded-full opacity-10"></div>
                <div className="w-2 h-2 bg-yellow-300 rounded-full opacity-5"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-24 gap-14 lg:grid-cols-3">
            <div className="flex text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-20 h-20 mr-8 text-yellow-300 stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                <path d="M13 13l9 3l-4 2l-2 4l-3 -9"></path>
                <line x1="3" y1="3" x2="3" y2="3.01"></line>
                <line x1="7" y1="3" x2="7" y2="3.01"></line>
                <line x1="11" y1="3" x2="11" y2="3.01"></line>
                <line x1="15" y1="3" x2="15" y2="3.01"></line>
                <line x1="3" y1="7" x2="3" y2="7.01"></line>
                <line x1="3" y1="11" x2="3" y2="11.01"></line>
                <line x1="3" y1="15" x2="3" y2="15.01"></line>
              </svg>
              <div className="relative space-y-2">
                <h4 className="text-xl font-bold leading-relaxed">
                  140+ hand-crafted designs &amp; templates
                </h4>
                <p className="text-lg text-gray-300">
                  Hundreds of designs to build amazing landing pages for your
                  application.
                </p>
              </div>
            </div>

            <div className="flex text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-20 h-20 mr-8 text-yellow-300 stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 13.5v-7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6m-8 -10h16m-10 -6v11.5m-8 3.5h7m-3 -3l3 3l-3 3"></path>
              </svg>
              <div className="relative space-y-2">
                <h4 className="text-xl font-bold leading-relaxed">
                  Easily import &amp; export into any existing app
                </h4>
                <p className="text-lg text-gray-300">
                  All templates can be easily be exported and imported into any
                  of your applications.
                </p>
              </div>
            </div>

            <div className="flex text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-20 h-20 mr-8 text-yellow-300 stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                <line x1="17" y1="17" x2="17" y2="17.01"></line>
              </svg>
              <div className="relative space-y-2">
                <h4 className="text-xl font-bold leading-relaxed">
                  Customize and modify to make it your own
                </h4>
                <p className="text-lg text-gray-300">
                  Change the text, color, font, and many other aspects to make
                  it your own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative py-24 bg-white bg-bottom bg-cover"
        style={style}
      >
        <div className="absolute inset-0 block w-full h-full opacity-25 bg-gradient-to-br from-transparent via-black to-transparent lg:hidden"></div>
        <div className="flex flex-col items-center justify-between px-10 mx-auto max-w-7xl xl:px-12 lg:flex-row">
          <div className="relative mb-6 lg:mb-0">
            <h2 className="w-full mx-auto mb-2 text-4xl font-extrabold leading-none text-center text-white md:text-5xl xl:text-6xl lg:text-left">
              Designed with you in mind.
            </h2>
            <p className="w-full max-w-3xl mx-auto text-base text-center text-gray-100 xl:text-xl lg:text-left">
              We have hand-crafted the best designs and templates, optimized for
              conversion.
            </p>
          </div>
          <a
            href="#_"
            className="relative flex-shrink-0 px-10 py-5 text-xl font-medium text-center text-white bg-blue-600 rounded-lg lg:text-2xl focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none"
          >
            Sign Up Today
          </a>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
