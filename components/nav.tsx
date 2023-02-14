'use client';
import { useOnClickOutside } from 'usehooks-ts'
import Link from 'next/link';
import Image from "next/image";
import React, { useState, useRef } from "react";

export default function MyNavbar({children}) {
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const handleClickOutside = () => {
    setNavbar(false)
  }
  const handleClickInside = () => {
    setNavbar(!navbar)
  }
  
  useOnClickOutside(Navref, handleClickOutside)
  return (
    <>
      <nav className="bg-black w-full fixed z-50">
        <div className="justify-between max-w-6xl mx-auto items-center md:flex">
          <div>
            <div className="flex items-center justify-between md:block">
              <Link href={"/"} legacyBehavior>
              <a>
              <div className="flex justify-center gap-10 grid-cols-2">
              <div className="a2imbuttonbox ml-2 w-10">
                <Image
                  src="/logos/A2IM-logos/A2IM-button-white.png"
                  alt="a2im logo button"
                  width={100}
                  height={100}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
                </div>
                <h2 className="text-3xl text-white font-bold tracking-normal">KNOWLEDGE-BASE</h2>
              </div>
              </a>
              </Link>
              <div className="md:hidden">
                <button
                  className="pr-2 mr-2 pl-2 text-white rounded-md outline-none focus:border-white focus:border"
                  onClick={handleClickInside}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 py-10 md:py-0 justify-center md:block ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul ref={Navref} id="iwnavbar" className="md:lvl1 text-xl relative mx-auto
                  uppercase text-center
              md:flex">
                <li 
                  className="
                  mx-auto
                  md:px-3 
                  ">
                  <Link href="/operations" onClick={handleClickOutside} 
                  >
                    <h2 className="my-3 md:my-0 text-xl hover:scale-105 md:text-white bg-white md:bg-transparent rounded-3xl text-black">Operations</h2>
                  </Link>
                    <ul className="
                        mx-auto
                        md:lvl2
                        md:rounded-b-3xl
                        md:bg-black
                        md:-ml-6
                        md:px-3
                        md:pb-3
                        ">
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/overview" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Overview</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/accounts" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Account Services</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/hardware" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Hardware</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/security" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Security</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/systems" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Systems</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/development" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Development</h2>
                            </Link>
                          </li>

                          </ul>
                </li>
                <li 
                  className="
                  mx-auto
                  md:px-3 
                  ">
                  <Link href="/sales" onClick={handleClickOutside} 
                  >
                    <h2 className="my-3 md:my-0 text-xl hover:scale-105 md:text-white bg-white md:bg-transparent rounded-3xl text-black">Sales</h2>
                  </Link>
                    <ul className="
                        mx-auto
                        md:lvl2
                        md:rounded-b-3xl
                        md:bg-black
                        md:-ml-6
                        md:px-3
                        md:pb-3
                        ">
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/overview" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Overview</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/accounts" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Account Services</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/hardware" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Hardware</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/security" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Security</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/systems" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Systems</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/development" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Development</h2>
                            </Link>
                          </li>

                          </ul>
                </li>
                <li 
                  className="
                  mx-auto
                  md:px-3 
                  ">
                  <Link href="/marketing" onClick={handleClickOutside} 
                  >
                    <h2 className="my-3 md:my-0 text-xl hover:scale-105 md:text-white bg-white md:bg-transparent rounded-3xl text-black">Marketing</h2>
                  </Link>
                    <ul className="
                        mx-auto
                        md:lvl2
                        md:rounded-b-3xl
                        md:bg-black
                        md:-ml-6
                        md:px-3
                        md:pb-3
                        ">
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/overview" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Overview</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/accounts" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Account Services</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/hardware" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Hardware</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/security" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Security</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/systems" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Systems</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/development" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Development</h2>
                            </Link>
                          </li>

                          </ul>
                </li>
                <li 
                  className="
                  mx-auto
                  md:px-3 
                  ">
                  <Link href="/human-resources" onClick={handleClickOutside} 
                  >
                    <h2 className="my-3 md:my-0 text-xl hover:scale-105 md:text-white bg-white md:bg-transparent rounded-3xl text-black">Human Resources</h2>
                  </Link>
                    <ul className="
                        mx-auto
                        md:lvl2
                        md:rounded-b-3xl
                        md:bg-black
                        md:-ml-6
                        md:px-3
                        md:pb-3
                        ">
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/overview" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Overview</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/accounts" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Account Services</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/hardware" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Hardware</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/security" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Security</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/systems" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Systems</h2>
                            </Link>
                          </li>
                          <li className="
                              md:w-full
                              md:py-2
                              ">
                            <Link href="/operations/development" onClick={handleClickOutside}>
                            <h2 className="my-3
                             md:my-0 
                             text-xl 
                             hover:scale-105 
                             md:text-white 
                             bg-white 
                             md:bg-transparent 
                             rounded-3xl 
                             text-black">Development</h2>
                            </Link>
                          </li>

                          </ul>
                </li>
                <li className="text-center font-serif text-zinc-500 whitespace-nowrap hover:scale-105">
                  {children}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </>
  );
}
