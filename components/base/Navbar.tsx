import React from 'react'
import BrandLogo from './BrandLogo'
import NavMenu from './NavMenu'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from 'next/link'
import SearchSheet from '../common/SearchSheet'


const Navbar = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data, error } = await supabase.auth.getSession()
  return (
    <div className='flex items-center justify-between px-4 md:px-10 border-b-[1px]'>
      <div className='hidden md:block'>
        <BrandLogo />
      </div>

      <div className='w-full md:w-auto'>
        <SearchSheet session={data?.session?.user} />
      </div>




      <div className='hidden md:flex items-center space-x-4'>
        <Link href="/addhome"><span>Add Your Home</span></Link>
        <NavMenu session={data?.session?.user} />
      </div>
    </div>
  )
}

export default Navbar