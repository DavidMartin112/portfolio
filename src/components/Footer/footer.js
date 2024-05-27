import React from 'react';
import './footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id='footer'>
            This work is dedicated to the public domain by David Martin. No rights reserved.
        </footer>
    );
};

export default Footer;