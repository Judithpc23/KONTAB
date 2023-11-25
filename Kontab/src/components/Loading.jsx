import React from "react";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";

export function LoadingPage(){

    const loading = true
    return(
        <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-b from-[#F5F5F5] to-[#D0DDFF]">
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0 }}
            >
            <BeatLoader color={ "#52afd7" } loading={ loading } size={30} />
            </motion.div>
        </div>
    )
}   