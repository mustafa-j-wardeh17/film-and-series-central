

export default function Header() {


    return <>
        <nav className="flex w-full relative z-[50] border-b-[0.5px] border-neutral-500/40 py-2 justify-between items-center px-8">
            <h1
                className="logo cursor-pointer relative text-[25px] tracking-widest text-[#222] box-border text-left"
                data-text="&nbsp;Makmovies&nbsp;"
            >
                <a
                    href="/"
                    className="text-decoration-none text-[#222] hover:text-black transition-colors"
                >
                    &nbsp;Makmovies&nbsp;
                </a>
            </h1>

            <form
                action=""
                className=""
            >
                <input
                    type="text"
                    placeholder="Search Movies..."
                    className="bg-transparent shadow-md text-white min-w-[300px] focus:outline-none focus:ring-0 shadow-red-500 rounded-lg py-1 px-2"
                />
            </form>
        </nav>
    </>
}

