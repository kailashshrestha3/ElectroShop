import Image from 'next/image'
import React from 'react'

const ProductBanner = () => {
    return (
        <div className='relative h-80'>
            <Image
                src={'/products/banner.jpg'}
                alt={'banner'}
                width={1000}
                height={600}
                className="absolute w-full h-80 object-cover"
            />

            <Image
                src={'/products/samsung.png'}
                alt={'banner'}
                width={800}
                height={1000}
                className="object-cover absolute top-0 right-0 w-auto h-full"
            />
            <h1 className='relative flex text-center items-center justify-center z-10 text-6xl font-bold h-full text-white text-shadow-amber-700 text-shadow-sm'> Samsung Galaxy s26 Ultra</h1>


        </div>
    )
}

export default ProductBanner