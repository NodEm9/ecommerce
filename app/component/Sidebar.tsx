"use client"

import Link from 'next/link';

const sideLinks = [
    { id: "0", href: '/newfeatures', label: 'New & Trending' },
    { id: "1", href: '/men', label: 'Men' },
    { id: "2", href: '/women', label: 'Women' },
    { id: "3", href: '/kids', label: 'Kids' },
]

export default function Sidebar() {
    return (
        <aside className='hidden md:block max-h-[500px] top-0 max-w-sm shadow-md border-black border-r border-solid bg-white shadow-slate-200'>
            <ul className='text-2xl flex flex-col p-5 gap-14 justify-between'>
                {sideLinks.map((link) => (
                    <li key={link.id} className='w-full p-2 hover:bg-white/95 rounded-md shadow-sm cursor-pointer'>
                        <Link href={link.href} className='hover:text-primary w-full'>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
