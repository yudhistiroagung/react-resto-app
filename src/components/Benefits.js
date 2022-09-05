import React from 'react';

export const Benefits = ({ benefits = [] }) => {
  return (
    <section className="flex flex-col items-center my-8">
      <p className="text-blue-500 text-[10px]">SPECIAL BENEFITS FOR YOU</p>
      <h3 className="">Why Should Choose Us?</h3>

      <div className="flex flex-row space-x-2 mt-4">
        {benefits.map(({ icon, name, description }, index) => {
          return (
            <div key={`${name}-${index}`} className="flex flex-col  rounded-md bg-white justify-between">
              <div className="flex flex-col text-center items-center px-2">
                <img className="w-10 h-10 my-4" src={icon} alt={name} />
                <p className="text-sm text-medium">{name}</p>
                <p className="text-[10px] font-light text-gray-400">{description}</p>
              </div>
              <button className="mt-4 text-[10px] font-medium py-2 rounded-b-md bg-gray-100 hover:bg-orange-200">View Detail</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};