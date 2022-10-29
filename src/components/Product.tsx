import React, {FC, useState} from 'react';
import Image from 'next/image'
import {ProductsType} from "../../types";
import StarIconOutline from '@heroicons/react/24/outline/StarIcon'
import StarIconSolid from '@heroicons/react/24/solid/StarIcon'
import Currency from 'react-currency-formatter'
import {rule} from "postcss";

type PropsType = ProductsType

const Product: FC<PropsType> = ({
                                    id,
                                    title,
                                    description,
                                    price,
                                    image,
                                    category
                                }) => {
    const [rating, setRating] = useState(4)
    const [hasPrime, setHasPrime] = useState(false)
    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 italic text-gray-400'>{category}</p>
            <div className='flex items-center justify-center h-52'>
                <Image
                    src={image}
                    height={150}
                    width={150}
                    alt={title}
                    object-fit='contain'
                    style={{
                        width: 'auto',
                        height: '100%',
                    }}
                />
            </div>

            <h4 className='my-3'>{title}</h4>
            <div className='flex'>
                {[...Array(5)]
                    .map((_, i) => (
                        i < rating ?
                            <StarIconSolid className='h-5 cursor-pointer text-orange-400'/>
                            :
                            <StarIconOutline className='h-5 cursor-pointer text-orange-400'/>
                    ))}
            </div>
            <p className='text-xs my-2 line-clamp-2'>{description}</p>
            <div className='mb-5'>
                <Currency quantity={price} currency={'rub'}/>
            </div>
            <button className='mt-auto button'>Add to Basket</button>
        </div>
    );
};

export default Product;