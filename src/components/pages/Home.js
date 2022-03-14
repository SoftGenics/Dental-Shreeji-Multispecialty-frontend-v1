import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import CompareImageSlider from '../CompareImageSlider/CompareImageSlider'
import BookingAppointment from '../BookingAppointment/BookingAppointment';
import CovidSafety from '../CovidSafety/CovidSafety';
import WhyChoose from '../WhyChoose/WhyChoose';
import OfficeInfo from '../OfficeInfo/OfficeInfo';
import QuestionsHelp from '../QuestionsHelp/QuestionsHelp';
import Testimonial from '../Testimonial/Testimonial';
import OurServices from '../OurServices/OurServices';
import Doctors from '../Doctors/Doctors';

function Home() {
  return (
    <>
      <HeroSection />
 
      <CompareImageSlider/>
      <BookingAppointment />
      <Doctors />
      <CovidSafety />
      <WhyChoose />
      <OurServices />
      <QuestionsHelp />
      <OfficeInfo />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
