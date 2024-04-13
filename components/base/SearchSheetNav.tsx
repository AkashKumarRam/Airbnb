import React from 'react'
import BrandLogo from './BrandLogo'
import { Input } from '../ui/input'
import NavMenu from './NavMenu'
import Link from 'next/link'

export default function SearchSheetNav({ session, searchInputCallback }: { session: any, searchInputCallback: (value: string) => void }) {


    return (
        <div className='flex justify-between items-center md:px-10'>
            <div className='hidden md:block'>
                <BrandLogo />
            </div>

            <Input className='w-full md:w-1/3 rounded-3xl p-5' placeholder='Search by country ...' onChange={(event) => searchInputCallback(event.target.value)} />

            <div className='hidden md:flex items-center space-x-4'>
                <Link href="/addhome"><span>Add Your Home</span></Link>
                <NavMenu session={session} />
            </div>
        </div>
    )
}
