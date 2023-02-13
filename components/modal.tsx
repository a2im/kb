'use client';

import React from "react"
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { useQuery } from "@apollo/client";
import { GET_INFO_BUTTON } from "../lib/gql/queries";
import Image from "next/image";


export default function MyModal (){
    const ref = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false);
    useOnClickOutside(ref, () => setModalOpen(false));
    const dropIn = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 40,
                stiffness: 300,
            }
        },
        exit: {
            y:"-100vh",
            opacity: 0,
        },
    };

    return (
        <>
            <div className="flex fixed bottom-5 right-5 w-20 h-20 rounded-3xl bg-gradient-radial from-black via-transparent to-transparent">
            {isModalOpen ? (
                <motion.div
                ref={ref}
                onClick={(e) => e.stopPropagation()}
                className="fixed border-4 p-5 modalinfo w-96 shadow-2xl bottom-16 md:right-16 right-7"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                <ModalInfo/>
                </motion.div>
                 ) : (
                <motion.button 
                whileTap={{scale: 0.95}}
                className="save-button"
                onClick={() => (setModalOpen(true))}>
                <div className="w-20 h-20">
                <Image
                src="/logos/A2IM-logos/A2IM-button-white.png"
                alt="a2im button"
                width={75}
                height={75}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} />
                </div>
            </motion.button>
                )}
            </div>
     </>
    );
    }

    function useOnClickOutside(ref, handler) {
        useEffect(
          () => {
            const listener = (event) => {
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
          [ref, handler]
        );
      }
      
      function ModalInfo(){
        const { loading, error, data } = useQuery(GET_INFO_BUTTON, { 
            variables: {
              PublicationState: "LIVE", 
              Name: "Indie Week"
            }});
            if (loading) return <div className="animate-pulse h-[150px] w-[100px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
            if (error) return <p>Error</p>
        return (
            <div>
                {data?.infoButtons.data.map(info => (
                <div key={info.id} className="px-4 pb-4 justify-evenly rounded-xl">
                  <h3 className="text-2xl py-2 font-bold">INFORMATION</h3>
                    <ReactMarkdown className="line-break" remarkPlugins={[remarkGfm]}>{info.attributes.Info}</ReactMarkdown>
                    </div>
                                  )
                )}
            </div>
        )
    }


