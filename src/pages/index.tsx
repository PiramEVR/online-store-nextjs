import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import {GetServerSideProps} from "next";
import {ProductsType} from "../../types";

type PropsType = {
    products: ProductsType[]
}

export default function Home({products}: PropsType) {
    return (
        <div className='bg-gray-100'>
            <Head>
                <title>Goabay</title>
            </Head>
            <Header/>
            <main className='max-w-screen-2xl mx-auto'>
                {/*Banner*/}
                <Banner/>
                {/*ProductFeed*/}
                <ProductFeed products={products}/>
            </main>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()
    return {
        props: {
            products
        }
    }
}

