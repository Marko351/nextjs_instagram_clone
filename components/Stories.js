import React from 'react';
import 'minifaker/locales/en';
import minifaker from 'minifaker';
import Story from './Story';

export default function Stories() {
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
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
}
