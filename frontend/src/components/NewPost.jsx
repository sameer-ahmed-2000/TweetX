import React, { useState } from 'react';
import axiosInstance from '../functions/axiosInstance';

export const NewPostCard = ({ onPostSubmit }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response=await axiosInstance.post('/feed/posts',{
                content:content
            });
            console.log('Post submitted:',response.data);
            setContent('');
            if(onPostSubmit){
                onPostSubmit(response.data);
            }
        }catch (error){
            console.error('Error submitting post:',error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 rounded-lg shadow-md max-w-2xl">
        <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full p-2 border rounded-lg"
        />
        <button type="submit" className="rounded h-8 w-24 px-4 py-1 font-medium rounded-m text-sm bg-custom-red text-white">
            Post
        </button>
        </form>
    );
};
