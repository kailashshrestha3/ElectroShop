import React from 'react'

const ReviewDetails = async ({ params }) => {
    const { id, reviewId } = await params
    return (
        <div>ReviewDetails: {id}, {reviewId}</div>
    )
}

export default ReviewDetails