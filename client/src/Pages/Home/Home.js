import React from 'react';
import HeroImg from "../../assets/hero_home.png";

export default function Home() {
  return (
    <div className='bg-homeBg min-h-screen'>
      <div className="heroBg bg-no-repeat bg-cover bg-center w-full h-96"></div>
      <div className="absolute top-44 text-white">
        <div className='flex flex-col w-screen items-center justify-center'>
          <h1 className='text-3xl font-bold items-start '>Welcome to Colosseum</h1>
          <h1 className='text-xl font-bold'>'Enjoy the real feeling of visiting theaters and movies with the ease of home'</h1>

          <div className='md:grid md:grid-cols-3 '>
            <div className='md:flex md:flex-col md:justify-center align-middle col-span-2'>
              shjsdf
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
