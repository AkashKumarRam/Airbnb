"use client"
import { categories } from '@/config/categories'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Categories.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Categories() {

    const router = useRouter()
    const params = useSearchParams()
    const [cate, setCate] = useState("")

    useEffect(() => {
        if (params?.get("category")) {
            setCate(params?.get("category")!);
        }
    }, [params])

    const handleClick = (name: string) => {
        const fullUrl = new URL(window.location.href)
        fullUrl.searchParams.set("category", name)
        router.replace(`/${fullUrl.search}`);
    }
    useEffect(() => {
        const handleKeyPress = (event: any) => {

            if (event.keyCode === 37 || event.keyCode === 39) {

                const container = document.querySelector(`.${styles.container}`);
                if (container) {
                    const scrollAmount = event.keyCode === 37 ? -50 : 50;
                    container.scrollLeft += scrollAmount;
                }
            }
        };


        window.addEventListener('keydown', handleKeyPress);


        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className={`${styles.container} flex items-center space-x-8 whitespace-nowrap px-10 my-3 overflow-x-auto pb-4`}>
            {
                categories.map((item, index) => (
                    <div key={index} className='flex cursor-pointer items-center flex-col' onClick={() => handleClick(item.name)}>
                        <Image src={item.icon} width={25} height={25} alt={item.name} />
                        <span
                            className={`${cate == item.name ? "inline-block border-b-4 border-brand" : ""
                                } text-sm`}
                        >{item.name}</span>
                    </div>
                ))
            }
        </div>
    )
}
