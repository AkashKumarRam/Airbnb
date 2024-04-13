import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Navbar from '@/components/base/Navbar'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Eye } from 'lucide-react'
import Image from 'next/image'
import { getImageUrl } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import DeleteHomeBtn from '@/components/DeleteHomeBtn'
import Toast from '@/components/common/Toast'
import Link from 'next/link'


export default async function Dashboard() {

    const supabase = createServerComponentClient({ cookies })

    const user = await supabase.auth.getUser()

    const { data: homes, error } = await supabase.from("homes").select("id,image,title,country,city,price,created_at").eq("user_id", user.data.user?.id)

    return (
        <div>
            <Toast />
            <Navbar />

            <div className='container mt-5'>
                <Table>
                    <TableCaption>Your added homes.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Country</TableHead>
                            <TableHead>City</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Image</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {homes && homes.map((item) => (
                            <TableRow>
                                <TableCell>{item.country}</TableCell>
                                <TableCell>{item.city}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>
                                    <Image
                                        src={getImageUrl(item.image)}
                                        width={40}
                                        height={40}
                                        alt="Home_img"
                                        className="rounded-full w-10 h-10"
                                    />
                                </TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>
                                    <div className='flex space-x-2'>
                                        <DeleteHomeBtn id={item.id} />

                                        <Link href={`/home/${item.id}`}><Button size="icon" className='bg-green-400'><Eye /></Button></Link>

                                    </div>
                                </TableCell>

                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </div>


        </div>
    )
}
