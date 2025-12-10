import React from 'react';
import Header from '../Header';
import Categories from '../../HomePage/Categories';
import AboutCard from '../../HomePage/AboutCard';
import PopularCategories from '../../HomePage/PopularCategories';
import RecipesFastpage from '../../HomePage/RecipesFastpage';
import { useLoaderData } from 'react-router';
import TestimonialSection from '../../HomePage/TestimonialSection';
import FounderSection from '../../HomePage/FounderSection';
import Coverage from '../../HomePage/Coverage';
import NewsletterSection from '../../HomePage/NewsletterSection';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <AboutCard></AboutCard>
            <PopularCategories></PopularCategories>
            <RecipesFastpage data={data}></RecipesFastpage>
            <TestimonialSection></TestimonialSection>
            <FounderSection></FounderSection>
            <Coverage></Coverage>
            <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default Home;