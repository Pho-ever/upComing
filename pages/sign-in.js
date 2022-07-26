import { useState } from 'react'
import Link from 'next/link'


const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <img className="logo" src="upcoming.png" alt="logo" />
                </div>
            </div>
            <div>
                <form className="sign-in-container">
                    <div className="sign-in-heading">SIGN IN</div>

                    <div className="email">
                        <input type='email' placeholder='Email or phone number' />
                    </div>

                    <div className="password">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                        />
                        <div
                            className={`${showPassword ? 'show-password' : 'hide-password'}`}
                            onClick={handlePasswordVisibility}
                        ></div>
                    </div>
                    <button>Sign In</button>
                    <div className="sign-in-help">
                        <div>
                            <input type="checkbox" name="" />
                            <label>Remember me</label>
                        </div>
                        <Link href="#">
                            <a>Need Help?</a>
                        </Link>
                    </div>
                    <div className="sign-up">
                        <p>New to Upcoming? </p>
                        <Link href="#">
                            <a> Sign up now</a>
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default SignIn;