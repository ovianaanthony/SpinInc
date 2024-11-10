import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ LoginPopup, setLoginPopup }) => {
  return (
    <>
      {LoginPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setLoginPopup(false)}
                  />
                </div>
              </div>
              {/* form section */}
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Email"
                  className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Senha"
                  className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-green_soft to-dark_green hover:scale-105 duration-200 text-white mr-5 py-1 px-4 rounded-full ">
                    Login
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
