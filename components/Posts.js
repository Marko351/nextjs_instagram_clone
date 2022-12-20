import React from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Post from './Post';
import { db } from '../firebase';

export default function Posts() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
      setPosts(snapshot.docs);
    });
    return unsubscribe;
  }, [db]);
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
          />
        );
      })}
    </div>
  );
}
