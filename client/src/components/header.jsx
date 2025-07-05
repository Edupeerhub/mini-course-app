import React from "react";
import { useNavigate } from "react-router-dom";
import Register from "./register";

function Header() {
    const navigate = useNavigate()
    return (
        <>
            <h1 className="text-3xl font-bold underline">Welcome to the course app</h1>
            <div className="auth-buttons">
                <button 
                    className="w-20 text-white bg-green-600 p-2 rounded-lg text-sm"
                    onClick={() => navigate('/register')}
                >
                    Register
                </button>
                <button 
                    className="w-20 text-white m-4 p-2 bg-green-600 rounded-lg text-sm"
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </div>
        </>
    )
}

export default Header;