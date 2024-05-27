import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import Adobe from '../../assets/adobe.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        if (!form.current.from_name.value || !form.current.from_email.value || !form.current.message.value) {
            alert('Please fill out all fields');
            return;
        }
        emailjs.sendForm('service_oh0ecnn', 'template_zi7ocgk', form.current, { publicKey: 'kiXPMMkJVI7RzuUQ2',})
            .then(
            () => {
                alert('Your message has been sent successfully. I will get back to you soon.');
            },
            (error) => {
                alert('Not able to send email...', error.text);
            },
            );
        form.current.reset();
        };
    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>{t('my_clients')}</h1>
                <p className='clientDesc'>
                    {t('description_clients')}
                    {t('description_clients2')}
                </p>
                <div className='clientsImgs'>
                    <img src={Walmart} alt='Client' className='clientsImg'></img>
                    <img src={Adobe} alt='Client' className='clientsImg'></img>
                    <img src={Microsoft} alt='Client' className='clientsImg'></img>
                    <img src={Facebook} alt='Client' className='clientsImg'></img>
                </div>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>{t('contact_me')}</h1>
                <span className='contactDesc'>{t('form_request')}</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder={t('your_name')} name='from_name'/>
                    <input type='email' className='email' placeholder={t('your_email')} name='from_email'/>
                    <textarea className='msg' name='message' rows='5' placeholder={t('your_message')}></textarea>
                    <button type='submit' className='submit' value='Send'>{t('submit')}</button>
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