import Spinner from '@/components/Spinner'
import React from 'react'

const loading = () => {
    return (
        <div className='py-24 flex items-center justify-center'>
            <Spinner />
        </div>
    )
}

export default loading