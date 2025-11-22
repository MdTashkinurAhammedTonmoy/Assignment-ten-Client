import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Navber from '../components/Navber';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navber></Navber>
            </header>
            <main>
                <section>
                    <Outlet></Outlet>
                </section>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;