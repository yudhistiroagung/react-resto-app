import {
  TiHome,
} from 'react-icons/ti';
import {
  FiSearch
} from 'react-icons/fi';
import {
  AiFillStar,
  AiOutlineInfoCircle
} from 'react-icons/ai';
import {
  GrFormNextLink
} from 'react-icons/gr';
import {
  MdLocationOn
} from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri'

import images from './assets';
import { useMemo } from 'react';

const heroImages = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80',
  'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
];

const benefits = [
  {
    icon: images.discount,
    name: 'Extra Discounts',
    description: 'Get your special discount by using our reservation'
  },
  {
    icon: images.plate,
    name: 'Come and Eat',
    description: 'Get your special discount by using our reservation'
  },
  {
    icon: images.noExtra,
    name: 'No Extra Fee',
    description: 'Get your special discount by using our reservation'
  },
  {
    icon: images.guarantee,
    name: 'Guaranteed Cleanliness',
    description: 'Get your special discount by using our reservation'
  },
];

const featuredChef = 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

const nearRestos = [
  {
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80',
    name: 'Karnivor',
    rating: '5.0',
    totalRating: '7.2',
    address: 'Jl Riau No 123 Bandung'
  },
  {
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    name: 'Bebek Gahar',
    rating: '5.0',
    totalRating: '3.2',
    address: 'Jl Pasirjati No 133 Bandung'
  },
  {
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    name: 'Railway Coffe',
    rating: '5.0',
    totalRating: '4.2',
    address: 'Jl Kebon Jati No 11 Bandung'
  },
];

const chefs = [
  {
    speciality: 'PIZZA',
    name: 'Phoenix Saethcup',
    location: 'Jakarta, Indonesia'
  },
  {
    speciality: 'PIZZA',
    name: 'Phoenix Saethcup',
    location: 'Jakarta, Indonesia'
  },
  {
    speciality: 'PIZZA',
    name: 'Phoenix Saethcup',
    location: 'Jakarta, Indonesia'
  },
  {
    speciality: 'PIZZA',
    name: 'Phoenix Saethcup',
    location: 'Jakarta, Indonesia'
  },
];

const App = () => {

  const divider = useMemo(() => <div className="h-5 w-full" />, []);

  return (
    <div className="container mx-auto px-2 py-4">

      {/** NAV BAR */}
      <header className="sticky top-0 bg-[#FAFAFA] z-50 py-4">
        <nav className="flex flex-row justify-between items-center">

          {/** Menus */}
          <div className="flex flex-row space-x-4 text-xs text-gray-600 items-center">
            <a href="#">Home</a>
            <div className="flex flex-row items-center">
              <a href="#">Category</a>
              <RiArrowDropDownLine size={20} color="#333333" />
            </div>
            <a href="#">Services</a>
            <a href="#">About Us</a>
          </div>

          {/** ICON and APP NAME */}
          <div className="flex flex-row space-x-1 items-center">
            <TiHome size={34} color="#5A4FCF" />
            <h1 className="text-gray-600 text-base font-semibold">Resto</h1>
          </div>

          {/** SEARCH and LOGIN */}
          <div className="flex flex-row space-x-2 text-sm">
            <div className="flex flex-row rounded outline outline-gray-200 px-2 items-center space-x-1">
              <FiSearch size={18} color="#999999" />
              <input className="placeholder:text-xs placeholder:text-gray-400 text-gray-400 focus:outline-none" placeholder="Search menu..."></input>
            </div>
            <button className="p-2 px-3 bg-blue-200 rounded text-xs text-blue-500 font-medium hover:bg-blue-50">Log In</button>
          </div>

        </nav>
        {/** END NAV BAR */}
      </header>

      {/** HERO SECTION */}
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

      {divider}

      {/** BENEFITS SECTION */}
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

      {divider}

      {/** FEATURED SECTION */}
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

      {divider}

      {/** NEARBY RESTO */}
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

      {divider}

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

    </div>
  );
}

export default App;
