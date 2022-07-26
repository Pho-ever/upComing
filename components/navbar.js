import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                {/* <img src="logo.png" alt="logo" /> */}
            </div>
            <div>
                <Link href="/sign-in">
                    <a className="sign-in">Sign In</a>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;