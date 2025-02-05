"use client";

import React from 'react' 
import Sidebar from '@/components/Custom/Sidebar';

type Props = {}



const Home = (props: Props) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="h-full p-9">sdfsdf</div>
    </div>

  )
}

export default Home