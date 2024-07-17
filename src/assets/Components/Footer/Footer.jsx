import React from "react";

const Footer = () => {
  return (
    <footer
      className="
    bg-[#0A1535]
    text-white
    font-Poppins
    sm:flex
    sm:flex-col
    sm:gap-[34px]
    sm:p-4
    "
    >
      <h1 className=" text-center p-8 sm:text-left container mx-auto sm:text-[24px]">
        Nike Shoos
      </h1>
      <div
        className="
      sm:flex
      sm:container
      sm:mx-auto
      sm:justify-between
      sm:items-center
      flex
      flex-wrap
      gap-[50px]
      justify-center

      "
      >
        <div
          className="
    
        "
        >
          <ul
            className="
          sm:flex
          sm:flex-col
          sm:gap-2
          sm:text-[18px]
          "
          >
            <li className="uppercase text-gray-500">Resources</li>
            <li>Usage</li>
            <li>Support</li>
            <li>Docs</li>
            <li>Hardware</li>
          </ul>
        </div>
        <div>
          <ul
            className="
          sm:flex
          sm:flex-col
          sm:gap-2
          sm:text-[18px]
          "
          >
            <li className="uppercase text-gray-500">Pricign</li>
            <li>Overview</li>
            <li>Flexible Data</li>
            <li>High Volume</li>
            <li>Enterprise</li>
          </ul>
        </div>
        <div>
          <ul
            className="
          sm:flex
          sm:flex-col
          sm:gap-2
          sm:text-[18px]
          "
          >
            <li className="uppercase text-gray-500">Developers</li>
            <li>Forum</li>
            <li>Project</li>
            <li>Open Source</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div>
          <ul
            className="
          sm:flex
          sm:flex-col
          sm:gap-2
          sm:text-[18px]
          "
          >
            <li className="uppercase text-gray-500">Company</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Partnearships</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <hr className="my-4" />
      <span className="mt-5 container mx-auto text-[14px]">
        @ 2024 Nike Online
      </span>
    </footer>
  );
};

export default Footer;
