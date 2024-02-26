import React from "react";
import "../app/globals.css";

const Footer = () => {
  return (
    <footer className="bg-yellow-800 mt-10 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <p className="text-sm my-5">
            Designed and developed by
            <a className="text-white ml-2 font-extrabold hover:underline">
              Harini S
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
