import React, { ReactNode } from 'react'

function ContainerLayout({ children }: { children: ReactNode }) {
    return (
        <div className='px-[100px] mt-6'>
            {children}
        </div>
    )
}

export default ContainerLayout