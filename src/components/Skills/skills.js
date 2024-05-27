import React from 'react';
import './skills.css';
import UIDesing from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section id='skills'>
            <span className='skillTitle'>{t('what_i_do')}</span>
            <span className='skillDesc'>{t('skills_desc')}</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesing} alt='UIDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>{t('skill1')}</h2>
                        <p>{t('skill1_desc')}</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>{t('skill2')}</h2>
                        <p>{t('skill2_desc')}</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>{t('skill3')}</h2>
                        <p>{t('skill3_desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;