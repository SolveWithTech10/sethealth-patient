import React, { ReactNode } from 'react'

export default function Wrapper({children, className}:{children:ReactNode, className?:string}) {
    const styles = `max-w-[75rem] w-full mx-auto px-5 ${className}`
  return (
    <div className={styles}>
        {children}
    </div>
  )
}
