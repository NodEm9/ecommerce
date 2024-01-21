"use client"

import { ReactNode } from "react"
import { CartProvider as USCProvider } from "use-shopping-cart"

export default function CartProvider({ children }: { children: ReactNode }) {
    return (
        <USCProvider
            mode='payment'
            currency="USD"
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
            successUrl="https://ecommerce-rust-two.vercel.app/stripe/success"
            cancelUrl="https://ecommerce-rust-two.vercel.app/stripe/error"
            billingAddressCollection={false}
            language="en-US"
            shouldPersist={true}
        >
            {children}
        </USCProvider>
    )
}
