import Image from "next/image"
import { client, urlFor } from '../lib/sanity'

async function getImage() {
    const query = "*[_type == 'heroImage'][1]";
    const data = await client.fetch(query);

    return data
}

export default async function HeroImage() {
    const data = await getImage();

    return (
        <section className='bg-white lg:items-center lg:justify-center lg:m-auto h-full lg:mt-12 justify-center items-center md:max-w-full max-w-2xl sm:pb-8 lg:max-w-full'>
            <div className="w-full flex-wrap grid grid-cols-one-column md:grid-cols-two-column md:max-w-full md:items-center md:justify-center md:ml-8 md:gap-6 lg:max-w-full lg:grid-cols-two-column lg:gap-48 lg:h-full  lg:justify-between justify-between">
                <div className='w-full top-0 mt-4 mb-16 md:mt-16 flex lg:-mt-44'>
                    <div className="">
                        <h1 className='text-3xl lg:w-full lg:text-6xl font-bold py-2 md:text-4xl md:text-slate-700 leading-relaxed'>
                            Our Best Winter Collections, <br /> Up to <span className="text-rose-300">50% Off</span>
                        </h1>
                        <div className='text-2xl hidden md:block lg:block md:text-2xl lg:text-3xl mt-5 leading-relaxed'>
                            We have curated the best winter collections for you.
                            <span className="italic text-pretty text-blue-500"> Stay warm and look good.</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-2xl h-full mb- py-1 mx-auto ml-0 items-center gird grid-cols-one-colum md:mt-8 md:grid-cols-two-colum md:flex md:ml-0 md:max-w-fu md:right-0 lg:max-w- lg:mt-0 lg:fle flex-nowra pb- justify-center">
                    <div className="fle left-0 lg:left-4 top-0 z-10 max-w-2xl lg:max-w-full m-auto md:max-w-md overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mx-aut">
                        <Image
                            src={urlFor(data.image).url()}
                            alt="Hero Image"
                            width={1000}
                            height={600}
                            priority={true}
                            quality={100}
                            className="object-cover object-center bg-cover rounded-lg "
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
