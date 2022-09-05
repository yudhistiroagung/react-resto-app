import React from 'react';
import {
  MdLocationOn
} from 'react-icons/md';
import {
  AiFillStar,
  AiOutlineInfoCircle
} from 'react-icons/ai';

export const Hero = ({ heroImages = [] }) => {
  return (
    <section className="relative flex items-center">

      <div className="flex flex-row space-x-4 overflow-scroll my-8">
        {heroImages.map((url, index) => {
          let className = "rounded-xl h-96 w-full";
          if (index === 0) {
            className = className + " ml-8";
          }
          return (
            <img className={className} src={url} alt="" />
          );
        })}
      </div>

      {/** CARD INFO */}
      <div className="absolute ml-[-30px] rounded-md py-3 pl-3 pr-12 bg-white my-auto">
        <div className='flex flex-row items-center'>
          {Array.from(Array(5).keys()).map(index => (<AiFillStar size={12} color="orange" />))}
          <p className="text-[10px] font-thin ml-1">(5.2k+)</p>
        </div>
        <h2 className="font-bold">Restaurant Padang</h2>
        <h4 className="font-medium ">IDR 40.000 - IDR 70.000</h4>
        <div className="flex flex-row items-center space-x-1">
          <MdLocationOn size={12} />
          <p className="text-[10px] font-light">Bandung, Soekarno Hatta No.98</p>
        </div>
        <button className="py-2 px-4 bg-orange-200 my-4 rounded-md font-medium">Make Reservation</button>
        <div className="flex flex-row items-center space-x-1">
          <AiOutlineInfoCircle size={12} color="#999999" />
          <p className="text-[10px] text-gray-400">No Extra Cost</p>
        </div>
      </div>

    </section>
  );
};