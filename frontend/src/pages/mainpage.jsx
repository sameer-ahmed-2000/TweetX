import { RecoilRoot } from "recoil"
import UserCard from "../components/Card"
import { Feed } from "../components/Feed"
import { NavigationBar } from "../components/NavigationBar"
import { Profile } from "../components/Profile"
import { User} from "../components/User"
import React from 'react';
import ReactDOM from 'react-dom';

export const Main=()=>{
    return(
        <div>
            <div className="py-1"></div>
            <RecoilRoot>
            <NavigationBar></NavigationBar>
            </RecoilRoot>
        </div>
        
    )
}