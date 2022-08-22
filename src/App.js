import {
  TiHome,
} from 'react-icons/ti';
import {
  FiSearch
} from 'react-icons/fi';
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineInfoCircle
} from 'react-icons/ai';
import {
  MdLocationOn
} from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri'

import images from './assets';

const heroImages = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80',
  'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
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
]

const App = () => {
  return (
    <div className="container mx-auto px-2 py-4">

      {/** NAV BAR */}
      <header className="sticky top-0 bg-[#FAFAFA] z-50 pb-4">
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

      {/** BENEFITS SECTION */}
      <section className="flex flex-col items-center my-4">
        <p className="text-blue-500 text-[10px]">SPECIAL BENEFITS FOR YOU</p>
        <h3 className="">Why Should Choose Us?</h3>

        <div className="flex flex-row space-x-2 mt-4">
          {benefits.map(({ icon, name, description }, index) => {
            return (
              <div key={`${name}-${index}`} className="flex flex-col p-4 rounded-md text-center items-center bg-white">
                <img className="w-10 h-10 my-4" src={icon} alt={name} />
                <p className="text-sm text-medium">{name}</p>
                <p className="text-[10px] font-light text-gray-400">{description}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

export default App;
