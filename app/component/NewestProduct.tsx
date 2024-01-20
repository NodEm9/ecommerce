import { client } from '../lib/sanity'
import Link from 'next/link'
import { ArrowRightSquareIcon } from 'lucide-react'
import Image from 'next/image'
import NewestProducts from '../interfaces/types'

async function getData() {
    const query = `*[_type == 'product'][0...4] | order(_createdAt desc) {
        _id,
        name,
          price, 
          "slug": slug.current,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url
      }`

    const data = await client.fetch(query)
    return data
}

export default async function NewestProduct() {
    const data: NewestProducts[] = await getData()

    return (
        <div className='max-w-2xl md:max-w-7xl lg:w-full pb-16 lg:px-0 px-7'>
            <div className='flex justify-between w-full md:max-w-7xl lg:w-full pb-8 border-b'>
                <h1 className='text-2xl md:text-4xl text-slate-800 font-semibold'>Newest Products</h1>
                <Link href="/products" className='text-slate-700 text-xl md:text-4xl'>
                    View All
                    <ArrowRightSquareIcon className='inline-block' size={30} />
                </Link>
            </div>
            <div className='flex py-6 md:max-w-7xl lg:w-full max-w-2xl'>
                <div className='w-full grid md:grid-cols-four-column grid-cols-one-column lg:w-full lg:gap-16'>
                    {data.map((product) => (
                        <li key={product._id} className='flex flex-col w-2xl lg:w-full '>
                            <Link href={`/products/${product.slug}`} className='w-full h-full'>
                                <Image
                                    src={product.imageUrl}
                                    alt="Hero Image"
                                    width={500}
                                    height={500}
                                    priority={true}
                                    quality={100}
                                    className="object-cover object-center bg-cover rounded-lg shadow-xl hover:w-full hover:h-full hover:p-6 hover:opacity-75"
                                />
                            </Link>
                            <div className='flex py-6 justify-between md:justify-between md:px-4'>
                                <h2 className='text-xl font-semibold text-slate-700'>{product.name}</h2>
                                <span className='text-xl font-black text-slate-950'>${product.price}</span>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}
