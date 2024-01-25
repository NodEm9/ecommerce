import Products from "../interfaces/types"
import { client } from "../lib/sanity"
import Image from "next/image"
import Link from "next/link"

export const revalidate = 0;

export async function getData() {
    const query = `*[_type == 'product'][] | order(_createdAt desc) {
        _id,
        name,  
          price, 
          "slug": slug.current,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url,
          description
      }`

    const data = await client.fetch(query)
    return data
}



export default async function ProductsPage() {
    const data: Products[] = await getData()
    return (
        <div className="p-16 max-w-7xl mx-auto">
            <h1 className="text-center text-3xl lg:text-4xl md:text-4xl text-slate-700 font-bold mt-16 pb-8">All Products</h1>
            <div className='flex flex-col lg:flex-row lg:flex-wrap lg:max-w-7xl lg:mx-auto lg:items-center lg:justify-center lg:m-auto lg:gap-16'>
                {data.map((product) => (
                    <div key={product._id} className='group max-w-7xl mx-auto py-8 pb-3 '>
                        <Link href={`/products/${product.slug}`} className='flex flex-col group-hover:hover:opacity-75 '>
                            <Image
                                src={product.imageUrl}
                                alt="Hero Image"
                                width={300}
                                height={300}
                                priority={true}
                                quality={100}
                                className="object-cover object-center bg-cover rounded-lg shadow-md"
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
    )
}
