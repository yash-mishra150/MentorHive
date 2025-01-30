import { FcGoogle } from "react-icons/fc";
import { FaApple, FaLinkedinIn } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

interface ButtonProps {
    text: string;
    GoogleonClick: () => void;
    AppleonClick: () => void;
}

export default function SocialLoginIcons({ text, GoogleonClick, AppleonClick }: ButtonProps) {
    return (
        <div className="text-center">
            <div className="flex items-center mt-4 my-3 mx-10 justify-center">
                <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
                <div className="block w-full min-w-fit bg-white px-3 text-center text-sm font-medium dark:bg-gray-dark">
                    Or sign up with email
                </div>
                <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
            </div>
            <div className="flex justify-center gap-4 ">
                <button type="button" onClick={GoogleonClick} className="flex items-center justify-center w-9 h-9 bg-white text-gray-700 border border-gray-300 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                    <FcGoogle size={20} />
                </button>


                <button type="button" className="flex items-center justify-center w-9 h-9 bg-blue-700 text-white rounded-full shadow-md hover:bg-blue-800 hover:scale-105 transition-transform">
                    <FaLinkedinIn size={20} />
                </button>


                <button type="button" onClick={AppleonClick} className="flex items-center justify-center w-9 h-9 bg-black text-white rounded-full shadow-md hover:bg-gray-800 hover:scale-105 transition-transform">
                    <FaApple size={20} />
                </button>


                <button type="button" className="flex items-center justify-center w-9 h-9 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-transform">
                    <BsFacebook size={20} />
                </button>
            </div>
        </div>
    );
}
