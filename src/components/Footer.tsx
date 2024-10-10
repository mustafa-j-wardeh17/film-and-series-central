import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className='w-full bg-[#0f0d0dd2] h-auto mt-[50px]'>
                <section className="m-auto max-w-[1300px] h-full flex flex-col items-center justify-center text-white bg-[#0f0d0dd2]">
                    <div className="flex items-center justify-center flex-col p-[20px]">
                        <div className="flogo" >
                            <h1 >
                                <Link
                                    href={'/'}
                                    className=" hover:text-[#ff0000b4] text-red-500 "
                                >
                                    Makemovies
                                </Link>
                            </h1>
                        </div>

                        <ul className="list-none flex items-center justify-center gap-[25px] flex-wrap mt-[20px]">
                            <li className="text-[18px] cursor-pointer">
                                <Link href={'/'}
                                    className="text-white hover:text-[#ff0000d9] hover:border-b-[1px] hover:border-red-500 transition-all duration-300"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="text-[18px] cursor-pointer">
                                <Link href={'/movies'}
                                    className="text-white hover:text-[#ff0000d9] hover:border-b-[1px] hover:border-red-500 transition-all duration-300"
                                >
                                    Movies
                                </Link>
                            </li>
                            <li className="text-[18px] cursor-pointer">
                                <Link href={'/series'}
                                    className="text-white hover:text-[#ff0000d9] hover:border-b-[1px] hover:border-red-500 transition-all duration-300"
                                >
                                    Series
                                </Link>
                            </li>
                            <li className="text-[18px] cursor-pointer">
                                <Link href={'/gere'}
                                    className="text-white hover:text-[#ff0000d9] hover:border-b-[1px] hover:border-red-500 transition-all duration-300"
                                >
                                    Genre
                                </Link>
                            </li>
                            <li className="text-[18px] cursor-pointer">
                                <Link href={'/all'}
                                    className="text-white hover:text-[#ff0000d9] hover:border-b-[1px] hover:border-red-500 transition-all duration-300"
                                >
                                    All Movies
                                </Link>
                            </li>
                            <li className="text-[18px] cursor-pointer">
                                <Link href={'/category'}
                                    className="text-white hover:text-[#ff0000d9] hover:border-b-[1px] hover:border-red-500 transition-all duration-300"
                                >
                                    Category
                                </Link>
                            </li>
                            <li className="text-[18px] cursor-pointer">
                                <Link href={'/bollywood'}
                                    className="text-white hover:text-[#ff0000d9] hover:border-b-[1px] hover:border-red-500 transition-all duration-300"
                                >
                                    Bollywood
                                </Link>
                            </li>
                            <li className="text-[18px] cursor-pointer">
                                <Link href={'/hollywood'}
                                    className="text-white hover:text-[#ff0000d9] hover:border-b-[1px] hover:border-red-500 transition-all duration-300"
                                >
                                    Hollywood
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="p-[20px] flex items-center justify-center flex-wrap">
                        <p className="text-center py-[10px] border-b-[1px] border-[#ffffff5d]">
                            Copyright &copy; 2024 All rights reserved | by&nbsp;
                            <Link
                                className="text-red-500 hover:border-b-[1px] hover:border-red-500"
                                href={'/'}
                            >
                                Makemovies
                            </Link>
                        </p>
                    </div>
                    <div className="mt-[20px] bg-[#0f0d0dd2] p-[20px] text-center">
                        <p className="text-[#555]">
                            Disclaimer :- We Does not host any files on it's servers. All files or contents hosted on third party websites | we does not accept responsibility for contents hosted on third party websites. we just index those links which are already available in internet.
                        </p>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer