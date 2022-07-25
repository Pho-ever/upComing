// import styles from '../public/css/styles.css'
import Link from 'next/Link'

const Navbar = () => {
    return (
        <div className="navbar">
            <div>LOGO</div>
            <div>
                <Link href="#">
                    <a className="sign-in">Sign In</a>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;