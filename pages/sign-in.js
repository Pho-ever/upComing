import Navbar from '../components/navbar'
import { useState } from 'react'


const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container">
            <Navbar />
            <div>
                <form className="sign-in-container">
                    <div className="sign-in-heading">SIGN IN</div>
                    {/* EMAIL INPUT */}
                    <div className="email">
                        <input type='email' placeholder='Email or phone number' />
                    </div>
                    {/* PASSWORD */}
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
                    <button>LOGIN</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;