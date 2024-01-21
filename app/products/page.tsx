import ProductsPage from '../component/Products';
import { client } from '../lib/sanity';

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
export default async function AllProductsPage() {
    return (
        <section className='lg:max-w-7xl lg:h-full px-5 lg:px-0 lg:items-start lg:justify-center lg:mx-auto'>
            <ProductsPage />
        </section>
    )
}
