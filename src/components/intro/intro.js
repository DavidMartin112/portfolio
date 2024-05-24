import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './intro.css';
import bg from '../../assets/image2.png';
import { Link } from 'react-scroll';
import { FaPenToSquare } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa6";

const Intro = () => {
    const [colorPickerVisible, setColorPickerVisible] = useState(false);
    const [secondaryColor, setSecondaryColor] = useState('yellow');

    const handleColorChange = (color) => {
        const root = document.documentElement;
        root.style.setProperty('--secondary-color', color.hex);
        setSecondaryColor(color.hex);
    };

    // const handleDocumentClick = (event) => {
    //     if (colorPickerVisible && !event.target.closest('.colorPicker')) {
    //         setColorPickerVisible(false);
    //     }
    // };

    // document.addEventListener('click', handleDocumentClick);

    return (
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>
                    David 
                    <button className='colorPickerToggle' onClick={() => setColorPickerVisible(!colorPickerVisible)}>
                        <FaPenToSquare className='editImg'/>
                    </button>
                    {colorPickerVisible && (
                    <div className='colorPicker'>
                        <SketchPicker
                            color={secondaryColor}
                            onChangeComplete={handleColorChange}
                        />
                    </div>
                    )}
                    </span> <br />Software Developer</span>
                <p className='introPara'>I am a skilled software developer with experience creating <br /> visually appealing and user friendly websites.</p>
                <Link><button className='btn'><FaSuitcase  className='btnImg'/>Hire Me</button></Link>   
            </div>
            <img src={bg} alt='Profile' className='bg'/>
        </section>
    )
};

export default Intro;