import { ReactNode } from 'react'

interface IProps {
    icon: ReactNode
    title: string
    href: string
}

function NavItem({ icon, title, href }: IProps) {
    return (
        <li>
            <a
                href={href}
                className="flex items-center gap-3 px-6 py-3 text-blue-600 font-semibold bg-blue-50 rounded-r-full"
            >
                {icon}
                <span>{title}</span>
            </a>
        </li>
    )
}

export default NavItem
