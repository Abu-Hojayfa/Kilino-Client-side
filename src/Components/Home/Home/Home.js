import React from 'react';
import './Home.css';
import './Responsive.css';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import Clients from '../Clients/Clients';
import WorkingExp from '../WorkingExp/WorkingExp';
import About from '../About/About';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
import Review from '../Review/Review';
import News from '../News/News';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <HeaderMain className='header' />
      </div>
      <Clients />
      <Services />
      <About />
      <Review />
      <WorkingExp />
      <News />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;