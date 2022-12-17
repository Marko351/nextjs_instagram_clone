import React from 'react';
import Post from './Post';

export default function Posts() {
  const posts = [
    {
      id: '1',
      username: 'mark351',
      userImg: 'https://pickaface.net/gallery/avatar/unr_fakeeliot_181127_1929_w34iu.png',
      img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      caption: 'Thanks for your pic!',
    },
    {
      id: '2',
      username: 'peraaaa',
      userImg: 'https://pickaface.net/gallery/avatar/unr_fakeeliot_181127_1929_w34iu.png',
      img: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      caption: 'Nice pic!',
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
      ))}
    </div>
  );
}
