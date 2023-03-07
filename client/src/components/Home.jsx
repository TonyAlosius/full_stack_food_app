import { motion } from 'framer-motion';
import React from 'react';
import { HiCurrencyRupee } from 'react-icons/hi2';
import { buttonClick, staggerFadeInOut } from '../animations';
import { Delivery, HeroBg } from '../assets';
import { randomData } from '../utils/styles';

const Home = () => {
  return (
    <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className='flex flex-col items-start justify-start gap-6'>
            <div className='px-4 py-1 flex items-center justify-center gap-2 bg-orange-100 rounded-full'>
                <p className='text-lg font-semibold text-orange-500'>Free Delivery</p>
                <div className='w-10 h-10 flex items-center justify-center'>
                    <img src={Delivery} className="w-full h-full object-contain" alt = "delivery" />
                </div>
            </div>

            <p className='text-[40px] md:text-[72px] tracking-wider text-headingColor
                font-sanserif font-extrabold'>
                The Fastest Delivery in {" "}
                <span className='text-orange-600'>
                Your City
                </span>
            </p>

            <p className='text-lg text-textColor'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Est esse totam doloribus accusamus eaque harum exercitationem facere! 
                Ratione est officia accusantium! Repudiandae nemo aut recusandae aliquid, 
                unde excepturi tempora porro.
            </p>

            <motion.button 
                {...buttonClick}
                type='button' 
                className='bg-gradient-to-bl from-orange-400 to-orange-600
                    px-4 py-2 rounded-xl text-black text-base font-semibold
                    hover:shadow-lg transition-all ease-in-out'>
                    Order Now
            </motion.button>
        </div>

        <div className='py-2 flex-1 flex items-center justify-end relative'>
            <img 
                className='absolute top-0 right-0 md:right-12 w-full h-420
                    md:w-auto md:h-650'
                    src={HeroBg}
                    alt="Hero"
            />

            <div className='w-full md:w-460 ml-0 flex flex-wrap items-center justify-center gap-4 gap-y-14 '>
                {randomData && 
                    randomData.map((data, i) => (
                        <motion.div
                            key={i} 
                            {...staggerFadeInOut(i)} 
                            className="w-32 h-36 md:h-auto md:w-190 p-4
                            bg-lightOverlay backdrop-blur-md rounded-3xl flex flex-col 
                            items-center justify-center drop-shadow-lg">
                            <img 
                                src={data.imageURL}
                                className="w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain"
                                alt=""/>
                            
                            <p className='text-sm lg:text-xl font-semibold text-textColor'>
                                {data.product_name.slice(0, 14)}
                            </p>

                            <p className='text-[12px] text-center md:text-base text-lighttextGray font-semibold capitalize' >
                                {data.product_category}
                            </p>

                            <p className=' flex items-center justify-center text-sm font-semibold text-headingColor'>
                                    <HiCurrencyRupee className='text-red-400'/> {data.product_price}
                            </p>
                        </motion.div>
                    ))}
            </div>
        </div>
    </motion.div>
  );
};

export default Home;