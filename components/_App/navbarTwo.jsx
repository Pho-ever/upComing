import Link from 'next/link'
import { useState } from "react"



const NavbarTwo = () => {

    const [isDropdown, setIsDropdown] = useState(false);

    return (
        <>
            <div className="navbar-two">
                <div className="navbar-two-header">
                    {/* <img className="logo" src="upcoming.png" alt="logo" /> */}
                    <ul>
                        <li>
                            <Link href="/Home">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <p onClick={() => setIsDropdown(!isDropdown)}
                            onMouseEnter={() => setIsDropdown(true)}
                            onMouseLeave={() => setIsDropdown(false)}
                            >Year</p>
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
        </>
    );
}

export default NavbarTwo;