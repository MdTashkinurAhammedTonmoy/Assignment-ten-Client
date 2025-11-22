import React from 'react';
import Header from '../Header';
import Categories from '../../HomePage/Categories';
import AboutCard from '../../HomePage/AboutCard';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <AboutCard></AboutCard>
        </div>
    );
};

export default Home;