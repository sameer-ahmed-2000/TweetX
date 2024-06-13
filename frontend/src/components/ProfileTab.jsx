import React, { useState } from 'react';
import UserCard from './Card';
import { FollowButton } from './FollowButton';
import { FollowingButton } from './FollowingButton';

const ProfileTab = () => {
    const [activeTab, setActiveTab] = useState('posts');

    const tabStyle = (tab) => ({
        cursor: 'pointer',
        padding: '10px 20px',
        borderBottom: activeTab === tab ? '2px solid transparent' : '',
        borderTop: activeTab === tab ? '2px solid #ec4899' : '',
        color: activeTab === tab ? '#747474' : '',
    });

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

    return (
        <div className="w-full max-w-md mx-auto mt-8">
            <div className="border border-gray-300"></div>
            
                <nav className="sticky top-0 flex text-sm text-custom-ash justify-center ">
                    {['posts', 'followers', 'following'].map((tab) => (
                        <div
                            key={tab}
                            style={tabStyle(tab)}
                            onClick={() => setActiveTab(tab)}
                            className="text-lg"
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </div>
                    ))}
                </nav>
            
            <div className="pt-4">
                {activeTab === 'posts' && <div><UserCard></UserCard></div>}
                {activeTab === 'followers' && (
                    <div>
                        {followers.map((follower, index) => (
                            <div key={index} className="flex items-center justify-between py-2 ">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 border-2 rounded-full"></div>
                                    <div className="ml-3">
                                        <div className="font-bold">{follower.name}</div>
                                        <div className="text-sm text-gray-600">Following: {follower.following}</div>
                                    </div>
                                </div>
                                
                                <FollowButton label={'Follow'}></FollowButton>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 'following' && (
                    <div>
                        {followers.map((follower, index) => (
                            <div key={index} className="flex items-center justify-between py-2 ">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 border-2 rounded-full"></div>
                                    <div className="ml-3">
                                        <div className="font-bold">{follower.name}</div>
                                        <div className="text-sm text-gray-600">Following: {follower.following}</div>
                                    </div>
                                </div>
                                <FollowingButton label={'Following'}></FollowingButton>
                            </div>
                        ))}
                    </div>
                )}
                
                
            </div>
        </div>
    );
};

export default ProfileTab;
