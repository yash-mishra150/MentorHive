import React from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { IoIosArrowDown } from "react-icons/io"; // Ensure this is imported

type Item = {
    name: string;
    onClickfunction: () => void;
};

type Props = {
    Data: Item[];
    Name: React.ReactNode; // Accepts elements like <IoIosArrowDown />
    className?: string;
};

const Droper = ({ Data, Name, className }: Props) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {/* Ensures it's always wrapped in a button */}
                <button>{Name}</button>
            </PopoverTrigger>
            <PopoverContent className={className}>
                <div className="flex flex-col justify-center items-center gap-5">
                    {Data.map((item, index) => (
                        <button onClick={item.onClickfunction} key={index}>
                            {item.name}
                        </button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default Droper;
