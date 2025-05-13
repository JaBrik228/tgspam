import menu from '@shared/config/menu.config'
import NavItem from '../navItem/NavItem'

function Menu() {
    const items = menu.map((navItemProps) => <NavItem {...navItemProps} />)

    return (
        <nav className="pt-8">
            <ul className="space-y-2">{items}</ul>
        </nav>
    )
}

export default Menu
