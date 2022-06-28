const Header = () => {
    return (
    <header className="h-20 flex items-center w-full">
        <div className="float-left ml-10 w-3/5 cursor-pointer">Logo</div>
        <nav className="w-2/5 float-right">
            <ul className="flex justify-around font-thin mx-10">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Borrow</li>
                <li className="cursor-pointer">Offer</li>
                <li className="cursor-pointer">Ask</li>
            </ul>
        </nav>
        <div className="mr-10 cursor-pointer">Account</div>
    </header>)
}

export default Header