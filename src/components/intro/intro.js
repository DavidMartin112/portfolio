import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker } from 'react-color';
import './intro.css';
import bg from '../../assets/image2.png';
import { Link } from 'react-scroll';
import { FaPenToSquare } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa6";

const Intro = () => {
    const [colorPickerVisible, setColorPickerVisible] = useState(false);
    const [secondaryColor, setSecondaryColor] = useState('yellow');
    const colorPickerRef = useRef(null);

    const handleColorChange = (color) => {
        const root = document.documentElement;
        root.style.setProperty('--secondary-color', color.hex);
        setSecondaryColor(color.hex);
    };

    const handleClickOutside = (event) => {
        if (colorPickerRef.current && !colorPickerRef.current.contains(event.target) &&
            !event.target.closest('.colorPickerToggle')) {
            setColorPickerVisible(false);
        }
    };

    useEffect(() => {
        if (colorPickerVisible) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [colorPickerVisible]);

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
                    <div className='colorPicker' ref={colorPickerRef}>
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