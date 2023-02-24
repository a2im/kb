import Image from "next/image";
import Link from 'next/link'
import React from "react";
import SocialFollow from "../components/social-follow";


export default function Footer() {
  return (
    <footer className="z-0 w-full ">
        <div className="mx-auto md:gap-20 p-10">
        <div className="max-w-5xl mx-auto justify-center items-center flex flex-col md:gap-20 lg:gap-64 md:flex-row py-10 border-2 border-black rounded-lg dark:border-white bg-neutral-100 dark:bg-gradient-to-br from-neutral-800 to-neutral-700 dark:text-neutral-50 p-10">
            <Link href="/" passHref className="w-96">
              <Image
                className="relative hover:scale-105 dark:invert"
                src="/logos/A2IM-logos/A2IM-logo.png"
                alt='a2im logo'
                height={179}
                width={400}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </Link>
            <SocialFollow/>
            </div>
        </div>
    </footer>
  )
}
