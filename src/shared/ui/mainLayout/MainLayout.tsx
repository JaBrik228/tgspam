import { ReactNode } from 'react'
import Menu from '../menu/Menu'

interface IProps {
    children?: ReactNode
}

function MainLayout({ children }: IProps) {
    return (
        // <div className="bg-gray-900 p-6 flex justify-center items-start min-h-screen font-sans">
        <div className="flex h-full">
            <aside className="w-56 border-r border-gray-200 bg-white">
                <Menu />
            </aside>
            <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
        // </div>
    )
}

export default MainLayout
