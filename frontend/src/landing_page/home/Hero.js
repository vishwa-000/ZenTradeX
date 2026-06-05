import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className='container p-5'>
      <div className='row text-center'>
        <img src='media/homeHero.png' alt='Hero Image' className='mb-5'/>
        <h1 className='mt-5'> Invest in everthing </h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds </p>
        <button className='p-2 btn btn-primary' style={{ width: '25%', margin: "0 auto" }}>Signup Now</button>
      </div>
    </div>
    );
}

export default Hero;