import React from 'react';

const UserCard = () => {
    return (
        <div className=" p-4 rounded-lg shadow-md max-w-2xl relative">
        <div className="absolute right-0 top-16 w-5 h-10 bg-custom-red rounded-l-full"></div>

        <div className="flex items-center space-x-4">
            <div className="rounded-full h-12 w-12 border-2 flex items-center justify-center overflow-hidden">
            {/* <span className="text-sm text-gray-500">Image</span> */}
            </div>
            <div className="flex-1 min-w-0">
            <p className="pt-2 text-lg font-medium text-custom-black truncate">Arjun Reddy</p>
            <p className="pl-64 text-sm text-gray-500 whitespace-nowrap">10 mins ago</p>
            </div>
        </div>
        <div className="mt-3">
            <p className="pl-16 text-sm text-custom-ash">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        </div>
    );
};

export default UserCard;
