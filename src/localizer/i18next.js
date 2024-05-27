import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          "home": "Home",
          "about": "About",
          "portfolio": "Portfolio",
          "clients": "Clients",
          "contact": "Contact",
          "contact_me": "Contact Me",
          "hello": "Hello",
          "I'm": "I'm",
          "software_developer": "software Developer",
          "description_intro": "I am a skilled software developer with experience creating",
          "description_intro2": "visually appealing and user friendly websites.",
          "download_cv": "Download CV",
          "my": "My",
          "my_clients": "My Clients",
          "description_clients": "I have had the opportunity to work with a diverse group of companies.",
          "description_clients2": "Some of the notable companies I have worked with includes,",
          "form_request": "Please fill out the form below to discuss any work opportunities.",
          "submit": "Submit",
          "footer_desc": "This work is dedicated to the public domain by David Martin. No rights reserved.",
          "your_name": "Your Name",
          "your_email": "Your Email",
          "your_message": "Your Message",
          "works_desc": "I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skill and experience to help businesses achieve their goals and create a strong presence",
          "see_more": "See More",
          "what_i_do": "What I do",
          "skills_desc": "I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator",
          "skill1": "UI/UX Design",
          "skill2": "Website Design",
          "skill3": "App Design",
          "skill1_desc": "Designing user interfaces and user experience",
          "skill2_desc": "Designing visually appealing and user-friendly websites",
          "skill3_desc": "Designing mobile and desktop applications"
      }
      },
      es: {
        translation: {
          "home": "Inicio",
          "about": "Sobre Mi",
          "portfolio": "Portfolio",
          "clients": "Clientes",
          "contact": "Contactar",
          "contact_me": "Contactame",
          "hello": "Hola",
          "I'm": "Soy",
          "software_developer": "Ingeniero Informatico",
          "description_intro": "Soy un ingeniero informático con experiencia en la creación",
          "description_intro2": "de sitios web visualmente atractivos y fáciles de usar.",
          "download_cv": "Descargar CV",
          "my": "Mi",
          "my_clients": "Mis Clientes",
          "description_clients": "He tenido la oportunidad de trabajar con un grupo diverso de empresas.",
          "description_clients2": "Algunas de las empresas destacadas con las que he trabajado incluyen,",
          "form_request": "Por favor complete el formulario a continuación para discutir cualquier oportunidad de trabajo.",
          "submit": "Enviar",
          "footer_desc": "Este trabajo está dedicado al dominio público por David Martin. No se reservan derechos.",
          "your_name": "Tu Nombre",
          "your_email": "Tu Correo",
          "your_message": "Tu Mensaje",
          "works_desc": "Me enorgullezco de prestar atención a los detalles más pequeños y asegurarme de que mi trabajo sea perfecto en píxeles. Estoy emocionado de aportar mi habilidad y experiencia para ayudar a las empresas a alcanzar sus objetivos y crear una presencia sólida",
          "see_more": "Ver Mas",
          "what_i_do": "Lo que hago",
          "skills_desc": "Soy un diseñador web hábil y apasionado con experiencia en la creación de sitios web visualmente atractivos y fáciles de usar. Tengo un sólido conocimiento del diseño y un ojo agudo para el detalle. Soy competente en HTML, CSS y JavaScript, así como en software de diseño como Adobe Photoshop e Illustrator",
          "skill1": "Diseño UI/UX",
          "skill2": "Diseño de Sitios Web",
          "skill3": "Diseño de Aplicaciones",
          "skill1_desc": "Diseño de interfaces de usuario y experiencia de usuario",
          "skill2_desc": "Diseño de sitios web visualmente atractivos y fáciles de usar",
          "skill3_desc": "Diseño de aplicaciones móviles y de escritorio"
        }
      }
    }
  });

export default i18n;
