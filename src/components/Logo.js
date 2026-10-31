import Link from 'next/link'
import React from 'react'
import { HOME_ROUTE } from '@/constants/routes'

const Logo = () => {
    return (
        <Link href={HOME_ROUTE} className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
                Electro
                <span className='text-primary'>Shop</span>
            </span>
        </Link >
    )
}

export default Logo