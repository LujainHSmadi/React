import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import MovieList from './MovieList';
import './home.css';

export default function Home() {
    return (
        <div className="home">
            {/* Nav */}
            <Navbar />
            {/* Banner */}
            <Banner />


            {/* Rows */}
            <MovieList/>

        </div>
    )
}