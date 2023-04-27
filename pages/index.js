import Link from "next/link";
import React from "react";
import logo from "../public/images/logo.jpg";
import ads1 from "../public/images/ads1.jpg";
import ads2 from "../public/images/ads2.jpg";
import { FaRandom } from "react-icons/fa";
import blog from "../public/images/image2.jpg";
import { FaFacebook, FaFirefoxBrowser } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillChrome } from "react-icons/ai";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import Mail_list_Three from "@/components/App-three-components/Mail_list_Three";
import Open_Email_Three from "@/components/App-three-components/Open_Email_Three";

const people = [
  { id: 1, name: "Eng" },
  { id: 2, name: "Spanish" },
  { id: 3, name: "Japanese" },
];
const people1 = [
  { id: 1, name: "Tony@gmail.com" },
  { id: 2, name: "Sass@gmail.com" },
  { id: 3, name: "Sunny@gmail.com" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AppThree() {
  const [selected, setSelected] = useState(people[1]);
  const [selected1, setSelected1] = useState(people1[1]);
  const [show, setShow] = React.useState(false);
  return (
    <>
      <header className="flex justify-center py-[30px] bg-zinc-900 gap-5">
        <div className="w-full lg:w-[1536px] px-[15px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <Link href="">
                <FaFacebook className=" text-[15px] md:text-[20px] text-white" />
              </Link>
              <Link href="">
                <AiFillTwitterCircle className=" text-[15px] md:text-[23px] text-white" />
              </Link>
              <Link href="">
                <AiFillChrome className=" text-[15px] md:text-[23px] text-white" />
              </Link>
              <Link href="">
                <FaFirefoxBrowser className=" text-[15px] md:text-[23px] text-white" />
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="w-[150px] md:w-[200px] mx-auto  inline-block"
              >
                <Image src={logo} alt="logo" className="w-full" />
              </Link>
            </div>
            <div>
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-1 md:py-2 pl-3 pr-10 text-left sm:text-sm">
                        <span className="block truncate text-[14px] dark:text-zinc-900">
                          {selected.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400 dark:text-zinc-900"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {people.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "text-white bg-blue-600"
                                    : "text-gray-900",
                                  "relative cursor-default select-none py-2 pl-3 pr-9"
                                )
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "block truncate"
                                    )}
                                  >
                                    {person.name}
                                  </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active ? "text-white" : "text-blue-600",
                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
          </div>
        </div>
      </header>
      <section className="flex justify-center pt-[30px] pb-[60px] bg-zinc-900">
        <div className="w-full lg:w-[1536px] px-[15px]">
          <div className="grid md:grid-cols-12 gap-[30px] md:gap-[20px]">
            <div className="flex justify-center col-span-12 md:col-span-4 ">
              <div className=" w-[300] shrink-0 mx-auto ">
                {/* <Image src={ads1} alt="image" className="w-full" /> */}
                <Image src={ads1} alt="image" className="w-full" />
              </div>
            </div>
            <div className=" col-span-12 md:col-span-4">
              <div className="border border-dashed border-gray-600 p-5">
                <h3 className="text-white text-[14px] md:text-[16px] text-center font-semibold mb-5">
                  Your Temporary Email Address{" "}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="grow">
                    <Listbox value={selected1} onChange={setSelected1}>
                      {({ open1 }) => (
                        <>
                          <div className="relative ">
                            <Listbox.Button className="relative w-full cursor-default rounded-md  text-white text-[16px] p-[15px] bg-gray-700 text-left">
                              <span className="block truncate text-[14px] md:text-[16px]">
                                {selected1.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open1}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {people1.map((person1) => (
                                  <Listbox.Option
                                    key={person1.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "relative cursor-default select-none py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={person1}
                                  >
                                    {({ selected1, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selected1
                                              ? "font-semibold "
                                              : "font-normal  text-[14px] md:text-[16px]",
                                            "block truncate "
                                          )}
                                        >
                                          {person1.name}
                                        </span>

                                        {selected1 ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                  <button
                    type=""
                    className="bg-blue-500 rounded-md text-white w-[50px] h-[50px] text-center relative group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                      />
                    </svg>
                    <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-500 -bottom-[50px] w-[120px] left-[50%] -translate-x-1/2">
                      <div className="block relative">
                        <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-500 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                      </div>

                      <h6 className="text-[16px] text-white">Copy email</h6>
                    </div>
                  </button>
                  <div className="border border-dashed border-white h-[30px] w-[2px]"></div>
                  <button
                    type=""
                    className="bg-gray-800 rounded-md text-white w-[50px] h-[50px] text-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                      />
                    </svg>
                  </button>
                </div>

                {/* on click new button show this code */}
                {show && (
                  <div className="flex gap-2 items-stretch">
                    <div className="grow">
                      <div className="flex flex-col gap-3">
                        <input
                          type="text"
                          placeholder="Enter Username"
                          className="text-white text-[16] bg-gray-700  p-[15px] rounded-md"
                        />
                        <Listbox value={selected1} onChange={setSelected1}>
                          {({ open1 }) => (
                            <>
                              <div className="relative ">
                                <Listbox.Button className="relative w-full cursor-default rounded-md  text-white text-[16px] p-[15px] bg-gray-700 text-left">
                                  <span className="block truncate text-[14px] md:text-[16px]">
                                    {selected1.name}
                                  </span>
                                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                      className="h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Listbox.Button>

                                <Transition
                                  show={open1}
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {people1.map((person1) => (
                                      <Listbox.Option
                                        key={person1.id}
                                        className={({ active }) =>
                                          classNames(
                                            active
                                              ? "text-white bg-indigo-600"
                                              : "text-gray-900",
                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                          )
                                        }
                                        value={person1}
                                      >
                                        {({ selected1, active }) => (
                                          <>
                                            <span
                                              className={classNames(
                                                selected1
                                                  ? "font-semibold "
                                                  : "font-normal  text-[14px] md:text-[16px]",
                                                "block truncate "
                                              )}
                                            >
                                              {person1.name}
                                            </span>

                                            {selected1 ? (
                                              <span
                                                className={classNames(
                                                  active
                                                    ? "text-white"
                                                    : "text-indigo-600",
                                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                                )}
                                              >
                                                <CheckIcon
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </>
                          )}
                        </Listbox>
                        <input
                          type="text"
                          placeholder="Enter Password"
                          className="text-white text-[16] bg-gray-700  p-[15px] rounded-md"
                        />
                      </div>
                    </div>
                    <div className="shrink-0">
                      <div className="flex gap-3 h-full">
                        <div className="h-full  ">
                          <button className="p-[10px] rounded-md bg-thor-400 h-full flex flex-col">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 text-white my-auto"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="h-full flex flex-col ">
                          <div className="border border-dashed border-white h-[30px] w-[2px] my-auto"></div>
                        </div>
                        <div className="h-full ">
                          <button className="p-[10px] rounded-md bg-gray-700 h-full">
                            <FaRandom className="text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2 md:gap-4 mt-5">
                <div>
                  <button
                    type=""
                    className="bg-gray-700 hover:bg-gray-600 w-full text-center py-[10px] flex justify-center rounded-md"
                  >
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 md:w-6 md:h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>

                      <span className="text-white text-[14px] font-medium">
                        Refresh
                      </span>
                    </div>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setShow(!show)}
                    className="bg-gray-700 hover:bg-gray-600 w-full text-center py-[10px] flex justify-center rounded-md"
                  >
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 md:w-6 md:h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>

                      <span className="text-white text-[14px] font-medium">
                        New
                      </span>
                    </div>
                  </button>
                </div>
                <div>
                  <button
                    type=""
                    className="bg-gray-700 hover:bg-gray-600 w-full text-center py-[10px] flex justify-center rounded-md"
                  >
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 md:w-6 md:h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>

                      <span className="text-white text-[14px] font-medium">
                        Delete
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center col-span-12 md:col-span-4">
              <div className="w-[300] shrink-0 mx-auto ">
                {/* <Image src={ads2} alt="image" className="w-full" /> */}
                <Image src={ads1} alt="image" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center py-[60px] bg-gray-100 dark:bg-neutral-800">
        <div className="w-full lg:w-[1536px] px-[15px]">
          <div className="flex justify-center">
            <div className="w-full lg:w-[1023px]  bg-white overflow-hidden rounded-md shadow flex flex-col">
              {/* heading */}
              <Mail_list_Three />
              <Open_Email_Three />

              <div className="flex flex-col h-[500px]">
                <div className="text-center m-auto flex flex-col  p-4">
                  <h4 className="text-gray-400 text-[16px]">No Messages</h4>
                  <p className="text-gray-400 text-[14px]">
                    Waiting for Incoming Messages
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-center py-[60px]">
            <h3 className="text-gray-700 dark:text-white text-[30px] font-semibold">
              Why temporary email?﻿
            </h3>
            <p className="text-gray-700 text-[16px] dark:text-white">
              How do you usually manage to keep your inbox safe from spammers
              while registering on different websites that require a valid email
              address?
            </p>

            <p className="text-gray-700 text-[16px] dark:text-white">
              LuxusMail is a free temp mail service that provides you with free
              disposable email addresses that can be used to register on the
              services and websites that you wish not use your own primary email
              address.
            </p>

            <p className="text-gray-700 text-[16px] dark:text-white">
              So, if are looking for an efficient way to keep your mailbox
              secure from spammers, endless advertising newsletters, and
              attacking robots, use our service for free and create as many
              disposable email addresses as you need.{" "}
            </p>

            <p className="text-gray-700 text-[16px] dark:text-white">
              Anonymous temp mail, free and ready to use instantly without
              registration. Generate unlimited temporary email accounts.
            </p>

            <p className="text-gray-700 text-[16px] dark:text-white">
              LuxusMail, the free temp mail service comes with a clean and neat
              design and the interface is so user-friendly that you will get the
              whole idea as soon as creating your very first mail and use it to
              activate your account on your desired website or service. The
              emails are received in your temporary mailbox immediately, and you
              get to download attachments, videos, photos or any other types of
              files that have been sent to you.
            </p>

            <p className="text-gray-700 text-[16px] dark:text-white">
              Since the entire features of our free temp email service are
              available for free, there is no harm giving it a try and exploring
              the features for yourself. Use LuxusMail for free on any device
              and start generating disposable temporary email addresses with no
              limitations.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-center py-[60px]">
            <h3 className="text-gray-700 dark:text-white text-[24px] font-semibold mb-10">
              Popular Articles
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
              <Link
                href="#"
                className="show flex flex-col relative rounded-md overflow-hidden"
              >
                <h2 className=" bg-black text-white text-[14px] py-[4px] px-[16px] rounded-full absolute z-10 top-[14px] left-[14px]">
                  Temp Mail
                </h2>
                <div className="block h-[240px] overflow-hidden">
                  <Image
                    src={blog}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[8px] bg-white px-[20px] py-[30px] text-center">
                  <h3 className="text-[16px] text-gray-600 font-semibold">
                    A Temporary Email Address for Developers
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    A number Of problems can arise for beginners in web page
                    development and application development. E-mail settings are
                    essential for all aspects Of your application and web pages.
                    This includes user registration. user feedback. mail
                    services, email notifications, sales manager inquiries using
                    mail, and user feedback. Although CMS templates are intended
                    to make it easy to create web pages. they don't guarantee
                    that e-mail services will work correctly. Therefore, the
                    developer must conduct manual functional testing. The
                    developer must manually test the email functions of his
                    website or application in order to activate the user
                    registration module. The developer eventually-.
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="show flex flex-col relative rounded-md overflow-hidden"
              >
                <h2 className=" bg-black text-white text-[14px] py-[4px] px-[16px] rounded-full absolute z-10 top-[14px] left-[14px]">
                  Temp Mail
                </h2>
                <div className="block h-[240px] overflow-hidden">
                  <Image
                    src={blog}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[8px] bg-white px-[20px] py-[30px] text-center">
                  <h3 className="text-[16px] text-gray-600 font-semibold">
                    A Temporary Email Address for Developers
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    A number Of problems can arise for beginners in web page
                    development and application development. E-mail settings are
                    essential for all aspects Of your application and web pages.
                    This includes user registration. user feedback. mail
                    services, email notifications, sales manager inquiries using
                    mail, and user feedback. Although CMS templates are intended
                    to make it easy to create web pages. they don't guarantee
                    that e-mail services will work correctly. Therefore, the
                    developer must conduct manual functional testing. The
                    developer must manually test the email functions of his
                    website or application in order to activate the user
                    registration module. The developer eventually-.
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="show flex flex-col relative rounded-md overflow-hidden"
              >
                <h2 className=" bg-black text-white text-[14px] py-[4px] px-[16px] rounded-full absolute z-10 top-[14px] left-[14px]">
                  Temp Mail
                </h2>
                <div className="block h-[240px] overflow-hidden">
                  <Image
                    src={blog}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[8px] bg-white px-[20px] py-[30px] text-center">
                  <h3 className="text-[16px] text-gray-600 font-semibold">
                    A Temporary Email Address for Developers
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    A number Of problems can arise for beginners in web page
                    development and application development. E-mail settings are
                    essential for all aspects Of your application and web pages.
                    This includes user registration. user feedback. mail
                    services, email notifications, sales manager inquiries using
                    mail, and user feedback. Although CMS templates are intended
                    to make it easy to create web pages. they don't guarantee
                    that e-mail services will work correctly. Therefore, the
                    developer must conduct manual functional testing. The
                    developer must manually test the email functions of his
                    website or application in order to activate the user
                    registration module. The developer eventually-.
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="show flex flex-col relative rounded-md overflow-hidden"
              >
                <h2 className=" bg-black text-white text-[14px] py-[4px] px-[16px] rounded-full absolute z-10 top-[14px] left-[14px]">
                  Temp Mail
                </h2>
                <div className="block h-[240px] overflow-hidden">
                  <Image
                    src={blog}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[8px] bg-white px-[20px] py-[30px] text-center">
                  <h3 className="text-[16px] text-gray-600 font-semibold">
                    A Temporary Email Address for Developers
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    A number Of problems can arise for beginners in web page
                    development and application development. E-mail settings are
                    essential for all aspects Of your application and web pages.
                    This includes user registration. user feedback. mail
                    services, email notifications, sales manager inquiries using
                    mail, and user feedback. Although CMS templates are intended
                    to make it easy to create web pages. they don't guarantee
                    that e-mail services will work correctly. Therefore, the
                    developer must conduct manual functional testing. The
                    developer must manually test the email functions of his
                    website or application in order to activate the user
                    registration module. The developer eventually-.
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="show flex flex-col relative rounded-md overflow-hidden"
              >
                <h2 className=" bg-black text-white text-[14px] py-[4px] px-[16px] rounded-full absolute z-10 top-[14px] left-[14px]">
                  Temp Mail
                </h2>
                <div className="block h-[240px] overflow-hidden">
                  <Image
                    src={blog}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[8px] bg-white px-[20px] py-[30px] text-center">
                  <h3 className="text-[16px] text-gray-600 font-semibold">
                    A Temporary Email Address for Developers
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    A number Of problems can arise for beginners in web page
                    development and application development. E-mail settings are
                    essential for all aspects Of your application and web pages.
                    This includes user registration. user feedback. mail
                    services, email notifications, sales manager inquiries using
                    mail, and user feedback. Although CMS templates are intended
                    to make it easy to create web pages. they don't guarantee
                    that e-mail services will work correctly. Therefore, the
                    developer must conduct manual functional testing. The
                    developer must manually test the email functions of his
                    website or application in order to activate the user
                    registration module. The developer eventually-.
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="show flex flex-col relative rounded-md overflow-hidden"
              >
                <h2 className=" bg-black text-white text-[14px] py-[4px] px-[16px] rounded-full absolute z-10 top-[14px] left-[14px]">
                  Temp Mail
                </h2>
                <div className="block h-[240px] overflow-hidden">
                  <Image
                    src={blog}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[8px] bg-white px-[20px] py-[30px] text-center">
                  <h3 className="text-[16px] text-gray-600 font-semibold">
                    A Temporary Email Address for Developers
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    A number Of problems can arise for beginners in web page
                    development and application development. E-mail settings are
                    essential for all aspects Of your application and web pages.
                    This includes user registration. user feedback. mail
                    services, email notifications, sales manager inquiries using
                    mail, and user feedback. Although CMS templates are intended
                    to make it easy to create web pages. they don't guarantee
                    that e-mail services will work correctly. Therefore, the
                    developer must conduct manual functional testing. The
                    developer must manually test the email functions of his
                    website or application in order to activate the user
                    registration module. The developer eventually-.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-zinc-900">
        <div className="hidden lg:flex justify-center pt-[40px]">
          <div className="w-full lg:w-[1536px] px-[15px]">
            <div className="flex justify-center ">
              <div className="flex gap-[40px] items-center ">
                <Link href="#" className="text-white text-[15px] font-medium">
                  Home
                </Link>
                <Link href="#" className="text-white text-[15px] font-medium">
                  Blog
                </Link>
                <Link href="#" className="text-white text-[15px] font-medium">
                  Help
                </Link>
                <Link href="#" className="text-white text-[15px] font-medium">
                  FAQ
                </Link>
                <Link href="#" className="text-white text-[15px] font-medium">
                  Donate
                </Link>
                <Link href="#" className="text-white text-[15px] font-medium">
                  Privacy
                </Link>
                <Link href="#" className="text-white text-[15px] font-medium">
                  Terms
                </Link>
                <Link href="#" className="text-white text-[15px] font-medium">
                  Contact
                </Link>
              </div>
            </div>
            <div className="border-b border-dashed border-gray-500 pt-[40px]"></div>
          </div>
        </div>
        <div className="flex justify-center py-[40px]">
          <div className="w-full lg:w-[1536px] px-[15px]">
            <p className="text-white text-[13px] text-center">
              © 2022 LuxusMail. All rights reserved.{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
