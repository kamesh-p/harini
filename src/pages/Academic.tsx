import React from "react";
import Image from "next/image";
import Heropic from "../../public/Harini.png";

const Academic = () => {
  // Function to calculate star rating based on percentage
  const calculateStars = (percentage: number) => {
    if (percentage === 100) {
      return 5;
    } else if (percentage >= 90) {
      return 4.5;
    } else if (percentage >= 80) {
      return 4;
    } else if (percentage >= 70) {
      return 3.5;
    } else if (percentage >= 60) {
      return 3;
    } else if (percentage >= 50) {
      return 2.5;
    } else if (percentage >= 40) {
      return 2;
    } else if (percentage >= 30) {
      return 1.5;
    } else if (percentage >= 20) {
      return 1;
    } else {
      return 0.5;
    }
  };

  // Sample percentage values (replace these with actual percentages)
  const percentage10th = 100;
  const percentage12th = 87;
  const percentageCollege = 85;

  return (
    <>
      <h2 className="block text-orange-700 font-extrabold font-sans text-center text-2xl antialiased  leading-snug tracking-normal text-blue-gray-900 mt-10">
        Academic Excellence
      </h2>
      <div className="flex  gap-5">
        <div className="w-3/4 mt-20 ml-20">
          {/* Render 10th standard details */}
          <div className="relative flex w-full max-w-[34rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            {/* 10th Standard Title */}
            <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="block text-orange-700 font-extrabold  font-sans text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
                    GK Shetty Vivekananda Vidyalaya
                  </h5>
                  {/* Render stars based on 10th standard percentage */}
                  <div className="flex items-center gap-0 5">
                    {[...Array(calculateStars(percentage10th))].map(
                      (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      )
                    )}
                  </div>
                  <span>- 100%</span>
                </div>
                {/* 10th Standard Details */}
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                  10th Standard
                </p>
              </div>
            </div>
            {/* 10th Standard Description */}
            <div className="p-0 mb-6">
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                In 10th grade, I emerged as the school topper, excelling in
                academics. Additionally, I showcased my talents in throwball,
                classical singing, and Vedic maths, securing top positions in
                competitions.
              </p>
            </div>
          </div>
          {/* Render 12th standard details */}
          <div className="relative flex w-full max-w-[30rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            {/* 12th Standard Title */}
            <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="block font-sans text-orange-700 font-extrabold  text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
                    GK Shetty Vivekananda Vidyalaya
                  </h5>
                  {/* Render stars based on 12th standard percentage */}
                  <div className="flex items-center gap-0 5">
                    {[...Array(calculateStars(percentage12th))].map(
                      (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      )
                    )}
                  </div>
                  <span>- 87%</span>
                </div>
                {/* 12th Standard Details */}
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                  12th Standard
                </p>
              </div>
            </div>
            {/* 12th Standard Description */}
            <div className="p-0 mb-6">
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Continuing my academic excellence, I maintained the position of
                school topper in 12th grade. Alongside, I actively participated
                and excelled in throwball, classical singing, and Vedic maths
                competitions, showcasing a diverse skill set
              </p>
            </div>
          </div>
          {/* Render college details */}
          <div className="relative flex w-full max-w-[40rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            {/* College Title */}
            <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="block text-orange-700 font-extrabold  font-sans text-xl antialiased leading-snug tracking-normal text-blue-gray-900">
                    Meenakshi Sundararajan Engineering college
                  </h5>
                  {/* Render stars based on college percentage */}
                  <div className="flex items-center gap-0 5">
                    {[...Array(calculateStars(percentageCollege))].map(
                      (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      )
                    )}
                    <span> - 85%</span>
                  </div>
                </div>
                {/* College Details */}
                <p className="block mt-1 font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                  College
                </p>
              </div>
            </div>
            {/* College Description */}
            <div className="p-0 mb-6">
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                In college, I distinguished myself as one of the top 5 students
                in my department, achieving a remarkable GPA of 8.47. This
                achievement reflects my dedication, hard work, and academic
                prowess in my chosen field of study.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden  rounded-full border-2 border-transparent">
          <Image src={Heropic} alt="" layout="fill" />
        </div>
      </div>
    </>
  );
};

export default Academic;
