import { ReactNode } from 'react'

function ContainerLayout({ children }: { children: ReactNode }) {
    return (
        <div className='px-[100px] pt-6 dark:bg-[141D2E] text-white'>
            {children}
        </div>
    )
}

export default ContainerLayout