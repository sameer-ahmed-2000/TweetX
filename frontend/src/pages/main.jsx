import { RecoilRoot } from "recoil"
import UserCard from "../components/Card"
import { Feed } from "../components/Feed"
import { NavigationBar } from "../components/NavigationBar"
import { Profile } from "../components/Profile"
import { User} from "../components/User"

export const Main=()=>{
    return(
        <div>
            <NavigationBar></NavigationBar>
            <div className="py-1"></div>
            <RecoilRoot>
                {/* <User></User> */}
            <Profile></Profile>
            </RecoilRoot>
            
            {/* <User></User> */}
            {/* <Feed></Feed> */}
        </div>
        
    )
}