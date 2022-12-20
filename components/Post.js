import React from 'react';
import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleOvalLeftIcon, BookmarkIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function Post({ id, img, userImg, caption, username }) {
  const { data: session } = useSession();
  const [comment, setComment] = React.useState('');

  const changeComment = (e) => {
    setComment(e.target.value);
  };

  const onPostClick = async (e) => {
    e.preventDefault();

    console.log(id);

    const insertCommentData = {
      comment,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    };

    await addDoc(collection(db, 'posts', id, 'comments'), insertCommentData);
    setComment('');
  };

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
      {session && (
        <div className="flex justify-between items-center px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn-post" />
            <ChatBubbleOvalLeftIcon className="btn-post" />
          </div>
          <BookmarkIcon className="btn-post" />
        </div>
      )}

      {/* Post comments */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      {/* Post input box */}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7" />
          <input
            type="text"
            placeholder="Enter your comments."
            className="border-none flex-1 focus:ring-0"
            value={comment}
            onChange={changeComment}
          />
          <button type="submit" onClick={onPostClick} disabled={!comment.trim()} className="text-blue-400 font-bold disabled:text-blue-200">
            Post
          </button>
        </form>
      )}
    </div>
  );
}
