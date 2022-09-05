import React from 'react';
import {
  MdLocationOn
} from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
import {
  AiFillStar
} from 'react-icons/ai';
import {
  GrFormNextLink
} from 'react-icons/gr';

export const NearbyRestautants = ({ nearRestos = [], }) => {
  return (
    <section className="flex flex-col mt-8 space-y-5">

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <p className="text-[10px] text-blue-500">RESTAURANT BASED BY CITY</p>
          <h1 className="py-0">Restaurant Near You</h1>
        </div>

        <div className="rounded flex flex-row items-center space-x-1 bg-gray-100 px-4 py-2">
          <MdLocationOn size={12} color="#999999" />
          <p className="text-[10px] font-light text-gray-500">Bandung, Indonesia</p>
          <RiArrowDropDownLine size={20} color="#999999" />
        </div>
      </div>

      <div className="flex flex-row space-x-2 h-64">
        {nearRestos.map(({ image, name, rating, totalRating, address }, index) => {
          return (
            <div key={`${index}`} className="rounded-lg relative flex-1">
              <img className="w-full h-full object-cover rounded-lg" src={image} alt="" />

              <div className="absolute rounded-lg flex flex-col p-3 bg-white left-0 right-0 bottom-4 mx-4">

                <div className="flex flex-row space-x-3 items-center justify-between">

                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-1">
                      <AiFillStar size={12} color="orange" />
                      <p className="text-[10px] font-light">{rating}</p>
                      <p className="text-[10px] font-thin">{`(${totalRating}+)`}</p>
                    </div>

                    <p className="text-[12px] font-medium">{name}</p>

                    <div className="flex flex-row items-center space-x-1">
                      <MdLocationOn size={12} />
                      <p className="text-[10px] font-light">{address}</p>
                    </div>
                  </div>

                  <div className="bg-orange-200 rounded p-1">
                    <GrFormNextLink size={12} />
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="rounded-md self-center py-1 px-4 mt-8 bg-orange-200 hover:bg-orange-300">View All Retaurants</button>
    </section>
  );
}