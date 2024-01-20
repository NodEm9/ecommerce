"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface ImageGallaryProps {
    images: any;
}

export default function ImageGallary({ images }: ImageGallaryProps) {
    const [mainImage, ...restOfImages] = images;
    const [LageImage, setLargeImage] = useState(mainImage);

    // const handleImageClick = (image: any) => {
    //     setLargeImage(image);
    // };

    const handleMouseOver = (image: any) => {
        setLargeImage(image);
    }

    return (
        <div className="w-full h-full lg:grid-cols-4 grid grid-cols-1 md:max-w-xl md:grid-cols-four-column md:mx-0 py-6 pb-12 gap-4 lg:mx-auto lg:max-w-2xl">
            <div className="hidden md:block flex-col w-auto h-full md:mr-0.5 md:ml-10 lg:mr-0.5">
                {images.map((image: any, index: any) => (
                    <Image
                        key={index}
                        src={urlFor(image).url()}
                        alt="Hero Image"
                        width={100}
                        height={100}
                        priority={true}
                        quality={100}
                        className="object-cover object-center bg-cover rounded-md mb-10  shadow-sm cursor-pointer "
                        // onClick={() => handleImageClick(image)}
                        onMouseOver={() => handleMouseOver(image)}
                    />

                ))}
            </div>

            <div className="relative h-full lg:h-full lg:w-full lg:col-span-3 md:col-span-3 rounded-lg bg-white left-0 m-auto mb-8">
                <div className="overflow-hidden h-auto lg:h-auto md:h-auto shadow-sm">
                    <Image
                        src={urlFor(LageImage).url()}
                        alt="Hero Image"
                        width={700}
                        height={700}
                        priority={true}
                        quality={100}
                        className="object-cover object-center bg-cover w-80 h-96 lg:w-[100%] lg:h-[65%] md:w-full md:h-full rounded-md shadow-sm cursor-pointer "
                    />
                    <span className="absolute top-0 text-white left-0 py-1.5 rounded-br-lg bg-red-500 px-3  text-sm uppercase tracking-wider">sale</span>
                </div>
                <div className="flex gap-3 mt-2">
                    {restOfImages.map((image: any, index: any) => (
                        <Image
                            key={index}
                            src={urlFor(image).url()}
                            alt="Hero Image"
                            width={100}
                            height={100}
                            priority={true}
                            quality={100}
                            className="object-cover object-center bg-cover rounded-md h-24 w-24 shadow-sm cursor-pointer "
                            onMouseOver={() => handleMouseOver(image)}
                        />
                    ))}

                </div>
            </div>

        </div>
    )
}
