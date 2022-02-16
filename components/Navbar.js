import cx from 'classnames';
import { Cancel, Menu } from 'iconoir-react';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css'

const navItems = [
    {
        label: 'About',
        url: '#about',
    },
    {
        label: 'Services',
        url: '#services',
    },
    {
        label: 'Contact',
        url: '#contact',
    },
]

function Navbar() {
    const [isActive, setIsActive] = useState(false)
    const itemClasses = cx(styles.navItem, { [styles.active]: isActive })

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navMenu}>
                <li
                    className={styles.navBrand}
                >
                    <Link href='/'>
                        Company Name
                    </Link>
                </li>
                {
                    navItems.map(item => (
                        <li
                            key={item.label}
                            className={itemClasses}
                        >
                            <Link href={item.url}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
                <li
                    className={styles.toggle}
                    onClick={() => setIsActive(!isActive)}
                >
                    {
                        !isActive ? (
                            <Menu strokeWidth={3} />
                        ) : (
                            <Cancel strokeWidth={3} />
                        )
                    }
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;