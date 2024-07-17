import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
import Button from "../Button/Button";
const HeaderNavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggolfunk = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        className="
      sm:flex
      sm:justify-between
      sm:container
      sm:mx-auto
      sm:h-[72px]
      font-Poppins
      sm:items-center
      sm:p-4
      flex
      justify-between
      items-center
      p-4
      relative
      "
      >
        <div
          className="
        sm:min-w-[76px]
        sm:h-[42.75px]
        "
        >
          <img src="/public/img/brand_logo.png" alt="Brand_logo" />
        </div>
        <ul
          className={`sm:flex
        sm:gap-4
        sm:font-semibold
        sm:text-gray-800
        sm:flex-row
        sm:static
        absolute
        top-6
        p-4
        flex
        gap-4
        uppercase
        flex-col
        items-center
        font-semibold
        bg-[#ffffffdb]
        text-black
        ${!isOpen ? "right-[25%]" : "right-[9999px]"}
        `}
        >
          <li className="sm:text-[18px] hover:text-gray-400 cursor-pointer">
            Home
          </li>
          <li className="sm:text-[18px] hover:text-gray-400 cursor-pointer">
            Category
          </li>
          <li className="sm:text-[18px] hover:text-gray-400 cursor-pointer">
            Contact
          </li>
          <li className="sm:text-[18px] hover:text-gray-400 cursor-pointer">
            About
          </li>
          <Button innerText="Log-in" />
        </ul>
      </nav>
      <div
        className={`bg-white sm:h-full ${
          !isOpen ? "h-screen" : "right-[9999px]"
        }`}
      >
        <button
          onClick={toggolfunk}
          className="text-3xl sm:hidden absolute top-5 right-7"
        >
          {isOpen ? <IoIosMenu /> : <IoMdClose />}
        </button>
      </div>
    </>
  );
};

export default HeaderNavBar;
