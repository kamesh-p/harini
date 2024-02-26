/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Heropic1 from "../../public/Farm.png";
import Heropic2 from "../../public/admin.png";

const Projects = () => {
  return (
    <>
      <h2 className="block text-orange-700 my-16 font-extrabold font-sans text-center text-2xl antialiased  leading-snug tracking-normal text-blue-gray-900 mt-10">
        Project Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 ml-20 ">
        <div className="relative flex flex-col mt-6 text-gray-700 bg-gray-100  md bg-clip-border rounded-xl w-80">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <Image src={Heropic2} alt="" layout="fill" className=" " />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 text-center text-yellow-800 font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
              Farm House Admin
            </h5>
            {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Welcome to the 'Farmhouse' admin page, your central hub for
              managing a diverse range of high-quality products. Whether it's
              farm-fresh meat, wholesome dairy products, or delicious food
              items, our admin panel empowers you to oversee and curate the
              finest selection. Streamline inventory, track orders, and keep
              your farm-to-table offerings at their best. Farmhouse admin –
              where quality and convenience meet View
            </p> */}
          </div>
          <div className="p-6 pt-0">
            <a href="https://farm-house-admin-page.vercel.app/" target="_blank">
              <button
                className="align-middle w-full select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-orange-400 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-orange-700/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                Visit
              </button>
            </a>
          </div>
        </div>
        <div className="relative flex flex-col mt-6 text-gray-700 bg-gray-100 shadow-md bg-clip-border rounded-xl w-80">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <Image src={Heropic1} alt="" layout="fill" className=" " />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-center text-yellow-800 text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
              Farm House
            </h5>
            {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              This is the admin page for the Farmhouse website, where you can
              effortlessly add, delete, and review user orders for our range of
              farm-fresh products
            </p> */}
          </div>
          <div className="p-6 pt-0">
            <a href="https://farm-house-ten.vercel.app/" target="_blank">
              <button
                className="align-middle w-full bg-orange-400 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-orange-700/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                Visit
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
