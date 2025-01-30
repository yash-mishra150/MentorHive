"use client";

import React, { ReactNode, useEffect, useState } from 'react';

type Props = {
    isOpen: boolean;
    isMobile: boolean;
};



const Sidebar = ({ isOpen, isMobile }: Props) => {
    return (
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
    );
};

export default Sidebar;
