import React, { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DateTimePicker from 'react-datetime-picker';
import Select from 'react-select';

export default function Header() {

  const [showInvite, setShowInvite] = useState(false);
  const [value, onChange] = useState(new Date());

  const aquaticCreatures = [
    { label: 'Go Live', value: 'Go Live' },
    { label: 'Schedule Event', value: 'Schedule Event' },
  ];


  return (
    <div className='z-100'>

      <div>
        <nav className="flex items-center bg-gray-800 py-2 flex-wrap px-4">
          <a href="/"><span className="p-2 mr-4 inline-flex text-white items-center tracking-wider text-2xl md:text-4xl cursor-pointer font-base">
            Colosseum
          </span></a>

          <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full text-xl lg:items-center items-start flex flex-col lg:h-auto font-sourceSerif" >

              <a href="/">
                <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover text-white hover:bg-gray-200 hover:text-black cursor-pointer">Home</span>
              </a>

              <a href="/recommendation">
                <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover text-white hover:bg-gray-200 hover:text-black cursor-pointer">Recommendations</span>
              </a>

              <div onClick={() => setShowInvite(true)} className='lg:inline-flex lg:w-auto mt-4'>
                <li className="flex w-full text-white hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md cursor-pointer items-center mb-6">
                  <AddIcon className="text-lg" />
                  <div className="pl-2">Invite people</div>
                </li>
              </div>

              {showInvite ? (
                <>
                  <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  >

                    <div className="relative w-auto my-6 mx-auto max-w-3xl">


                      <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none  px-36 py-8">

                        <div className="flex items-center justify-center p-5">
                          <h3 className="text-3xl ">
                            Create Event
                          </h3>
                          <div className="absolute top-6 right-6 cursor-pointer" onClick={() => setShowInvite(false)}>
                            <CloseRoundedIcon className="text-red-600 text-2xl" />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <input className="my-2 bg-white rounded-lg placeholder:text-center text-xl p-1 border-2 border-fontColor" placeholder="Event Name" />

                          <input className="my-2 bg-white rounded-lg placeholder:text-center text-xl p-1 border-2 border-fontColor" placeholder="Event Details" />

                          <DateTimePicker
                            onChange={onChange}
                            className="py-4 h-16"
                            value={value}
                          />

                          <Select
                            options={aquaticCreatures}
                            className="py-4 h-36 z-50"
                          />

                        </div>

                        <a href="/golive" >
                          <div className="shadow-2xl shadow-darkBg items-center text-center cursor-pointer">
                            <div className="text-lg py-1 px-2 rounded-full text-white bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 font-bold tracking-wide">Create Event</div>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}

            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
