"use client";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import React from "react";


export default function ShoppingCartModel() {
    const {
        cartCount,
        cartDetails,
        shouldDisplayCart,
        handleCartClick,
        removeItem,
        totalPrice,
        redirectToCheckout,

    } = useShoppingCart();

    async function handleCheckout(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        evt.preventDefault();

        try {
            const result = await redirectToCheckout();
            if (result?.error) {
                console.log('Something went wrong');
            } else {
                console.log('checkout successful');
            }

        } catch (error: any) {
            console.log(error);
        }
    }

    return (

        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()} >
            <SheetContent className="sm:max-w-lg w-[100vw] h-auto overflow-auto">
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>

                <div className="h-full">
                    <div className="mt-8 flex-1 h-auto overflow-auto">
                        <div className="pr-2">
                            {cartCount === 0 ? (
                                <span className="text-lg">Your cart is empty</span>
                            ) : (
                                <>
                                    <span>You have {cartCount} items in cart</span>
                                    {Object.values(cartDetails ?? {}).map((entry) => (
                                        <li key={entry.id} className="flex justify-between w-full h-auto items-center gap-4">

                                            <div className="rounded-sm border border-slate-200  h-auto mt-8  flex justify-between overflow-hidden">
                                                <Image
                                                    src={entry.image as string}
                                                    alt="Product Image"
                                                    width={100}
                                                    height={100}
                                                    className="rounded-md "
                                                />
                                            </div>

                                            <div className="flex flex-col flex-1 ">
                                                <div className="flex w-full mx-aut justify-between">
                                                    <span className="text-lg text-slate-900 font-black">{entry.name}</span>
                                                    <span className="text-lg text-slate-900 font-medium">${entry.price}</span>
                                                </div>
                                                <div className="flex">
                                                    <p className="text-md line-clamp-2">{entry.description}</p>
                                                    <button type="button" className="text-sm text-primary hover:text-slate-400 font-medium mt-1" onClick={() => removeItem(entry.id)}>Remove</button>
                                                </div>
                                                <p className="font-bold text-slate-800 ">QTY: {entry.quantity}</p>

                                            </div>
                                        </li>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col w-full pb-4 pt-14 px-0 sm:px-6">
                        <div className="flex justify-between h-ful border-slate-300 border-b">
                            <span className="text-lg">SubTotal:</span>
                            <span className="text-lg">${totalPrice}</span>
                        </div>
                        <p className="mt-1">Shipping and Taxes are calculated at checkout</p>
                    </div>
                    <div className="py-">
                        <button type="button" onClick={handleCheckout} className="w-full p-3 rounded-lg text-white bg-green-400  text-xl font-bold">Checkout</button>

                    </div>
                    <div className="mt-6 text-sm flex">
                        <button type="button" onClick={handleCartClick} className="w-full text-center cursor-pointer text-primary hover:text-slate-400 font-medium">Continue Shopping</button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
