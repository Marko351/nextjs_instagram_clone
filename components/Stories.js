import React from 'react';
import 'minifaker/locales/en';
import minifaker from 'minifaker';
import Story from './Story';
import { useSession } from 'next-auth/react';

export default function Stories() {
  const { data: session } = useSession();
  const [storyUsers, setStoryUsers] = React.useState([]);

  React.useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => {
      return {
        username: minifaker.username({ locale: 'en' }).toLowerCase(),
        img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
        id: i,
      };
    });

    setStoryUsers(storyUsers);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-auto rounded-sm scrollbar-none">
      {session && <Story img={session?.user?.image} username={session?.user?.username} isUser={true} />}
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
}
