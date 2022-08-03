import Link from 'next/link'
import { useState } from "react"


const NavbarTwo = () => {

    const [isDropdown, setIsDropdown] = useState(false);
    // const [scroll , setIsScroll] = useState(false);

    // The blur effect onscroll
    // const changeNavbarColor = () => {
    //     if (window.scrollY >= 100) {
    //         setIsScroll(true)
    //     }
    //     else {
    //         setIsScroll(false)
    //     }
    // }
        // window.addEventListener('scroll', changeNavbarColor)

    return (
        <>
            {/* <div className={scroll ? "navbar-two navbar-blur" : "navbar"}> */}
            <div className="navbar-two">
                <div className="navbar-two-header">
                    <a>
                        {/* <img className="logo" src="upcoming.png" alt="logo" /> */}
                    </a>
                    <ul>
                        <li>
                            <Link href="/Home">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Home">
                                <a>House</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Home">
                                <a>Tree</a>
                            </Link>
                        </li>
                        <li>
                            <p onClick={() => setIsDropdown(!isDropdown)}
                            onMouseEnter={() => setIsDropdown(true)}
                            onMouseLeave={() => setIsDropdown(false)}
                            >Year</p>
                            { isDropdown && <div className="navbar-two-years"  
            onMouseEnter={() => setIsDropdown(true)}
            onMouseLeave={() => setIsDropdown(false)}
            >
                <div className="navbar-years-list">
                <Link href="#">
                                <a>2022</a>
                            </Link>
                            <Link href="#">
                                <a>2023</a>
                            </Link>
                            <Link href="#">
                                <a>2024</a>
                            </Link>
                </div>
                    
                        </div>}
                        </li>
                        
                    </ul>
                    
                </div>
                <div className="navbar-two-header">
                    <ul>
                        <li>
                            <Link href="#">
                                <a>Search</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Notification</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Account</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </>
    );
}

export default NavbarTwo;