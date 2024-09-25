import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import { useTranslation } from 'react-i18next';

const Works = () => {
    const { t } = useTranslation();

    return (
        <section id='works'>
            <h2 className='worksTitle'>{t('my')} {t('portfolio')}</h2>
            <span className='worksDesc'>{t('works_desc')}</span>
            <div className='worksImgs'>
                <a href='https://github.com/DavidMartin112/portfolio' target='_blank' rel='noopener noreferrer'>
                    <img src={Portfolio1} alt='' className='worksImg' />
                </a>
                <a href='https://github.com/DavidMartin112/IvoryBot' target='_blank' rel='noopener noreferrer'>
                    <img src={Portfolio2} alt='' className='worksImg' />
                </a>
                <a href='https://www.zucchetti.es/solmicro-digital-hub/erp-ley-antifraude-crea-y-crece.html' target='_blank' rel='noopener noreferrer'>
                    <img src={Portfolio3} alt='' className='worksImg' />
                </a>
                <a href='https://www.solmicro.com/crm-programa-de-gestion-de-clientes' target='_blank' rel='noopener noreferrer'>
                    <img src={Portfolio4} alt='' className='worksImg' />
                </a>
                {/* <a href='GESTOR FINANCIERO' target='_blank' rel='noopener noreferrer'> */}
                    <img src={Portfolio5} alt='' className='worksImg' />
                {/* </a> */}
                {/* <a href='AI IMAGE SMTHNG' target='_blank' rel='noopener noreferrer'> */}
                    <img src={Portfolio6} alt='' className='worksImg' />
                {/* </a> */}
            </div>
            <a href='https://github.com/DavidMartin112' target='_blank' rel='noopener noreferrer'>
                <button className='worksBtn'>{t('see_more')}</button>
            </a>
        </section>
    );
};

export default Works;