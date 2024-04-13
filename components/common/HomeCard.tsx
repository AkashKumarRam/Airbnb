import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomeCard({ home }: { home: any }) {
    return (
        <Link href={`/home/${home.id}`}>
            <div>
                <Image
                    src={getImageUrl(home.image)}
                    width={100}
                    height={100}
                    alt={home.title}
                    className="w-full h-[300px] rounded-xl object-cover object-center"
                    unoptimized
                />
                <p className='font-semibold'>{home.city} , {home.country}</p>
                <p>{home.title}</p>
                <p>{home.price}</p>
            </div>
        </Link>
    )
}
