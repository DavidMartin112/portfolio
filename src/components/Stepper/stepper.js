import React, { useState } from 'react';
import './stepper.css';
import Zucchetti from '../../assets/zucchetti.png';
import EHU from '../../assets/Ehu_logo.png';
import Dialog from '../Dialog/dialog';

const Stepper = () => {
    const [isEHUDialogOpen, setIsEHUDialogOpen] = useState(false);
    const openEHUDialog = () => { setIsEHUDialogOpen(true); };
    const handleCloseEHUDialog = () => { setIsEHUDialogOpen(false); };

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const openDialog = () => { setIsDialogOpen(true); };
    const handleCloseDialog = () => { setIsDialogOpen(false); };

    return (
        <div className='stepper'>
            <div className='step' onClick={openEHUDialog}>
                <span className='year'>2020</span>
                <img src={EHU} alt='Client' className='clientsImg'></img>
                <span className='year'>2024</span>
                <Dialog isOpen={isEHUDialogOpen} onClose={handleCloseEHUDialog}>
                    <h2>Info sobre la EHU</h2>
                    <p>You can put any content here.</p>
                </Dialog>
            </div>
            <div className='line'>
                <span className='duration'>4 years</span>
                <hr />
                <span className='duration'>1 year</span>
            </div>
            <div className='step' onClick={openDialog}>
                <span className='year'>2023</span>
                <img src={Zucchetti} alt='Client' className='clientsImg'></img>
                <span className='year'>20XX</span>
                <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog}>
                    <h2>Info sobre Zucchetti</h2>
                    <p>You can put any content here.</p>
                </Dialog>
            </div>
        </div>
    );
};

export default Stepper;