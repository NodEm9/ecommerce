"use client"
import { Button } from '@/components/ui/button';

import { useShoppingCart } from "use-shopping-cart"
import { urlFor } from '../lib/sanity';

export interface ProductCart {
    name: string;
    price: number;
    description: string;
    currency: string;
    image: any;
    price_id: string;
}

export default function AddToBag({
    image,
    name,
    price,
    description,
    currency,
    price_id
}: ProductCart
) {

    const { addItem, handleCartClick } = useShoppingCart();

    const product = {
        name: name,
        price: price,
        description: description,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
    }

    return (
        <div>
            <Button
                onClick={
                    () => {
                        addItem(product),
                            handleCartClick()
                    }
                }

                className="mt-2 mb-1 gap-x-2 p-7 items-center justify-center md:w-96 w-80 bg-blue-700 hover:bg-slate-100 hover:text-black shadow-sm border-slate-400 rounded-full text-white text-2xl"
            >
                <span className="text-xl font-semibold">Add To Bag</span>
            </Button>
        </div>
    )
}
