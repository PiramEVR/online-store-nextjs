import React, {FC} from 'react';
import {ProductsType} from "../../types";
import Product from "./Product";

type PropsType = {
    products: ProductsType[]
}

const ProductFeed: FC<PropsType> = ({products}) => {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
            {products.map(({id, title, description, price, image, category}) => (
               <Product
                   key={id}
                   id={id}
                   title={title}
                   description={description}
                   price={price}
                   image={image}
                   category={category}
               />
            ))}
        </div>
    );
};

export default ProductFeed;