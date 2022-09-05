import React from 'react';
import {
  AiFillStar,
} from 'react-icons/ai';
import {
  GrFormNextLink
} from 'react-icons/gr';
import {
  MdLocationOn
} from 'react-icons/md';

export const Featured = ({ heroImages = [] }) => {
  return (
    <section className="flex flex-row items-center mt-8">

      <div className="flex flex-col w-[35%] justify-start pr-6">
        <p className="text-[10px] text-blue-500">TOP 3 FEATURED RESTAURANT</p>
        <h1 className="py-2">Most Popular Restaurant</h1>

        <p className="font-light text-[10px]">
          The best restaurant in our opinion is how much customers like it in terms of place, price, comfort and of course the taste of
          the food itself.
        </p>

        <button className="rounded-md py-1 px-2 mt-4 bg-orange-200">View All Retaurants</button>
      </div>

      <div className="flex flex-row flex-1 space-x-2 h-96">
        <div className="relative flex-[4]">
          <img className="w-full h-full object-cover rounded-lg" src={heroImages[2]} alt="" />

          <div className="absolute rounded-lg flex flex-col p-3 bg-white left-0 right-0 bottom-4 mx-4">

            <div className="flex flex-row space-x-3 items-center justify-between">

              <div className="flex flex-col">
                <div className="flex flex-row items-center space-x-1">
                  <AiFillStar size={12} color="orange" />
                  <p className="text-[10px] font-light">5.0</p>
                  <p className="text-[10px] font-thin">(7.2k+)</p>
                </div>

                <p className="text-[12px] font-medium">Bind Balorant</p>

                <div className="flex flex-row items-center space-x-1">
                  <MdLocationOn size={12} />
                  <p className="text-[10px] font-light">Bali, Jl. Perjuangan No.99</p>
                </div>
              </div>

              <div className="bg-orange-200 rounded p-1">
                <GrFormNextLink size={12} />
              </div>

            </div>

          </div>
        </div>

        <div className="flex-[2]">
          <img className="w-full h-full object-cover rounded-lg" src={heroImages[1]} alt="" />
        </div>

        <div className="flex-[2]">
          <img className="w-full h-full object-cover rounded-lg" src={heroImages[0]} alt="" />
        </div>
      </div>
    </section>
  );
};