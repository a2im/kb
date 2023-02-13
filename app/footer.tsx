import Image from "next/image";
import Link from 'next/link'
import React from "react";
import { SocialFollowBlack } from "../components/SocialFollow";


export default function Footer() {
  return (
    <footer className="md:-mt-60 z-0 w-full pt-32">
        <div className="mx-auto md:gap-20 p-10">
        <div className="max-w-4xl mx-auto justify-center items-center flex flex-col md:gap-20 lg:gap-64 md:flex-row py-10">
            <Link href="/" passHref className="w-96">
              <Image
                className="relative hover:scale-105"
                src="/logos/A2IM-logos/A2IM-logo.png"
                alt='a2im logo'
                height={179}
                width={400}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </Link>
            <SocialFollowBlack />
            </div>
        </div>
    </footer>
  )
}
