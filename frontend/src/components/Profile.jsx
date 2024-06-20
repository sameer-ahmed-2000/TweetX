import React from 'react';
import ReactDOM from 'react-dom';
import useUserProfile from '../hooks/useUserProfile';
import ProfileTab from './ProfileTab';


export const Profile=({userId})=>{

    const {profile, loading, error} = useUserProfile(userId);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error:{error.message}</div>
    return(
        <div className="md:grid grid-cols-7">
            <div className="col-span-2">

            </div>
            <div className="pb-8 col-span-3">
            <div className="flex items-center bg-white rounded-lg">
                <div className="  px-7 mr-4">
                    <div className=" w-20 h-20 border-2  rounded-full"></div>
                </div>
                <div className=" grid grid-rows-3">
                <div className="row-span-1"></div>
                    <div className="px-3 py-4 font-bold row-span-1 font-sans font-bold text-custom-black2">{profile.fullName}</div>
                    <div className="pt-3 text-sm text-custom-ash row-span-1">
                        <a className="px-3">Posts : {profile.postCount}</a>
                        <a className="px-3">Followers : {profile.followerCount}</a>
                        <a className="px-3">Following : {profile.followingCount}</a>
                    </div>
                </div>
            </div>
            <div className="flex items-center bg-white rounded-lg">
            <ProfileTab></ProfileTab>
            </div>
            
            </div>
            <div className="col-span-1">
            
            </div>
        </div>
    )
}