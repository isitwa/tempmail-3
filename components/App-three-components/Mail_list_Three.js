import React from "react";
import Link from "next/link";
export default function Mail_list_Three() {
  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-12 gap-[15px] bg-zinc-900 justify-between  p-4">
          <h4 className="text-white text-[14px] col-span-4 md:col-span-3">
            Sender
          </h4>
          <h4 className="text-white text-[14px] col-span-6 md:col-span-7">
            Subject
          </h4>
          <h4 className="text-white text-[14px] col-span-2 text-right">Open</h4>
        </div>
        {/* mail-list */}
        <Link
          href="#"
          className="grid grid-cols-12 gap-[15px] p-4 border-b border-gray-200 items-center bg-white hover:bg-gray-200"
        >
          <div className="flex flex-col col-span-4 md:col-span-3">
            <h4 className="text-gray-900 text-[14px] ">Tony </h4>
            <h4 className="text-gray-900 text-[12px] truncate  overflow-hidden w-[100px] md:w-[110px] md:w-auto">
              tonyadmin@gmail.com
            </h4>
          </div>

          <div className="col-span-6 md:col-span-7">
            <h4 className="text-gray-900 text-[14px]  truncate  overflow-hidden w-[120px] md:w-[300px]">
              Adipisicing officia reprehenderit ipsum qui enim sint
              reprehenderit velit minim eu cupidatat sit.
            </h4>
          </div>

          <div className=" col-span-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[14px] text-gray-900 float-right md:mr-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </Link>
        <Link
          href="#"
          className="grid grid-cols-12 gap-[15px] p-4 border-b border-gray-200 items-center bg-white hover:bg-gray-200"
        >
          <div className="flex flex-col col-span-4 md:col-span-3">
            <h4 className="text-gray-900 text-[14px] ">Tony </h4>
            <h4 className="text-gray-900 text-[12px] truncate  overflow-hidden w-[100px] md:w-[110px] md:w-auto">
              tonyadmin@gmail.com
            </h4>
          </div>

          <div className="col-span-6 md:col-span-7">
            <h4 className="text-gray-900 text-[14px]  truncate  overflow-hidden w-[120px] md:w-[300px]">
              Adipisicing officia reprehenderit ipsum qui enim sint
              reprehenderit velit minim eu cupidatat sit.
            </h4>
          </div>

          <div className=" col-span-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[14px] text-gray-900 float-right md:mr-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
}
