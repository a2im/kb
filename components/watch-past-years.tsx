'use client';

import React from 'react';
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 728 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 728, min: 640 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };

export default function WatchPastYears({data2022, data2021}){
    return (
        <>
        <div id="past-years" className="p-10 rounded-3xl bg-black bg-opacity-75 border-4 border-white mx-auto max-w-5xl pb-20">
        <h3 className="font-bold mb-5">Watch Past Years</h3>
        <h3 className="text-3xl font-bold animate-bounce">2022</h3>
        <hr className="border-iwred mb-5 max-w-64"></hr>
            <div className="pb-10">
            <Carousel responsive={responsive}>
                {data2022?.items?.map(({ id, snippet }) => {
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium } = thumbnails;
                return (
                <div key={id} className="border-solid border-white border-3 rounded-2xl hover:scale-105 gap">
                    <Link href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                        <Image src={medium?.url} width={medium?.width} height={medium?.height} alt={`thumbnail image for ${title}`}/>
                        <h3 className="text-lg">{title}</h3>
                        </Link>    
                </div>
                )
            })}
            </Carousel>
            </div>
        <h3 className="text-3xl font-bold animate-bounce">2021</h3>
        <hr className="border-iwred mb-5 max-w-64"></hr>
        <div className="pb-10">
            <Carousel responsive={responsive}>
                {data2021?.items?.map(({ id, snippet }) => {
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium } = thumbnails;
                return (
                <div key={id} className="border-solid border-white border-3 rounded-2xl hover:scale-105">
                    <Link href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                        <Image src={medium?.url} width={medium?.width} height={medium?.height} alt={`thumbnail image for ${title}`}/>
                        <h3 className="text-lg">{title}</h3>
                        </Link>    
                </div>
                )
            })}
            </Carousel>
            </div>
            
        </div>
        </>
    )
}


