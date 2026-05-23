'use client'
import { Button } from '@heroui/react';
import Image from 'next/image';
import cowImage1 from '@/assets/cow1-preview.png'
import cowImage2 from '@/assets/cow2.png'
import cowImage3 from '@/assets/cow3.png'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const images = [cowImage1, cowImage2, cowImage3]

const Banner = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 10000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className='bg-[#f3ede4] py-15 md:py-24 animate__animated animate__fadeInUp animate__slow'>
            <div className='w-11/12 max-w-350 mx-auto flex flex-col md:flex-row justify-between items-center gap-10'>
                <div className='text-center md:text-left'>
                    <p className="uppercase tracking-[2px] md:tracking-[4px] text-xs lg:text-sm text-blackm mb-2 md:mb-4">
                        Trusted Online Qurbani Marketplace
                    </p>
                    <h1 className="max-w-180 text-4xl text-primary lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                        Find & Book Your
                        Qurbani Animal Easily
                    </h1>

                    <p className="text-primary text-base lg:text-lg leading-8 mb-6 lg:mb-8">
                        Browse and book healthy Qurbani animals from trusted sellers.
                    </p>

                    <a href="#featured_animal">
                        <Button className="bg-[var(--color-action)] hover:bg-[var(--color-primary)] transition duration-300 py-5">Browse All Animals</Button>
                    </a>
                </div>

                <div >
                    <Image
                        key={index}
                        src={images[index]}
                        alt='banner image'
                        width={600}
                        height={400}
                        className='animate__animated animate__fadeIn animate__slow transition-all duration-500'></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;