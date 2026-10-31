import React from 'react'

const fetchProductById = async (id) => {
    const product = await fetch(`https://mern-20251103-api.vercel.app/api/products/${id}`)
        .then((res) => res.json());
    return product;
}

export const generateMetadata = async ({ params }) => {
    const productId = (await params).id;
    const product = await fetchProductById(productId)

    return {
        title: product.name,
    }
}

const ProductDetailsPage = async ({ params, searchParams }) => {
    const productId = (await params).id;
    const category = await searchParams

    const product = await fetchProductById(productId)


    return (
        <div>
            <h1>ProductDetail</h1>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>


        </div>
    )
}

export default ProductDetailsPage