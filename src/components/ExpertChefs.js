import React from 'react';
import {
  MdLocationOn
} from 'react-icons/md';

export const ExpertChefs = ({ chefs = [], images = [], featuredChef, heroImages = [] }) => {
  return (
    <section className="flex flex-row mt-8 space-x-4">

      <div className="relative flex flex-1">

        <div className="flex flex-col absolute right-0 top-4 rounded-lg bg-white p-4 items-center">
          <img className="w-12 h-12 mb-1" src={images.experience} alt="" />
          <h4>12 YEARS</h4>
          <p className="text-black font-medium text-sm">Experiences</p>
        </div>

        <img className="w-[85%] object-cover mx-auto rounded-lg" src={featuredChef} alt="" />

        <div className="absolute left-0 bottom-4 flex flex-row p-4 bg-white rounded-lg space-x-2 items-center">
          <img className="w-12 h-16 object-cover rounded-lg" src={heroImages[0]} alt="" />

          <div className="flex flex-col">
            <p className="text-gray-400 text-[10px]">Chef at Restaurant:</p>
            <p className="text-[12px] font-medium">Juna Spike</p>

            <a href="#" className="mt-1 text-[10px] font-medium py-1  text-orange-200">View Detail</a>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col space-y-4">
        <div>
          <p className="text-[10px] text-blue-500">TOP 4 EXPERT CHEFS</p>
          <h1 className="py-2">EXPERT CHEF IN FUDDY</h1>
        </div>

        <div className="flex flex-col space-y-1">
          {chefs.map(({ speciality, name, location }) => {

            return (
              <div className="flex flex-row rounded-lg bg-white p-4 justify-between items-center">

                <div className="flex flex-col space-y-1">
                  <p className="text-[10px] text-gray-400 font-medium">{speciality}</p>
                  <h6>{name}</h6>
                  <div className="flex flex-row items-center space-x-1">
                    <MdLocationOn size={12} />
                    <p className="text-[10px] font-light">{location}</p>
                  </div>
                </div>

                <button className="rounded-md py-1 px-4 bg-orange-200 hover:bg-orange-300 text-[8px]">View Profile Details</button>

              </div>
            );
          })}
        </div>

        <button className="rounded-md self-start py-1 px-4 bg-orange-200 hover:bg-orange-300">View All Chefs</button>

      </div>
    </section>
  );
};