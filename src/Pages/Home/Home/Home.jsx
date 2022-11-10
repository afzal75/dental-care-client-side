import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import HomeServices from '../HomeService/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;