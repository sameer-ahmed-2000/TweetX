import UserCard from "./Card"

export const Feed=()=>{
    return(
    <div className="md:grid grid-cols-9">
        <div className="col-span-3">

        </div>
        <div className="pl-8 col-span-3">
            <UserCard></UserCard>
        </div>
        <div className="col-span-1">

        </div>
    </div>
    
)
}