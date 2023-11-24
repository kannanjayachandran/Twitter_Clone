import React from 'react';
import { BsBell, BsBookmark, BsEnvelope, BsTwitterX, BsFillPeopleFill} from 'react-icons/bs'
import { BiHash, BiHomeCircle, BiUser } from 'react-icons/bi'
import { IoMdListBox } from "react-icons/io";
import FeedCard from '@/components/FeedCard';
import { IoSearchSharp } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";



interface SidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: SidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />
  },
  {
    title: 'Explore',
    icon: <IoSearchSharp />
  },
  {
    title: 'Notifications',
    icon: <BsBell />,
  },
  {
    title: 'Messages',
    icon: <BsEnvelope />
  },
  {
    title: 'Lists',
    icon: <IoMdListBox />
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />
  },
  {
    title: 'Communities',
    icon: <BsFillPeopleFill />
  },
  {
    title: 'Premium',
    icon: <BsTwitterX />
  },
  {
    title: 'Profile',
    icon: <BiUser />
  },
  {
    title: 'More',
    icon: <CiCircleMore />
  }
]

export default function Home() {
  return (
      <div className='grid grid-cols-12 h-screen w-screen px-56'>

        {/* First section */}

        <div className='col-span-3 pt-1 ml-28'>
          <div className='text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all'>
            <BsTwitterX ></BsTwitterX>
          </div>
          <div className='mt-2 text-xl pr-4'>
            <ul>
              {sidebarMenuItems.map(item => (
                <li
                  className='flex justify-start items-center gap-4 px-3 py-3 rounded-full cursor-pointer hover:bg-gray-800 transition-all mt-2'
                  key={item.title}>
                  <span className='text-3xl'>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pr-4">
            <button className='bg-[#1d9bf0] text-lg rounded-full w-full p-4 font-semibold'>
              Post
            </button>
            </div>
          </div>
        </div>

        {/* mid section */}

        <div className='col-span-5 border-r-[1px] border-l-[1px] border border-gray-600'>
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        <div className='col-span-4'> </div>
      </div>
  )
}
