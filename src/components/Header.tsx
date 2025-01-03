'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { BiSearch } from "react-icons/bi"
import { FaBars, FaStar } from "react-icons/fa"
import { IoClose } from "react-icons/io5"

export default function Header({ allData }: { allData: any[] }) {
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

    // search function by title of the movie
    const [movieShortname, setMovieShortname] = useState('')
    const [searchResult, setSearchResult] = useState<any[]>([])

    useEffect(() => {
        if (!movieShortname.trim()) {
            setSearchResult([])
            return
        }
        const filteredMovies = allData.filter(movie => movie.title.trim().toLowerCase().includes(movieShortname.toLowerCase().trim()))
        setSearchResult(filteredMovies)
    }, [movieShortname])

    const handleMovieClick = () => {
        setMovieShortname('')
    }
    const searchRef = useRef<HTMLDivElement | null>(null); // Set correct type here

    // to close search nav when click outside of it
    const handleClickOutside = (event: MouseEvent) => {
        if (searchRef.current && !searchRef.current?.contains(event.target as Node)) {
            setMovieShortname('')
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])
    // const handleClick = () => {
    //     setClicked(!clicked)
    // }
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
        <nav className="header pb-2 md:px-[30px] px-[2px]">
            <h1
                className="logo 3xs:text-[28px] text-[24px]"
                data-text="&nbsp;Cinema Center&nbsp;"
            >
                <a
                    href="/"
                >
                    &nbsp;Cinema Center&nbsp;
                </a>
            </h1>

            <form
                action=""
                className={searchBar ? 'search_bar relative  active' : 'search_bar'}
            >
                <input
                    value={movieShortname}
                    onChange={(e) => setMovieShortname(e.target.value)}
                    type="text"
                    placeholder="Search Movies..."
                    className="bg-transparent   text-white min-w-[300px] focus:outline-none focus:ring-0  shadow-red  rounded-lg py-1 px-2"
                />
                <div
                    className="searchclose"
                    onClick={handleSearchbarClose}
                >
                    <IoClose />
                </div>
                {
                    movieShortname && (
                        <div ref={searchRef} className="search_results">
                            <h2>---:Search Result:---</h2>
                            <ul>
                                {
                                    searchResult.length > 0
                                        ? (
                                            searchResult.slice(0, 12).map((movie) => (
                                                <Link
                                                    key={movie}
                                                    href={`/movies/${movie.slug}`}
                                                    onClick={handleMovieClick}
                                                >
                                                    <div
                                                        className="moviesearchlist"
                                                    >
                                                        <div className="h-auto">
                                                            <Image
                                                                src={movie.bgposter}
                                                                alt={`img ${movie}`}
                                                                height={110}
                                                                width={80}
                                                                className="h-full object-cover"
                                                            />
                                                        </div>
                                                        <div className="searchbarinfo">
                                                            <h5>{movie.title.slice(0, 21) + (movie.title.length > 21 && "...")}</h5>
                                                            <h4 className="flex items-center">Rating: <FaStar size={13} /><span>{movie.rating}</span></h4>
                                                            <h4>Release Year: {movie.year}</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                        )
                                        : (
                                            <p>
                                                No Data Found
                                            </p>
                                        )
                                }
                            </ul>
                        </div>
                    )
                }
            </form>
            {/* Mobile */}
            <div id={navbar ? 'navbaractive' : 'navbar'}>
                <div className="navlogomovie">
                    <div className="flex justify-between relative items-center w-full">
                        <h1
                            className="logo"
                            data-text="&nbsp;Cinema Center&nbsp;"
                        >
                            <a
                                href="/"
                            >
                                &nbsp;Cinema Center&nbsp;
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

            <div className="mobile">
                <BiSearch
                    className="opensearchsvg"
                    onClick={handleSearchbarOpen}
                />
                <FaBars
                    onClick={handleNavbarOpen}
                />
            </div>
        </nav>
    </>
}

