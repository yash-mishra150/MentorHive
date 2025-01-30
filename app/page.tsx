"use client";


import Image from "next/image";
import { BlinkBlur } from "react-loading-indicators"
import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Avatar from 'react-avatar';
import Photo from "../public/images/cards/cards-01.png";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [Loading, setLoading] = useState(false)
  const [preLoading, setpreLoading] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const mediaQuery1024 = window.matchMedia("(min-width: 768px) and (max-width: 768px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setIsMobile(true);
      } else if (mediaQuery1024.matches) {
        setIsMobile(false);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    mediaQuery.addEventListener("change", handleResize);
    mediaQuery1024.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
      mediaQuery1024.removeEventListener("change", handleResize);
    };
  }, []);

  if (isMobile === null) return null;

  const clickFunction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-full w-full transition-all duration-300">
      {preLoading ?
        (<>
          <div className="flex flex-col gap-8 w-full justify-center items-center">
            <BlinkBlur color="#9CA3AF" size="large" />
            <div className="font-signature dark:text-dark-7 text-heading-4 text-white animate-softGlow">
              Mentor hive
            </div>
          </div>

        </>)

        :

        (
          <>

            {
              isMobile ?

                <div className=" h-screen">
                  <div className="flex-grow h-screen overflow-y-auto p-4">
                    main screen content goes here...aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    <Image alt="test" src={Photo}/>
                    <Image alt="test" src={Photo}/>
                    <Image alt="test" src={Photo}/>
                  </div>
                  <div className="h-[12vh] bg-white dark:bg-gray-dark fixed bottom-0 left-0 w-full flex justify-center items-center z-10">
                    Tab Bar Content (e.g., Avatar, Buttons)
                  </div>
                </div>


                :
                <>
                  <div
                    className={`h-[100vh] transition-all duration-300
                ${isOpen ? 'w-[20rem]' : 'w-[5rem]'}`}
                  >
                    {isMobile ?
                      <>
                        <div>
                          Mobile View
                        </div>
                      </>
                      :
                      <>
                        {isOpen ? (
                          <div className="transition-all duration-300">
                            Open data
                          </div>
                        ) : (
                          <div className="transition-all duration-300">
                            Closed Data
                          </div>
                        )}
                      </>

                    }

                  </div>
                  <div
                    className={`h-[100vh] p-8 transition-all duration-300 ${isOpen ? 'w-full rounded-l-[3rem]' : 'w-full rounded-l-[1.5rem]'
                      } dark:bg-gray-dark bg-white`}
                  >
                    <button onClick={clickFunction}>
                      <FaBarsStaggered size={24} />
                    </button>
                  </div>
                </>
            }

          </>
        )}


    </div>
  );
}


