"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className="text-white mb-4 text-4xl sm:text-5x1 lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Hello, I&apos;m{" "}  
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Karla',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'a Web Developer',
                            1000,
                            'a Writer',
                            1000,
                            'a Video Maker',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                      
                </h1>
                <p className="py-3 text-[#ADB7BE] text-lg lg:text-xl">
                    Currently enjoying my last year of undergrad, but did I mention a hello or wave makes my day? 
                    And so does taking random walks to get in my Vitamin D, enjoying the beauty of God's creation!
                </p>

                <div>
                <a href="mailto:vasquez.karlad@gmail.com?subject=Let's Connect&body=Hi there," target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                        Email Me!
                    </button>
                </a>

                <a href="/images/vasquez_karla_resume.pdf" download>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                    Download CV!
                </button>
                </a>

                </div>
            </div>

            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h[400px] relative">                
                <Image
                    src="/images/pro-pic.jpeg"
                    alt="profile pic"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={180}
                    height={180}
                />
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;