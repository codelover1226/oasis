'use client'
import React from "react";
import Image from "next/image";
import logo from './../assets/image/Oasis Final Logo.png'

export default function comming () {
  return(
    <>
      <div className="fixed w-full top-0 right-0 left-0 bottom-0 z-[100]" style={{ backgroundImage:"url('/img/commingsoon.jpg')" }}>
        
      </div>
      <div className="fixed w-full right-0 left-0 bottom-0 top-0 bg-white opacity-50 z-[101]"></div>
      <div className="fixed w-full top-0 right-0 left-0 bottom-0 z-[102]">
        <div className="w-full max-w-[1440px] mx-auto flex">
          <div className="text-left  px-6">
            <a
              href="/" 
              className="relative after:bg-none hover:after:h-0 after:h-0">
              <Image src={logo} alt="" width={200} className="mx-auto"/>
            </a>
          </div>
          <div className="item-center content-center text-right w-full">
            <a 
              href="/contact"
              className="relative font-bold font-spartan cursor-pointer">
              contact
            </a>
          </div>
        </div>
        <div className="mt-[20vh]">
          <Image src={logo} alt="" width={300} className="mx-auto"/>
          <p className="text-4xl font-ivy-mode text-center uppercase font-bold">
            coming soon
          </p>
          <div className="mx-auto w-[250px] text-center mt-12 sm:mt-16 ">
            <a
              href="/contact"
              className="relative after:bg-none hover:after:h-0 after:h-0 duration-700 border-black border-[2px] rounded-full p-5 uppercase text-center text-2xl hover:bg-black hover:text-white cursor-pointer">Contact Us</a>
          </div>
        </div>
      </div>
      
    </>
  )
}