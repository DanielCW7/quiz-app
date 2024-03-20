
const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10">
            <ul className="m-auto max-w-7xl flex gap-5 justify-end py-5 px-5">
                <a href="/" className="text-white flex flex-col justify-center"><li> Home </li></a>
                <button className="bg-red-200 py-2 px-6 rounded "> Start </button>
            </ul>
        </nav>
    )
}

export default Nav