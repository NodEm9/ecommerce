import HeroImage from './component/Hero'
import NewestProduct from './component/NewestProduct'
import ProductPage from './component/Products'
import Sidebar from './component/Sidebar'
import { client } from './lib/sanity'

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const query = `*[_type == "product"] {
    slug
  }`
  const data = await client.fetch(query)
  console.log(data)
  return data.map((product: { slug: { current: string } }) => {
    return {
      params: {
        slug: product.slug.current
      }
    }
  })
}


export default async function Home() {
  return (
    <section className='w-full h-full '>
      <div className='mx-auto w-full item-center justify-center flex flex-col m-auto'>
        <div className='max-w-2xl pb-8 px-10 lg:pb-8 lg:gap-16 flex lg:max-w-full md:max-w-full md:px-0 md:gap-x-3 justify-between'>
          <Sidebar />
          <HeroImage />
        </div>
        <section className='lg:max-w-full max-w-2xl md:max-w-7xl lg:items-center  lg:justify-center py-24 lg:m-auto'>
          <section className='mt-28 '>
            <NewestProduct />
          </section>
          <section className='px-8 md:px-0'>
            <ProductPage />
          </section>
        </section>
      </div>
    </section>
  )
}
