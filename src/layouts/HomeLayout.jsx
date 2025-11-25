import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../components/Header';
import Navber from '../components/Navber';
import FooterSection from '../components/FooterSection';
import Loading from '../pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigate();
    return (
        <div>
            <header>
                <Navber></Navber>
            </header>
            <main>
                <section>
                  {state=="loading" ? <Loading></Loading> : <Outlet></Outlet>}
                </section>
            </main>
            <footer>
               <FooterSection></FooterSection>
            </footer>
        </div>
    );
};

export default HomeLayout;