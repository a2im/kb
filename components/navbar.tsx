'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { GET_ANNOUNCEMENTS } from "../lib/gql/queries";
import { useQuery } from '@apollo/client';

export default function MyNavbar() {
  const ref = useRef();
  const [navbar, setNavbar] = useState(false);
  useOnClickOutside(ref, () => setNavbar(false));
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
                  onClick={() => setNavbar(!navbar)}
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
              <ul id="iwnavbar" className="md:lvl1 text-xl relative mx-auto
                  uppercase text-center
              md:flex">
                <li 
                  className="
                  mx-auto
                  md:px-3 
                  ">
                  <Link href="/operations" onClick={() => setNavbar(false)} 
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
                            <Link href="/operations/overview" onClick={() => setNavbar(false)}>
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
                            <Link href="/operations/accounts" onClick={() => setNavbar(false)}>
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
                            <Link href="/operations/hardware" onClick={() => setNavbar(false)}>
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
                            <Link href="/operations/security" onClick={() => setNavbar(false)}>
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
                            <Link href="/operations/systems" onClick={() => setNavbar(false)}>
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
                            <Link href="/operations/development" onClick={() => setNavbar(false)}>
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
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <NavbarAnnouncements/>
      </>
  );
}
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

export function NavbarAnnouncements(){
  const { loading, error, data } = useQuery(GET_ANNOUNCEMENTS, { 
    variables: {
      PublicationState: "LIVE",
      Name: "Indie Week",
    }});
    if (error) return <p>Error</p>
    console.log(data)
  return (
    <>
    <div className="w-full bg-white">
    <div className="z-40 mx-auto overflow-x-hidden relative flex max-w-5xl gap-10">
    <div className="animate-marquee top-0 whitespace-nowrap">
    {data?.announcements.data.map(announcements => (
        <h3 key={announcements.id} className="text-black text-2xl px-5 mt-10 uppercase">{announcements.attributes.text}</h3>
        )
        )}
    </div>
    <div className="absolute top-0 animate-marquee2 whitespace-nowrap pt-10">
    {data?.announcements.data.map(announcements => (
        <h3 key={announcements.id} className="text-black text-2xl px-5 uppercase">{announcements.attributes.text}</h3>
        )
        )}
    </div>
    <div className="absolute top-0 animate-marquee3 whitespace-nowrap pt-10">
    {data?.announcements.data.map(announcements => (
        <h3 key={announcements.id} className="text-black text-2xl px-5 uppercase">{announcements.attributes.text}</h3>
        )
        )}
    </div>
    <div className="absolute top-0 animate-marquee4 whitespace-nowrap pt-10">
    {data?.announcements.data.map(announcements => (
        <h3 key={announcements.id} className="text-black text-2xl px-5 uppercase">{announcements.attributes.text}</h3>
        )
        )}
    </div>
    </div>
    </div>
    </>
  )
}