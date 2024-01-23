"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";



const links = [
    { href: '/', name: 'Home' },
    { href: '/Men', name: 'Men' },
    { href: '/Women', name: 'Women' },
    { href: '/Kids', name: 'Kids' },
    { href: '/Newfeatures', name: 'New & Trending' },
]

export default function Navigation() {
    const pathName = usePathname();
    const { cartCount, handleCartClick } = useShoppingCart();

    return (
        <header className="flex items-start justify-between max-w-2xl mx-auto lg:max-w-full lg:mx-auto lg:px-20 md:px-5 md:max-w-full p-2 gap-16 border-b">
            <div className="">
                <Link href="/" className="leading-tight p-2">
                    <h1 className="text-2xl md:text-4xl text-slate-800 font-black">Crox<span className="text-blue-700">Fashion</span></h1>
                </Link>
            </div>
            <nav className="hidden lg:max-w-full lg:block md:block md:max-w-6xl sm:hidden">
                <ul className="p-2 w-full lg:w-full lg:flex lg:justify-between lg:gap-20">
                    {links.map((link, index) => (
                        <li key={index} className="flex flex-col md:inline-flex p-2 ">
                            {pathName === link.href ? (
                                <Link href={link.href} className="text-lg text-primary gap-16 font-semibold lg:text-2xl">{link.name}</Link>
                            ) : (
                                <Link href={link.href} className="text-lg hover:text-primary lg:text-2xl"> {link.name}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex divide-x mt-2">
                <Button
                    variant={'outline'}
                    className="p-6 md-p-8 lg:p-8"
                >
                    <Link
                        href={``}
                        className=" py-2"
                        onClick={() => handleCartClick()}
                    >
                        <span className="flex items-center justify-center">
                            <span className="relative text-2xl">
                                <ShoppingBagIcon className="w-8 h-8 font-normal" />
                                <span className="absolute top-0 -translate-y-5 text-lg">{cartCount}</span>
                            </span>

                        </span>
                    </Link>
                </Button>
            </div>
        </header>
    )
}
