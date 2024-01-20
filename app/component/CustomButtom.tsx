"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";



interface CustomButtomProps {
    name: string,
    text: string,
    hearted?: boolean,
}

export default function CustomButtom({ name, text, hearted }: CustomButtomProps) {
    const [isHearted, setIsHearted] = useState(hearted === false);

    const [isButtonProps, setIsButtonProps] = useState({
        name: name,
        text: text,
        hearted: hearted,
    })

    const handleHearted = () => {
        // setIsButtonProps({
        //     name: name,
        //     text: text,
        //     hearted: !isHearted,
        // })
        setIsHearted(!isHearted);
    }

    const handleAddToCart = () => {

    }

    return (
        <div >
            {isButtonProps && hearted ?
                (
                    <Button
                        onClick={handleHearted}
                        className={`${isHearted && hearted ? "border-dashed border-2" : ""} flex mt-2 mb-16 gap-x-2 p-7 items-center justify-center md:w-96 w-80 bg-transparent border-dashed border hover:bg-transparent hover:border-black hover:border-2 shadow-sm border-slate-400 rounded-full text-black text-2xl`}
                    >
                        {isHearted ? (
                            <span className="text-2xl"><Heart color="blue" fill="blue" /></span>
                        ) : (
                            <span className="text-xl"><Heart /></span>
                        )}
                        <span className="text-xl text-slate-800 font-semibold">{isButtonProps.text}</span>
                    </Button>
                ) : (
                    <Button
                        onClick={handleAddToCart}
                        className="mt-2 mb-1 gap-x-2 p-7 items-center justify-center md:w-96 w-80 bg-blue-700 hover:bg-slate-100 hover:text-black shadow-sm border-slate-400 rounded-full text-white text-2xl"
                    >
                        <span className="text-xl font-semibold">{isButtonProps.text}</span>
                    </Button>
                )
            }
        </div>

    )
}
