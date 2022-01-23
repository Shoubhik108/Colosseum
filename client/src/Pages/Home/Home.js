import React from 'react';
import HeroImg from "../../assets/hero_home.png";
import HeroTop1 from "../../assets/hero_top1.jpg";
import HeroTop2 from "../../assets/hero_top2.jpg";
import HeroBottom1 from "../../assets/hero_bottom1.jpg";
import HeroBottom2 from "../../assets/hero_bottom2.jpg";
import HeroRight from "../../assets/hero_right.jpg";

export default function Home() {
  return (
    <div className='bg-homeBg pb-8'>
      <div className="heroBg bg-no-repeat bg-cover bg-center w-full h-96 opacity-40 bg-black"></div>
      <div className="absolute top-44 text-white left-1/4">
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold items-start '>Welcome to Colosseum</h1>
          <h1 className='text-xl font-bold'>'Enjoy the real feeling of visiting theaters and movies with the ease of home'</h1>

          <div className='md:grid md:grid-cols-3 '>
            <div className='md:flex md:flex-col md:justify-center align-middle col-span-2 gap-2'>
              <div className='flex flex-row items-center justify-center space-x-2 space-y-1'>
                <img alt="" src={HeroTop1} className='w-72 h-48' />
                <img alt="" src={HeroTop2} className='w-72 h-48' />
              </div>

              <div className='flex flex-row items-center justify-center space-x-2 space-y-1'>
                <img alt="" src={HeroBottom1} className='w-72 h-48' />
                <img alt="" src={HeroBottom2} className='w-72 h-48' />
              </div>

            </div>
            <div className='m-1 py-1'>
              <img alt="" src={HeroRight} className='w-72 h-96' />
            </div>
          </div>

        </div>
      </div>

      <div className='pt-72 flex flex-col items-center justify-center px-44 text-center'>
        <h1 className='text-white text-3xl'>What is Colosseum</h1>
        <p className='text-white text-2xl'>Colosseum is a web application that allows you to create a new event to watch movies with friends or to join an public evet that is already created. It is a platform that allows you to create events and invite friends to watch movies together and chat along. Users can also join an event that is already created and donate some money to the event if they wish to(to motivate and help the event).
        </p>
      </div>

      <div className='pt-16 flex flex-col items-center justify-center px-44 text-center'>
        <h1 className='text-white text-3xl'>Live theatre events</h1>
        <p className='text-white text-2xl'>Join the event and watch theatre live</p>
        <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 pt-8 gap-4">
          <div className="shadow-2xl shadow-darkBg rounded-3xl bg-white items-center text-center">
            <div className="rounded-3xl">
              <img src="https://media.timeout.com/images/105821655/750/562/image.jpg" alt="" width="300" height="300" className="rounded-3xl bg-white" />
            </div>
            <div className="text-lg pb-1 text-black font-bold tracking-wide">Hamlet by William Shakespeare</div>
          </div>

          <div className="shadow-2xl shadow-darkBg rounded-3xl bg-white items-center text-center">
            <div className="rounded-3xl">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQ6Lkmio9x8LnBjNoYBhen32YUkongOXaIg&usqp=CAU" alt="" width="300" height="300" className="rounded-3xl bg-white" />
            </div>
            <div className="text-lg pb-1 text-black font-bold tracking-wide">Long Day's Journey Into Night</div>
          </div>

          <div className="shadow-2xl shadow-darkBg rounded-3xl bg-white items-center text-center">
            <div className="rounded-3xl">
              <img src="data:image/jpeg;base64,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" alt="" width="300" height="300" className="rounded-3xl bg-white" />
            </div>
            <div className="text-lg pb-1 text-black font-bold tracking-wide">Who's Afraid of Virginia Woolf? </div>
          </div>

          <div className="shadow-2xl shadow-darkBg items-center text-center cursor-pointer">
            <div className="text-lg py-1 px-2 rounded-full text-white bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 font-bold tracking-wide">Explore More</div>
          </div>

        </div>
      </div>

      <div className='pt-16 flex flex-col items-center justify-center px-44 text-center'>
        <h1 className='text-white text-3xl'>Public scheduled events</h1>
        <p className='text-white text-2xl'>Join the public event with your family and friends</p>
        <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 pt-8 gap-4">
          <div className="shadow-2xl shadow-darkBg rounded-3xl bg-white items-center text-center">
            <div className="rounded-3xl">
              <img src={HeroTop1} alt="" width="300" height="300" className="rounded-3xl bg-white" />
            </div>
            <div className="text-lg pb-1 text-black font-bold tracking-wide">Daredevil<br />
              12:00 PM IST</div>
          </div>

          <div className="shadow-2xl shadow-darkBg rounded-3xl bg-white items-center text-center">
            <div className="rounded-3xl">
              <img src={HeroTop2} alt="" width="300" height="300" className="rounded-3xl bg-white" />
            </div>
            <div className="text-lg pb-1 text-black font-bold tracking-wide">Stranger Things<br />
              1:00 PM PST</div>
          </div>

          <div className="shadow-2xl shadow-darkBg rounded-3xl bg-white items-center text-center">
            <div className="rounded-3xl">
              <img src={HeroBottom2} alt="" width="300" height="300" className="rounded-3xl bg-white" />
            </div>
            <div className="text-lg pb-1 text-black font-bold tracking-wide">Red Alert<br />
              4:00 PM EST </div>
          </div>

          <div className="shadow-2xl shadow-darkBg items-center text-center cursor-pointer">
            <div className="text-lg py-1 px-2 rounded-full text-white bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 font-bold tracking-wide">Explore More</div>
          </div>

        </div>
      </div>

    </div>
  );
}
