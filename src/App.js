import { useMemo } from 'react';

import images from './assets';
import { Header, Hero, Benefits, Featured, NearbyRestautants, ExpertChefs } from './components';

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
      <Header />

      {/** HERO SECTION */}
      <Hero heroImages={heroImages} />

      {divider}

      {/** BENEFITS SECTION */}
      <Benefits benefits={benefits} />

      {divider}

      {/** FEATURED SECTION */}
      <Featured heroImages={heroImages} />

      {divider}

      {/** NEARBY RESTO */}
      <NearbyRestautants nearRestos={nearRestos} />

      {divider}

      {/** CHEFS LIST */}
      <ExpertChefs
        featuredChef={featuredChef}
        heroImages={heroImages}
        images={images}
        chefs={chefs}
      />

    </div>
  );
}

export default App;
