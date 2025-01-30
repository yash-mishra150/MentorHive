"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  handleGoogleSignOut,
  handleGoogleSignIn,
} from "../../components/auth/Functionality/GoogleSigninout";
import ReCAPTCHA from "react-google-recaptcha";
import SocialLoginButtons from "@/components/auth/CustomButtons/loginButtons";
import { ApiSignIn, ApiSignUp } from "../../components/api/auth/auth";

// type FormFields = {
//   [key: string]: string;
// };

const createFilteredUserObject = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const user: { [key: string]: string } = {};

  formData.forEach((value, key) => {
    if (key === "g-recaptcha-response" && value) {
      user["recaptchaToken"] = value.toString().trim();
    } else if (value && value.toString().trim() !== "") {
      user[key] = value.toString().trim();
    }
  });

  return user;
};


const SignInCall = async (e: React.FormEvent<HTMLFormElement>) => {
  const userObject = createFilteredUserObject(e);
  console.log("Filtered User Object:", userObject);
  const { email, password, recaptchaToken } = userObject;
  const result = await ApiSignIn({ email, password, recaptchaToken });
  // const result = await ApiSignUp();

  console.log(result);
}


const Page = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const mediaQuery1024 = window.matchMedia("(min-width: 1024px) and (max-width: 1024px)");

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



  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-[10px] sm:py-12 md:py-5 gap-5 px-3 xs:p-5 py-5  border-none w-[90vw] sm:w-[80vw] flex justify-around mx-10  bg-white shadow-1 dark:bg-gray-dark">
        {isMobile ? (
          <div>
            {isSignUp ? (
              <Signup setIsSignUp={setIsSignUp} />
            ) : (
              <Signin setIsSignUp={setIsSignUp} />
            )}
          </div>
        ) : (
          <DekstopAnimation isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
        )}

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isSignUp ? "-120%" : "0%" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="hidden w-full lg:block lg:w-1/2"
        >
          <BoxInside isSignUp={isSignUp} />
        </motion.div>

      </div>
    </div>
  );
};

const DekstopAnimation = ({
  isSignUp,
  setIsSignUp,
}: {
  isSignUp: boolean;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: isSignUp ? "90%" : "0%" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex w-full sm:w-[50vw] lg:w-[45vw] overflow-hidden relative"
    >
      {isSignUp ? (
        <Signup setIsSignUp={setIsSignUp} />
      ) : (
        <Signin setIsSignUp={setIsSignUp} />
      )}
    </motion.div>
  );
};

const BoxInside = ({ isSignUp }: { isSignUp: boolean }) => {
  return (
    <div className="custom-gradient-1 h-[85vh] overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:bg-dark-2 dark:bg-none">
      <Link className="mb-5 inline-block" href="/auth">
        <div className="font-signature dark:text-dark-7 text-heading-5">
          Mentor hive
        </div>
      </Link>

      <p className="mb-[2vh] text-xl font-medium text-dark dark:text-white">
        {isSignUp ? "Sign Up" : "Sign In"} to your account
      </p>
      <h1 className="mb-[2vh] font-bold text-dark dark:text-white sm:text-heading-4 xl:text-heading-3">
        {isSignUp ? "Create an account!" : "Welcome Back!"}
      </h1>
      <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
        {isSignUp
          ? "Please create an account by completing the necessary fields below."
          : "Please sign in to your account by completing the necessary fields below."}
      </p>

      <div className="my-[6vh]">
        <Image
          src="/images/grids/grid-02.svg"
          alt="Decorative Grid"
          width={405}
          height={325}
          className="mx-auto dark:opacity-30"
        />
      </div>
    </div>
  );
};

const Signin = ({
  setIsSignUp,
}: {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <form onSubmit={SignInCall} className="w-full m-auto flex-shrink-0 text-body-sm sm:text-base">
      <div className="flex justify-center">
        <div>
          <div className="text-sm text-black dark:text-white my-2">Email</div>
          <Input name="email" placeholder="eg: example@fake.com" />
          <div className="text-sm text-black dark:text-white my-2 mt-5">Password</div>
          <Input name="password" placeholder="eg: TyT@8008" />
        </div>
      </div>
      <div className="sm:m-auto sm:flex justify-center ">
        <div className="mt-[3vh] transform scale-[0.6] xs:scale-[0.8] md:scale-[1] sm:origin-center -ml-10 xs:ml-0 w-fit h-fit">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""}
            onChange={(token: string | null) => {
              if (token) {
                console.log("reCAPTCHA token:", token);
              } else {
                console.warn("reCAPTCHA verification failed.");
              }
            }}
          />
        </div>
      </div>

      <div className="text-center mt-[3vh]">
        <button type="submit" className="bg-blue text-white p-4 w-[60vw] md:w-100 rounded-lg">
          Sign in
        </button>
      </div>
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <button type="button"
            onClick={() => setIsSignUp(true)}
            className="text-primary"
          >
            Sign In
          </button>
        </p>
      </div>
      <SocialLoginButtons AppleonClick={async () => {
        const result = await ApiSignUp();

        console.log(result);
      }} GoogleonClick={handleGoogleSignIn} text="Sign In" />
    </form>
  );
};

const Signup = ({
  setIsSignUp,
}: {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <form className="w-full m-auto flex-shrink-0 text-body-sm sm:text-base">
      <div className="flex justify-center">
        <div>
          <div className="text-sm text-black dark:text-white my-2">Name</div>
          <Input placeholder="eg: example@fake.com" />
          <div className="text-sm text-black dark:text-white my-2">Email</div>
          <Input placeholder="eg: example@fake.com" />
          <div className="text-sm text-black dark:text-white my-2">Phone Number</div>
          <Input placeholder="eg: example@fake.com" />
          <div className="text-sm text-black dark:text-white my-2 mt-5">Password</div>
          <Input placeholder="eg: TyT@8008" />
        </div>
      </div>
      <div className="sm:m-auto sm:flex justify-center ">
        <div className="mt-[3vh] transform scale-[0.6] xs:scale-[0.8] md:scale-[1] sm:origin-center -ml-10 xs:ml-0 w-fit h-fit">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""}
            onChange={(token: string | null) => {
              if (token) {
                console.log("reCAPTCHA token:", token);
              } else {
                console.warn("reCAPTCHA verification failed.");
              }
            }}
          />
        </div>
      </div>

      <div className="text-center mt-[3vh]">
        <button type="submit" className="bg-blue text-white p-4 w-[60vw] md:w-100 rounded-lg">
          Sign up
        </button>
      </div>
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <button
            onClick={() => setIsSignUp(false)}
            className="text-primary"
          >
            Sign In
          </button>
        </p>
      </div>
      <SocialLoginButtons AppleonClick={handleGoogleSignOut} GoogleonClick={handleGoogleSignIn} text="Sign Up" />
    </form>
  );
};

export default Page;
