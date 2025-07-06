import React from "react";

function Login() {
    return (
        <>
            <div className="flex h-screen">
                <div className="w-[600px] bg-gray-200 h-screen">
                    <img className="w-170" src="/books.png" alt="" />
                    <h1 className="mt-[-50px] text-2xl font-bold text-center">Connecting Bright Minds to Brighter Futures</h1>
                </div>
                <div className="w-[600px] p-24 mt-[40px]" >
                    <h1 className="w-[400px] font-bold text-4xl">Sign In</h1>
                    <p className="mt-[1em] text-orange-500">Enter your email address and password to securely log in to EdupeerHub Portal</p>
                    <form className="mt-[1em]"> 
                        <div className="">
                            <label className="text-2xl">Email</label>
                            <input type="email" />
                        </div>
                        <label className="text-2xl">Password</label>
                        <input type="password" />
                        <input className="mt-[3em] font-bold " type="button" value="Proceed to Dashboard" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;