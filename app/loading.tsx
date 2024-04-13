import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
        <Image src="/images/logo.png" width={300} height={300} alt='loading-logo'/>
    </div>
  )
}
