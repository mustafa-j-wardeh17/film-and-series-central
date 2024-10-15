'use client'

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { IoClose } from "react-icons/io5"

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('')
    const router = useRouter()
    const pathname = usePathname()

    const [clicked, setClicked] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const [searchBar, setSearchBar] = useState(false)
    const [activeLink, setActiveLink] = useState('/')

    // navbar sticky comp
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('nav')
            header?.classList.toggle("sticky", window.screenY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleClick = () => {
        setClicked(!clicked)
    }
    const handleLinkClick = (link: string) => {
        setActiveLink(link)
        setClicked(false)
    }

    useEffect(() => {
        setActiveLink(pathname)
    }, [pathname])

    // navbar
    const handleNavbarOpen = () => {
        setNavbar(!navbar)
    }

    const handleNavbarClose = () => {
        setNavbar(false)
    }


    // searchbar

    const handleSearchbarOpen = () => {
        setSearchBar(!searchBar)
    }
    const handleSearchbarClose = () => {
        setSearchBar(false)
    }
    return <>
        <nav className="header">
            <h1
                className="logo "
                data-text="&nbsp;Makmovies&nbsp;"
            >
                <a
                    href="/"
                >
                    &nbsp;Makmovies&nbsp;
                </a>
            </h1>

            <form
                action=""
                className="search_bar"
            >
                <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    placeholder="Search Movies..."
                    className="bg-transparent   text-white min-w-[300px] focus:outline-none focus:ring-0  shadow-red  rounded-lg py-1 px-2"
                />
            </form>
            {/* Mobile */}
            <div id={navbar ? 'navbaractive' : 'navbar'}>
                <div className="navlogomovie">
                    <div className="navlogomovie">
                        <h1
                            className="logo"
                            data-text="&nbsp;Makmovies&nbsp;"
                        >
                            <a
                                href="/"
                            >
                                &nbsp;Makmovies&nbsp;
                            </a>
                        </h1>
                        <div
                            className="navclosesvg"
                            onClick={handleNavbarClose}
                        >
                            <IoClose />
                        </div>
                    </div>
                </div>
                <ul
                    className={clicked ? "navbar active" : "navbar"}
                    onClick={handleNavbarClose}
                >
                    <li>
                        <Link
                            className={activeLink === '/' ? 'active' : ''}
                            href={'/'}
                            onClick={() => handleLinkClick('/')}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={activeLink === '/movies' ? 'active' : ''}
                            href={'/movies'}
                            onClick={() => handleLinkClick('/movies')}
                        >
                            Movies
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={activeLink === '/series' ? 'active' : ''}
                            href={'/series'}
                            onClick={() => handleLinkClick('/series')}
                        >
                            Series
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={activeLink === '/bollywood' ? 'active' : ''}
                            href={'/bollywood'}
                            onClick={() => handleLinkClick('/bollywood')}
                        >
                            Bollywood
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={activeLink === '/hollywood' ? 'active' : ''}
                            href={'/hollywood'}
                            onClick={() => handleLinkClick('/hollywood')}
                        >
                            Hollywood
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={activeLink === '/contact' ? 'active' : ''}
                            href={'/contact'}
                            onClick={() => handleLinkClick('/contact')}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>


        </nav>
    </>
}

