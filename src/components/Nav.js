'use client'

import Link from 'next/link'
import React from 'react'
import navMenu from '@/constants/navMenu'
import { usePathname } from 'next/navigation'

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                {
                    navMenu.map((navItem) => {
                        const isActive = navItem.route == pathname
                        return (
                            <li key={navItem.label}>
                                <Link href={navItem.route}
                                    className={`${isActive ? 'text-primary underline' : ''} block py-2 px-3 rounded hover:text-primary md:p-0`} aria-current="page">
                                    {navItem.label}
                                </Link>
                            </li>
                        )
                    }

                    )
                }
            </ul>
        </nav>
    )
}

export default Nav