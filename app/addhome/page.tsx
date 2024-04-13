import AddHomeForm from '@/components/AddHomeForm'
import Navbar from '@/components/base/Navbar'
import Counter from '@/components/common/Counter'
import { generateRandomNumber } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddHome() {
    return (
        <div>
            <ToastContainer/>
            <Navbar />

            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-4'>
                    <div>
                        <h1 className='text-brand font-bold text-7xl'>Airbnb It</h1>
                        <p className='text-3xl text-black font-semibold'>You could earn</p>
                        <div className='flex space-x-4 items-center'>
                            <Counter num={generateRandomNumber()} />
                            <span className='text-3xl font-bold'>/per night</span>
                        </div>

                        <div className='flex space-x-4 mt-5'>
                            <Image src="/images/home_img.jpeg" width={200} height={200} alt='room1' className='rounded-md object-cover' />
                            <Image src="/images/home_img1.jpeg" width={200} height={200} alt='room1' className='rounded-md object-cover' />
                        </div>

                    </div>


                    <AddHomeForm />

                </div>
            </div>
        </div>
    )
}
