// components/Footer.js

import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-3 gap-4">
        <div className="w-full">
          <img
            src="https://img.4imz.com/media/U5AMBW7A/profile/vedanti-technologies-logo.jpg"
            alt="Logo"
            className="mb-6 mx-auto"
            width="100"
            height="69"
          />
          <p className="text-sm text-justify">
            We are serving our electric control Panel manufacturer, exporter,
            and maintenance service erection, installation work, to major
            Industrial more than 50 companies like Chemical Manufacturer,
            Diamond industry Rolling Mills, Cashew Industries, Mall, and
            Telecommunication.
          </p>
          <div className="social-icons mt-6 flex justify-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              aria-label="Facebook"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              aria-label="Twitter"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              aria-label="Instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              title="Youtube"
              aria-label="Youtube"
            >
              <i className="fa fa-youtube-play"></i>
            </a>
          </div>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-semibold mb-4 text-center">
            Quick Access
          </h4>
          <ul className="list-none text-center">
            <li>
              <a href="https://hencyengineering.com/">Home</a>
            </li>
            <li>
              <a href="https://hencyengineering.com/company-profile/">
                Company Profile
              </a>
            </li>
            {/* ... Add other quick access links */}
          </ul>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-semibold mb-4 text-center">
            Get In Touch
          </h4>
          <ul className="list-none text-center">
            <li className="flex items-center	justify-evenly	">
              <FiPhoneCall />
              <span className="">+91 96623 02994</span>
            </li>
            <li></li>
            <li className="flex items-center	justify-around">
              <HiOutlineLocationMarker size={30} />
              <div className="text-justify">
27, Satsang Estate, Nr Malhar Estate Nr Sai Palace Hotel, S. P Ring Road, Odhav,India,Ahmedabad-382415,Gujarat (India)
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 py-4 text-center">
        <p className="text-sm text-gray-500">
          Copyrights © 2024 All Rights Reserved. Hency Engineering
        </p>
      </div>
    </footer>
  );
};

export default Footer;
