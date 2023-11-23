import React from "react";
import { BeatLoader }  from "react-spinners";
import { useState, useEffect } from "react";

export function LoadingPage(){

    const loading = true
    return(
        <div className="flex justify-center items-center min-h-screen w-full bg-[#16191c]">
            <BeatLoader color={ "#52afd7" } loading={ loading } size={30} />
        </div>
    )
}   