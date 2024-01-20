"use client";

import Link from "next/link"

const links = [
    { id: "0", href: '/', label: 'Home' },
    { id: "1", href: '/Men', label: 'Men' },
    { id: "2", href: '/Women', label: 'Women' },
    { id: "3", href: '/Kids', label: 'Kids' },
    { id: "4", href: '/Newfeatures', name: 'New & Trending' },
]

export default function Footer() {
    return (
        <div className="w-full bg-slate-700">
            <div className="w-full flex flex-col items-center justify-center lg:items-start lg:left-16 lg:px-32 p-8">
                <h2 className="text-2xl text-white font-semibold">Pages Links</h2>
                <div className="justify-center left-20 mt-4">
                    {links.map((link) => (
                        <div key={link.id} className="flex flex-col justify-center">
                            <li className="text-white text-lg font-semibold hover:text-primary list-none">
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
