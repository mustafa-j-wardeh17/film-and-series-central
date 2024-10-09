

export default function Header() {


    return <>
        <nav className="flex w-full relative z-[50] border-b-[0.5px] border-neutral-500/40  justify-between items-center px-8">
            <h1
                className="logo "
                data-text="&nbsp;Makmovies&nbsp;"
            >
                <a
                    href="/"
                    className="text-decoration-none logoShadow text-[#222] hover:text-black transition-colors"
                >
                    &nbsp;Makmovies&nbsp;
                </a>
            </h1>

            <form
                action=""
                className="h-full"
            >
                <input
                    type="text"
                    placeholder="Search Movies..."
                    className="bg-transparent   text-white min-w-[300px] focus:outline-none focus:ring-0  shadow-red  rounded-lg py-1 px-2"
                />
            </form>
        </nav>
    </>
}

