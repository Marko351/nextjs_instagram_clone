import React from 'react';
import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://www.instagram-tags.com/img/howto_pic_insta.png"
          alt="instagram image"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img className="w-32 object-cover" src={'https://servicesdown.com/img/instagram-logo.png'} />
              <p className="text-sm italic my-10 text-center">This app is created for learning purposes!</p>
              <button onClick={() => signIn(provider.id, { callbackUrl: '/' })} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
