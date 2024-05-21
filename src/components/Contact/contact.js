import React from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import Adobe from '../../assets/adobe.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';

const Contact = () => {
    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className='clientDesc'>
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className='clientsImgs'>
                    <img src={Walmart} alt='Client' className='clientsImg'></img>
                    <img src={Adobe} alt='Client' className='clientsImg'></img>
                    <img src={Microsoft} alt='Client' className='clientsImg'></img>
                    <img src={Facebook} alt='Client' className='clientsImg'></img>
                </div>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm'>
                    <input type='text' className='name' placeholder='Your Name'/>
                    <input type='email' className='email' placeholder='Your Email'/>
                    <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                    <button className='submit' value='Send' type='submit'>Submit</button>
                    <div className='links'>
                        <img src={FacebookIcon} alt='Facebook' className='link'></img>
                        <img src={TwitterIcon} alt='Twitter' className='link'></img>
                        <img src={YoutubeIcon} alt='Youtube' className='link'></img>
                        <img src={InstagramIcon} alt='Instagram' className='link'></img>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;