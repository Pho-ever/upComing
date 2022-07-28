import Link from 'next/link'
// import Image from 'next/image'


const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img className="logo" src="upcoming.png" alt="logo" />
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