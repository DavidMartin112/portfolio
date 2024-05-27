import React from 'react';
import './footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id='footer'>
            {t('footer_desc')}
        </footer>
    );
};

export default Footer;