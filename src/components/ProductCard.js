import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = async ({ name, brand, category, price, imageUrls, id }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow">
            <Link href={`/products/${id}`}>
                <Image src={imageUrls.length > 0 ? imageUrls[0] : "/products/placeholder.png"}
                    alt={name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover hover:scale-105 transition-all duration-300" />
            </Link>
            <div className="px-5 py-5">
                <span className="bg-primary
                 text-white text-sm px-3 py-0.5 rounded-xl">{brand}</span>
                <Link href={`/products/${id}`}>
                    <h4 className="font-medium text-xl">{name}</h4>
                </Link>
                <p>⭐️⭐️⭐️⭐️⭐️ <span className="text-sm">(326 reviews)</span></p>
                <h5 className="text-primary
                 text-2xl font-semibold my-2">
                    Rs. {price}
                </h5>
                <button className="bg-primary
                 w-full px-5 py-2 text-white rounded-xl">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard