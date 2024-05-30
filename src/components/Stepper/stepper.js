import React from 'react';
import './stepper.css';
import Zucchetti from '../../assets/zucchetti.png';
import EHU from '../../assets/Ehu_logo.png';

const Stepper = () => {
    return (
        <div className='stepper'>
            <div className='step'>
                <span className='year'>2020</span>
                <img src={EHU} alt='Client' className='clientsImg'></img>
                <span className='year'>2024</span>
            </div>
            <div className='line'>
                <span className='duration'>4 years</span>
                <hr />
                <span className='duration'>1 year</span>
            </div>
            <div className='step'>
                <span className='year'>2023</span>
                <img src={Zucchetti} alt='Client' className='clientsImg'></img>
                <span className='year'>20XX</span>
            </div>
        </div> 
    );
};

export default Stepper;