import { FollowingButton } from "./FollowingButton";

export const User=()=>{
    const followers = [
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
        { name: 'Arjun Reddy', following: 200 },
    ];
    return(
        <div className="md:grid grid-cols-9">
            <div className="col-span-3">

            </div>
            <div className="pl-8 col-span-3">
                <div>
                    <div>
                    <div>
                        {followers.map((follower, index) => (
                            <div key={index} className="flex items-center justify-between py-2 ">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 border-2 rounded-full"></div>
                                    <div className="ml-3">
                                        <div className="font-sans font-bold text-custom-black2">{follower.name}</div>
                                        <div className="text-sm text-custom-ash">Following: {follower.following}</div>
                                    </div>
                                </div>
                                <FollowingButton label={'Following'}></FollowingButton>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">

            </div>
        </div>
        
    )
}