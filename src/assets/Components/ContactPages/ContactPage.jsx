import React from "react";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import ContactHeader from "../ContactHeader.jsx/ContactHeader";

const ContactPage = () => {
  return (
    <main
      className="
    lg:flex
    lg:flex-col
    lg:h-[calc(100vh-72px)]
    lg:justify-end
    lg:items-center
    "
    >
      <ContactHeader />
      <div>
        <section
          className="
      xl:max-w-[1161px]
      mx-auto
      lg:max-w-[900px]
      md:max-w-[600px]
      sm:max-w-[580px]
      max-w-[400px]


      "
        >
          <div
            className="
    lg:flex
    lg:items-end
    lg:justify-between
    lg:flex-row
    flex
    flex-col-reverse
    gap-6
    justify-center
    sm:items-center
    "
          >
            <div
              className="
          flex
          flex-col
          gap-[24px]
          "
            >
              <div
                className="
            flex
            flex-col
            gap-[24px]
            "
              >
                <div
                  className="
            flex
            sm:gap-[32px]
            sm:flex-row
            flex-col
            gap-[20px]
            
            "
                >
                  <button
                    className="
              sm:min-w-[220px]
              px-[18px]
              py-[10px]
            bg-black
            text-white rounded
            flex
            items-center
            justify-center
            gap-2
              "
                  >
                    <MdOutlineMessage className="text-[20px]" />
                    VIA SUPPORT CHAT
                  </button>
                  <button
                    className="
                   min-w-[220px]
              px-[18px]
              py-[10px]
            bg-black
            text-white rounded
            flex
            items-center
            justify-center
            gap-2
              "
                  >
                    <FaPhone className="text-[20px]" />
                    VIA CALL
                  </button>
                </div>

                <button
                  className="
            w-full
          bg-white
          text-black
            border
          border-black
            px-[18px]
            py-[10px]
                  "
                >
                  VIA EMAIL FORM
                </button>
              </div>

              <form action="" className="p-4 flex flex-col gap-[20px]">
                <div
                  className="
              flex
              flex-col
              w-full
              relative
              "
                >
                  <label
                    htmlFor="text"
                    className="absolute top-[-18px] left-[20px] bg-white p-[5px] text-black font-medium font-Poppins "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="text"
                    className="h-[40px] border border-black px-[8px] "
                  />
                </div>
                <div
                  className="
              flex
              flex-col
              w-full
              relative
              "
                >
                  <label
                    htmlFor="text"
                    className="absolute top-[-18px] left-[20px] bg-white p-[5px] text-black font-medium font-Poppins "
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    className="h-[40px] border border-black px-[8px] "
                  />
                </div>
                <div
                  className="
              flex
              flex-col
              w-full
              relative
              "
                >
                  <label
                    htmlFor="text"
                    className="absolute top-[-18px] left-[20px] bg-white p-[5px] text-black font-medium font-Poppins "
                  >
                    TEXT
                  </label>
                  <textarea
                    type="text"
                    name="text"
                    className=" sm:w-[440px] h-[120px] border border-black px-[8px] "
                  />
                </div>
                <div
                  className="
              flex
              justify-end
              "
                >
                  <button
                    className="
              min-w-[220px]
              px-[18px]
              py-[10px]
            bg-black
            text-white rounded
              "
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
            <div className="">
              <img src="/public/img/Service 24_7-pana 1.svg" alt="" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
