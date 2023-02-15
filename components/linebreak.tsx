'use client';
import { motion } from "framer-motion";

export default function MyLineBreak(){

    return(
        <>
        <div className="overflow-hidden p-2">
        <motion.hr 
            animate={{
                x: 800,
                y: 0,
                scale: 1,
                rotate: 0,
            }} 
            transition={{ duration: 2, delay: 0.25 }}
            className="border-black max-w-3xl pb-4 relative -ml-[900px]"/>
        </div>
        </>
    )
}