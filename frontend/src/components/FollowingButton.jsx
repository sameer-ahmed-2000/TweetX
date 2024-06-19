import React from 'react';
import ReactDOM from 'react-dom';

export function FollowingButton({label,onClick}){
    return <button onClick={onClick} type="button"
    className="rounded h-8 w-24 px-4 py-1 font-medium rounded-m text-sm  text-custom-black">{label}</button>
}