import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="loadingContainer fixed w-full h-screen top-0 left-0 z-50 bg-[#BA9672] opacity-20 flex justify-center justify-items-center align-middle">
      <div className="loader loader4">
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
