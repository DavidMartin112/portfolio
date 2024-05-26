import React from 'react';
import './downloader.css';
import { FaSuitcase } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const Downloader = () => {
  const { t } = useTranslation();
  const pdfUrl = `${process.env.PUBLIC_URL}/DavidCV.pdf`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'DavidCV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className='btn' onClick={handleDownload}>
        <FaSuitcase  className='btnImg'/>Hire Me
    </button>
  );
};

export default Downloader;
