import { useNavigate } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

export function RedirectButton({label,to}){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(to);
    };
    return <button onClick={handleClick} type="button"
    className="rounded h-8 px-5 py-1 font-medium rounded-lg text-sm outline outline-offset-2 outline-1 outline-black">{label}</button>
}