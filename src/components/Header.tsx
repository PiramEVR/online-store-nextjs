import React from 'react';
import Image from 'next/image'
import goabayLogo from '../../public/goabayLogo.png'
import {MagnifyingGlassIcon, ShoppingCartIcon, Bars4Icon} from '@heroicons/react/24/outline'
import {signIn, signOut, useSession} from 'next-auth/react'

const Header = () => {
    return (
        <header>
            {/*Top nav*/}
            <div className='flex items-center bg-goa_blue p-1 grow py-2'>
                {/*Logo*/}
                <div className='mt-2 ml-3 sm:ml-6 flex items-center grow '>
                    <Image
                        alt={'goabay'}
                        src={goabayLogo}
                        width={110}
                        height={40}
                        object-fit='contain'
                        className='cursor-pointer '
                        priority
                    />
                </div>
                {/*Search*/}
                     {/*<div className='hidden sm:flex items-center h-10 rounded-md ml-3 flex-grow bg-orange-400 hover:bg-orange-500 '>*/}
                     {/*    <input className='p-2 w-6 grow shrink rounded-l-md focus:outline-none px-4' type="text"/>*/}
                     {/*    <MagnifyingGlassIcon className='h-12 p-4 cursor-pointer'/>*/}
                     {/*</div>*/}
                {/*Right*/}
                <div className='flex items-center space-x-3 sm:space-x-6 mx-3 sm:mx-6'>
                    <div onClick={()=>signIn()} className='link'>
                        <p>
                            Piram
                        </p>
                    </div>
                    <div className='link'>
                        <p>Orders</p>
                    </div>
                    <div className='relative link flex items-center'>
                        <span
                            className='absolute top-0 right-0 sm:right-14 text-xs h-4 w-4 bg-orange-400 text-center rounded-full font-bold'>
                            0
                        </span>
                        <ShoppingCartIcon className='h-9 sm:h-10 pr-1'/>
                        <p className='hidden sm:inline'> Basket</p>
                    </div>
                </div>
            </div>
            {/*Bottom nav*/}
            <div className='flex items-center bg-goa_blue-light h-10 space-x-3 px-6'>
                <p className='link flex items-center'>
                    <Bars4Icon className='h-6 mr-1'/>
                </p>
                {/*Search*/}
                <div className='flex items-center h-6 rounded-md ml-3 flex-grow bg-orange-400 hover:bg-orange-500 '>
                        <input className='grow shrink rounded-l-md focus:outline-none px-4 ' type="text"/>
                        <MagnifyingGlassIcon className='h-11 p-4 cursor-pointer'/>
                </div>
                <p>Валюта</p>
                <p>English</p>
            </div>
        </header>
    );
};

export default Header;