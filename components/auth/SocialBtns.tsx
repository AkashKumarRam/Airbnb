
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from 'react-toastify';


export default function SocialBtns() {

    const supabase = createClientComponentClient()

    const githubLogin = async () => {

        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: `${location.origin}/auth/callback`
            }
        })
        if(error){
            toast.error(error.message,{theme:"colored"})
        }
    }

    const googleLogin = async () => {

        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${location.origin}/auth/callback`
            }
        })
        if(error){
            toast.error(error.message,{theme:"colored"})
        }
    }
    return (
        <div>
            <Button variant="outline" className='w-full' onClick={googleLogin}>
                <Image src="/images/google.png" width={25} height={25} alt='google-logo' className='mr-5' />
                Continue with Google
            </Button>

            <Button variant="outline" className='w-full mt-5' onClick={githubLogin}>
                <Image src="/images/github.png" width={25} height={25} alt='google-logo' className='mr-5' />
                Continue with Github
            </Button>
        </div>
    )
}
