import React from 'react'
import Wrapper from './Wrapper'
import { PrimaryButton } from './common/PrimaryButton'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='w-full py-4 fixed top-0 z-10'>
        <Wrapper className='flex items-center'>
            <section className='flex items-center flex-1 gap-[6rem]'>
                <h1 className='font-bold text-xl'>Set Health</h1>
                <ul className='flex items-center gap-12 *:font-semibold *:text-sm'>
                <Link href={"/"}> <li>Home</li></Link>
                    <li>Services</li>
                    <li>Reports</li>
                </ul>
            </section>
            <section>
                <button className='px-5 py-2 font-medium'>Sign up</button>
                <PrimaryButton>Sign in</PrimaryButton>
            </section>
        </Wrapper>
    </nav>
  )
}

