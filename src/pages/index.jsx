import React from 'react';
import SEO from '../components/SEO';

import HomeHeader from '../components/HomeHeader';
import Testimonial from '../components/Testimonial';
import ProductFeatures from '../components/ProductFeatures';
import ProductLanguages from '../components/ProductLanguages';
import CustomerLogos from '../components/CustomerLogos';
import SignUp from '../components/SignUp';

import o2Portrait from '../images/testimonials/nichola_green_o2.jpg';

export default () => (
  <div>
    <SEO />
    <HomeHeader />
    <CustomerLogos />
    <Testimonial
      company="o2"
      image={o2Portrait}
    />
    <ProductFeatures />
    <SignUp />
  </div>
);
