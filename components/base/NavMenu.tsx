import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { MenuIcon } from 'lucide-react'
import LoginModal from '../auth/LoginModal'
import SignupModal from '../auth/SignupModal'
import SignOutBtn from '../common/SignOutBtn'
import Link from 'next/link'


export default function NavMenu({ session }: { session: object | undefined }) {
    return (
        <Popover>
            <PopoverTrigger asChild className='cursor-pointer'><MenuIcon /></PopoverTrigger>
            <PopoverContent className='mr-6'>
                <ul>
                    {session ? (
                        <>
                            <Link href="/dashboard">
                                <li className="hover:bg-gray-200 rounded-md p-2 cursor-pointer">
                                    Dashboard
                                </li>
                            </Link>



                            <SignOutBtn />
                        </>
                    ) : (
                        <>
                            <LoginModal />
                            <SignupModal />
                        </>
                    )}
                </ul>
            </PopoverContent>
        </Popover>

    )
}
