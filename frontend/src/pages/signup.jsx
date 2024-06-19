import { FunctionButton } from '../components/FunctionButton';
import { InputBox } from "../components/InputBox.1";
import { PasswordBox } from '../components/PasswordBox';
import { RedirectButton } from '../components/RedirectButton';
import { useSignup } from '../hooks/useSignup';
import React from 'react';
import ReactDOM from 'react-dom';

export const Signup=()=>{
    const {
        username,
        setUsername,
        fullName,
        setFullname,
        confirmpassword,
        setConfirmpassword,
        password,
        setPassword,
        loading,
        error,
        handleSignup
    }=useSignup();
    return <div >
        <div className="py-6 px-8 font-sans font-semibold text-custom-red">TweetX</div>
        <div className="px-8">
        <RedirectButton label={"Login"} to={'/signin'}/>
        <div className="grid grid-cols-9">
        <div className="col-span-3 ">
            <div className="py-14 font-sans font-bold text-custom-black">
                Create Account
            </div>
            
            <InputBox onChange={(e)=> setFullname(e.target.value)} placeholder={"Name"} />
            <InputBox onChange={(e)=> setUsername(e.target.value)} placeholder={"Email"} />
            <PasswordBox placeholder={"Password"} onChange={(e)=>setPassword(e.target.value)}/>
            <PasswordBox placeholder={"Confirm Password"} onChange={(e)=>setConfirmpassword(e.target.value)}/>
            {error && <div className="text-red-500 text-sm pt-2">{error}</div>}
            <div className="flex justify-end items-center py-0">
            <FunctionButton onClick={handleSignup} label={loading?"Signing up...":"Sign up"}/>
            </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-5" >
        <img className="py-2 w-21 h-21 mx-auto mb-10 rounded-lg float-right" src="./src/images/image.png" alt="Image description" />
        </div>
        </div>
    </div>
    </div>
}