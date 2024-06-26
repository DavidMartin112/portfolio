import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import Stepper from '../Stepper/stepper';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        if (!form.current.from_name.value || !form.current.from_email.value || !form.current.message.value) {
            alert(t('error_empty_fields'));
            return;
        }
        emailjs.sendForm('service_oh0ecnn', 'template_zi7ocgk', form.current, { publicKey: 'kiXPMMkJVI7RzuUQ2',})
            .then(
            () => {
                alert(t('success_email'));
            },
            (error) => {
                alert(t('error_send_email'), error.text);
            },
            );
        form.current.reset();
        };
    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>{t('my_chronology')}</h1>
                <p className='clientDesc'>
                    {t('description_chronology')}<br/>
                    {t('description_chronology2')}
                </p>
                <Stepper/>
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