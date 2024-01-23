import { client } from "../lib/sanity"
import Image from "next/image"
import Link from "next/link"
import Products from '../interfaces/types';



async function getData(category: string) {
    const query = `*[_type == "product" && category->name == "${category}"] {
        _id,
        name,   
        price,
        "slug": slug.current,
        "imageUrl": images[0].asset->url,
        "categoryName": category->name     
    }`

    const data = await client.fetch(query)
    return data
}

export const dynamic = 'force-dynamic'

export default async function CategoryPage(
    { params
    }: {
        params: { category: string }
    }) {

    const data: Products[] = await getData(params.category)

    return (
        <div className="w-full h-full min-h-screen max-w-screen-2xl px-10 md:px-0">
            <div className="max-w-2xl lg:max-w-7xl md:max-w-7xl mt-16  pb-6 justify-center lg:m-auto lg:items-center">
                <h1 className="text-3xl lg:text-4xl md:text-4xl text-slate-700 font-bold mt-16 pb-8">All {params.category}</h1>
                <div className='flex py-6 md:max-w-7xl lg:w-full max-w-2xl'>
                    <div className='w-full grid md:grid-cols-four-column grid-cols-one-column lg:items-center lg:justify-center lg:m-auto lg:w-full lg:gap-16'>
                        {data.map((product) => (
                            <div key={product._id} className='group relative py-8 pb-3 '>
                                <Link href={`/products/${product.slug}`} className='w-full h-full aspect-square grid grid-cols-one-columnlg:grid-cols-four-colum group-hover:hover:opacity-75 lg:w-full lg:h-full'>
                                    <Image
                                        src={product.imageUrl}
                                        alt="Hero Image"
                                        width={500}
                                        height={500}
                                        priority={true}
                                        quality={100}
                                        className="object-cover object-center w-full h-full lg:w-full lg:h-full md:w-full md:h-full bg-cover rounded-lg shadow-md"
                                    />
                                    <div className='flex py-14 pb-12 lg:py-6 lg:pb-3 justify-between md:justify-between md:px-4'>
                                        <Link href={`/products/${product.slug}`}>
                                            <h2 className='text-xl font-semibold text-slate-700'>{product.name}</h2>
                                        </Link>
                                        <span className='text-xl font-black text-slate-950'>${product.price}</span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
