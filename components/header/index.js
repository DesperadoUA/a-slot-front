import header from './style.module.css'
import Link from 'next/link'
export default function Header() {
    return (
        <header className={header.header}>
            <div className={`${header.container} container`}>
                <div className={header.nav}>
                    <nav className={header.menu_wrapper}>
                        <ul className={header.menu}>
                            <li className={header.menu_item}>
                                <Link href='/'>
                                   <a>Главная</a>
                                </Link>
                            </li>
                            <li className={header.menu_item}>
                                <Link href='/casino'>
                                   <a>Казино</a>
                                </Link>
                            </li>
                            <li className={header.menu_item}>
                                <Link href='/bonus'>
                                   <a>Бонусы</a>
                                </Link>
                            </li>
                            <li className={header.menu_item}>
                                <Link href='/game'>
                                   <a>Игры</a>
                                </Link>
                            </li>
                            <li className={header.menu_item}>
                                <Link href='/poker'>
                                   <a>Покер</a>
                                </Link>
                            </li>
                            <li className={header.menu_item}>
                                <Link href='/betting'>
                                   <a>Ставки</a>
                                </Link>
                            </li>
                        </ul>
                        <div className={header.search}>
                            <img src='/img/search.svg' alt="search"/>
                        </div>
                    </nav>
                </div>
                <div className={header.user}>
                    <img src='/img/man.svg' alt="man"/>
                </div>
            </div>
        </header>
    )
  }