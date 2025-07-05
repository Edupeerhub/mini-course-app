import React from "react";

function Register () {


    return (
        <>
            <div className="flex">
                <div className="w-[620px]">
                    <img className="" src="/books-ladder.jpg" alt="" />
                </div>
                <div className="w-[630px] p-24" >
                    <h1 className="w-[400px] font-bold text-xl text-center">Register</h1>
                    <form>
                        <label>First Name</label>
                        <input type="text" />
                        <label>Last Name</label>
                        <input type="text" />
                        <label>Email</label>
                        <input type="email" />
                        <label>State of Residence</label>
                        <input type="text" />
                        <label>Date of Birth </label>
                        <input type="date" />
                        <label>Phone Number</label>
                        <input type="number" />
                        <label>Password</label>
                        <input type="password" />
                        <label>Confirm Password</label>
                        <input type="password" />
                        <label>how did you hear about us?</label>
                        <input type="text" />
                        <p>By clicking signup, you have agreed to the <a href="https://www.google.com">Terms of Use</a> and acknowledge the <a href="">Privacy Policy</a> </p>

                        <input className="mt-[30px] bg-blue-500 text-white rounded-lg" type="button" value="Signup" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;