import { useState } from "react";
import { Feed } from "./Feed";
import { Profile } from "./Profile";
import { User } from "./User";
import React from 'react';
import ReactDOM from 'react-dom';

export const NavigationBar = () => {
    const [activeTab, setActiveTab] = useState('Feed');
    const tabStyle = (tab) => ({
        cursor: 'pointer',
        color: activeTab === tab ? '#fe748c' : '#a1a1a1',
    });
    return (
        <div>
        <nav className="flex justify-between items-center p-3 shadow-md">
            <div className="px-8 font-sans font-bold text-custom-red">TweetX</div>
            <div className="flex gap-8 md:pr-64">
            {['Feed', 'Users', 'Profile'].map((tab) => (
                        <div
                            key={tab}
                            style={tabStyle(tab)}
                            onClick={() => setActiveTab(tab)}
                            className="text-lg"
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </div>
                    ))}
            </div>
            
            
        </nav>
        <div className="py-1">
                {activeTab === 'Feed' && (
                    <div>
                        <Feed></Feed>
                    </div>
                )}
                {activeTab === 'Users' && (
                    <div>
                        <User></User>
                    </div>
                )}
                {activeTab === 'Profile' && (
                    <div>
                        
                        <Profile></Profile>
                    </div>
                )}
                
                
            </div>
        </div>
    );
};