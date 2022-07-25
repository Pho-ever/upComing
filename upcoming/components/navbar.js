import Link from 'next/Link'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                {/* <img src="logo.png" alt="logo" /> */}
            </div>
            <div>
                <Link href="#">
                    <a className="sign-in">Sign In</a>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;