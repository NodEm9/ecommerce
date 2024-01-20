import { client } from "../../lib/sanity";
import ProductDetail from "../../interfaces/types";
import ImageGallary from "@/app/component/ImageGallary";
import { Truck } from "lucide-react";
import CustomButtom from "@/app/component/CustomButtom";
import AddToBag from "@/app/component/AddToBag";


export const revaliate = 0;

async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
        name,   
        price,
        images,
        description,
        "slug": slug.current,
        "categoryName": category->name,
        price_id,   
    }`;
    const data = await client.fetch(query);
    return data;
}

export async function generateStaticParams() {
    const query = `*[_type == "product"] {
        slug
    }`;
    const data = await client.fetch(query);
    return data.map((product: { slug: { current: string } }) => {
        return {
            params: {
                slug: product.slug.current,
            },
        };
    });
}

const sizes = [
    { id: "1", size: "XS (0-2)" },
    { id: "2", size: "S (4-6)" },
    { id: "3", size: "M (8-10)" },
    { id: "4", size: "L (12-14)" },
    { id: "5", size: "XL (16-18)" },
    { id: "6", size: "XXL(20-22)" },
];

export default async function productDetails({
    params,
}: {
    params: { slug: string };
}) {

    const data: ProductDetail = await getData(params.slug);

    const percentage = (data.price / 100) * 10;
    const discount = data.price - percentage;
    const discountPrice = discount.toFixed(2);


    return (
        <section className="w-full h-full min-h-screen lg:h-full lg:w-full md:mx-auto lg:items-center lg:justify-center lg:m-auto md:w-full md:h-full py-6 lg:pb-60 m-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 max-w-2xl md:max-w-7xl mx-auto md:mx-auto md:gap-10 lg:mx-auto lg:max-w-7xl lg:gap-16 ">
                {/* Image Gallary */}
                <ImageGallary images={data.images} />

                {/* Product Details */}
                <div className="mt-2 py-0 md:py-6  pb-4 px-6 md:mx-auto">
                    <div className="text-red-500 text-lg">{data.categoryName} </div>
                    <div className="text-slate-700 font-semibold mt-1 mb-1 text-2xl">
                        {data.name}
                    </div>
                    <div className="text-slate-700 font-semibold mb-4 text-xl">
                        ${discountPrice}
                        <span className="text-red-500 line-through font-normal ml-2 mr-2">
                            ${data.price}
                        </span>
                        10% off
                    </div>

                    <p className="text-xl lg:max-w-lg lg:mx-0 flex max-w-2xl mx-auto justify-between text-slate-800 font-semibold mt-12 mb-1">
                        Select Size:
                        <span className="lg:mr-16 md:mr-[8.5rem] mr-[1.89rem] ">Size Guide</span>
                    </p>
                    <div className="flex flex-wrap lg:w-max-w-4xl max-w-2xl gap-2 h-auto rounded-xl px- m-auto">
                        {sizes.map((size) => (
                            <div
                                key={size.id}
                                className="w-36 top-0 py-4 pb-4 h-full border text-center items-center justify-center cursor-pointer shadow-md rounded-lg  hover:bg-slate-200"
                            >
                                {size.size}
                            </div>
                        ))}
                    </div>
                    <div className="mb-36 mx-auto h-auto max-w-2xl">
                        <div className="max-w-2xl mt-16 mb-6">
                            <div className="w-full  justify-center gap-4 items-center">
                                <AddToBag
                                    name={data.name}
                                    description={data.description}
                                    image={data.images[0]}
                                    price={data.price}
                                    currency="USD"
                                    key={data._id}
                                    price_id={data.price_id}
                                />
                            </div>
                            <div className="h-[2.2rem] mb-16">
                                <CustomButtom
                                    name="Favourited Option Button"
                                    text="Favourite"
                                    hearted
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mb-16 flex-col ">
                        <span className="flex flex-col gap-2">
                            <div className="text-2xl text-slate-800 font-bold">Shipping.</div>
                            <div className="flex gap-2">
                                <span className="w-6 h-6">
                                    <Truck />
                                </span>
                                <span className="text-lg text-slate-500 font-semibold">
                                    3 - 5 Days Delivery
                                </span>
                            </div>
                        </span>
                        <span className=" flex text-xl gap-5 text-slate-800 font-bold mb-10">
                            <div>
                                PromoCode:
                                <span className="flex justify-center items-center gap- text-blue-800 bg-white font-semibold">
                                    Use Code at Checkout
                                </span>
                            </div>
                            <button className="text-white rounded-full border-spacing-x-6 border-2 border-dashed hover:border-2 items-center justify-center shadow-sm bg-pink-400">
                                <span className="items-center justify-center m-auto mt-1 md:mt-0 p-4 rounded-full">
                                    FREESHIP
                                </span>
                            </button>
                        </span>
                    </div>
                    <div className="mb-1">We Ship to Germany and Central Europe Only.</div>
                    <hr className="border-slate-200 py-6 pb-6" />
                    <div className="text-slate-500 text-lg font-semibold tracking-wide md:max-w-3xl max-w-2xl line-clamp-6">
                        <div className="text-slate-700 font-semibold text-2xl">
                            Description.
                        </div>
                        {data.description}
                    </div>
                </div>
            </div>
        </section>
    );
}
