import React from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Post from './Post';
import { db } from '../firebase';

export default function Posts() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
      setPosts(snapshot.docs);
    });
  }, [db]);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.data().id}
          id={post.data().id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}
