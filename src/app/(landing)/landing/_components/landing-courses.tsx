"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import line from "@/public/line.png";
import MarQuee from "react-fast-marquee";
import { Card, CardContent } from "@/components/ui/card";
//import { db } from "@/lib/db";
import LandingCourseCard from "./course-card";
/* import { Category, Course } from "@prisma/client";
import LandingCourseCards from "./landing-course-cards";
import Lottie from "lottie-react";
import gymAnimation from '@/public/animations/gym.json';
import bulkAnimation from '@/public/animations/bulk.json';
import robotAnimation from '@/public/animations/robot.json';
import checkAnimation from '@/public/animations/checklist.json'; */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Loader2 } from "lucide-react";

const rowOneImages = [
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/five.png",
  },
];

/* const rowOneImages = [
  {
    url: "https://utfs.io/f/ff99a9ed-5706-4dd9-8c5a-726c9107ef8d-2c5x.jpg",
  },
  {
    url: "https://utfs.io/f/f6693072-7ccf-4ea0-8cad-2b82ee2f4004-2c5w.jpg",
  },
  {
    url: "https://utfs.io/f/7ea6e7b4-17cf-4f26-9a65-2d35297d55be-2c5y.jpg",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/five.png",
  },
]; */


const rowTwoImages = [
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/five.png",
  },
];


//Types
/*
type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
};

interface CoursesListProps {
  items: CourseWithProgressWithCategory[];
}

 {
  items
}: CoursesListProps */


const LandingCourses = () => {



  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setmounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full md:mt-24 flex items-center justify-center ">
      <div className="items-center justify-center">
        

        {/* Logo Slider */}
        <div className="w-[95vw] mb-5 md:mb-20 relative overflow-hidden">
          {/* <div className="bg-gradient-to-r from-teal-600 to-transparent w-[400px] h-[800px] absolute xl translate-y-32 md:translate-y-40 z-10 rotate-[-4deg]"/> */}
          <div className="rotate-[-4deg] mt-10 md:mt-[6.5rem]">
            <MarQuee>
              {rowOneImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[400px] rounded-[20px]"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
            <MarQuee>
            {rowTwoImages.map((i, index) => (
                  <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] -translate-x-72 m-2 md:w-[400px] rounded-[20px]"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
          </div>
          {/* <div className="mt-10 md:mt-[6.5rem]">
              <MarQuee>
                    <LandingCourseCards items={items}/>
                </MarQuee>
          </div> */}
        </div>

        {/* loader */}
        <div className="-translate-y-64 md:-translate-y-96 xl:-translate-y-96 items-center relative">
              <Card className="w-[500px] md:w-[700px] xl:w-[900px] bg-white/80 pt-2 ml-5">
                <CardContent>
                  
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-600 pb-5 text-2xl md:text-4xl">
                      <TypewriterComponent
                        options={{
                          strings: [
                            "We sell sumo wrestler garden gnomes.",
                            "Consultants for snakes looking for scarfs.",
                            "A loan company that deals solely in tree house financing.",
                            "Manufacturer of those small umbrellas in pina-colodas."
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </div>
                  
                  <div className="absolute z-20 rounded-xl bg-primary text-white p-5 ml-5 mt-10 translate-x-20 flex flex-row">
                    <Loader2 className="animate-spin"/>
                    <div className="ml-2">Forging Logo</div>
                  </div>
                </CardContent>
              </Card>
          </div>
      </div>
    </div>
  );
};

export default LandingCourses;


/* 
 */