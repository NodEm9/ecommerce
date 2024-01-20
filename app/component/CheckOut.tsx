"use client"
import { Button } from '@/components/ui/button';

import { useShoppingCart } from "use-shopping-cart"
import { urlFor } from '../lib/sanity';
import { ProductCart } from './AddToBag';

export default function CheckOutNow({
    image,
    name,
    price,
    description,
    currency,
    price_id
}: ProductCart
) {

    const { checkoutSingleItem } = useShoppingCart();

    const buyNow = (price_id: string) => {
        checkoutSingleItem(price_id);
    }

    const product = {
        name: name,
        price: price,
        description: description,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
    }

    return (
        <div className=''>
            <Button
                onClick={
                    () => {
                        buyNow(product.price_id)
                    }
                }

                className="w-full p-3 rounded-lg text-white bg-green-400  text-xl font-bold"
            >
                <span className="text-xl font-semibold">Checkout Now</span>
            </Button>
        </div>
    )
}
