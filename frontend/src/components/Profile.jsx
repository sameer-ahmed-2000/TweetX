

import ProfileTab from './ProfileTab';


export const Profile=()=>{

    return(
        <div className="md:grid grid-cols-7">
            <div className="col-span-2">

            </div>
            <div className="col-span-3">
            <div className="flex items-center bg-white rounded-lg">
                <div className="  px-7 mr-4">
                    <div className=" w-20 h-20 border-2  rounded-full"></div>
                </div>
                <div className=" grid grid-rows-3">
                <div className="row-span-1"></div>
                    <div className="px-3 py-4 font-bold row-span-1 font-sans font-bold text-custom-black2">Arjun Reddy</div>
                    <div className="pt-3 text-sm text-custom-ash row-span-1">
                        <a className="px-3">100 Posts</a>
                        <a className="px-3">100 Posts</a>
                        <a className="px-3">100 Posts</a>
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