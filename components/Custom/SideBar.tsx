import React from 'react'
import Avatar from './Avator'
import Droper from './Droper'
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'

type option = {
  name: string;
  icon: React.ReactNode;
  link: string;
}

type Props = {
  Options: option[];
}





const Sidebar = ({ Options }: Props) => {
  return (
    <div>
      <div className="bg-white m-4 h-[95.5vh] p-5  w-[15rem] dark:bg-gray-dark rounded-2xl">
        <div className='flex flex-col items-center'>
          <div className="font-signature dark:text-dark-7 text-heading-6">
            Mentor Hive
          </div>
          <div className="flex flex-col items-center gap-5 mt-4">
            <div className='flex flex-col justify-center items-center gap-2'>
              <Avatar name="Yash Mishra" size={50} />
              <div className='flex justify-center gap-1'>
                Yash Mishra
                <Droper className='w-auto' Name={<IoIosArrowDown />} Data={[

                ]} />
              </div>
              <div className=''>
                {Options.map((items, index) => (
                  <Link href={items.link} key={index} className='my-[2vh] hover:bg-[#020D1A]  w-[14rem] p-4 rounded-xl flex gap-5 items-center'>
                    {items.icon}{items.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col fixed h-[10rem] justify-end p-2'>
          <div className='text-body-xs text-dark-4 font-semibold'>
            Mentor Hive job Dashboard
          </div>
          <div className='text-body-xs text-dark-4'>
            @ 2025 All Rights Reserved
          </div>
          <div className='text-body-xs mt-4 text-dark-4'>
            Made with ❤️ by Yash Mishra
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar