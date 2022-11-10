import React from 'react';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import HomeServices from '../HomeService/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;