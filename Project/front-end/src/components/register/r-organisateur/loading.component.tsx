import React from "react";
import "./loading.component.css";

const LoadingSpinner = () => {
  return (
    <div className="loadingContainer fixed w-full h-screen top-0 z-20 bg-[#BA9672] opacity-20 flex justify-center justify-items-center align-middle">
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
