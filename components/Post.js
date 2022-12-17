import React from 'react';
import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleOvalLeftIcon, BookmarkIcon } from '@heroicons/react/24/outline';

export default function Post({ id, img, userImg, caption, username }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img src={userImg} alt={username} className="h-12 rounded-full object-cover border p-1 mr-3" />
        <p className="font-bold flex-1">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>

      {/* Post Image */}
      <img src={img} alt="" className="object-cover w-full" />

      {/* Post Buttons */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn-post" />
          <ChatBubbleOvalLeftIcon className="btn-post" />
        </div>
        <BookmarkIcon className="btn-post" />
      </div>
    </div>
  );
}
