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
    debug: false,
    resources: {
      en: {
        translation: {
          "home": "Home",
          "about": "About",
          "portfolio": "Portfolio",
          "chronology": "Chronology",
          "contact": "Contact",
          "contact_me": "Contact Me",
          "hello": "Hello",
          "I'm": "I'm",
          "software_developer": "software Developer",
          "description_intro": "I am a skilled software developer with experience creating",
          "description_intro2": "visually appealing and user friendly websites.",
          "download_cv": "Download CV",
          "my": "My",
          "my_chronology": "My Chronology",
          "description_chronology": "I have had the opportunity to work with a diverse group of organizations. ",
          "description_chronology2": "Some of the notable organizations I have worked with includes,",
          "form_request": "Please fill out the form below to discuss any work opportunities.",
          "submit": "Submit",
          "footer_desc": "This work is dedicated to the public domain by David Martin. No rights reserved.",
          "your_name": "Your Name",
          "your_email": "Your Email",
          "your_message": "Your Message",
          "works_desc": "I am passionate about design and development, with a meticulous focus on details. My goal is to ensure that each project not only meets, but exceeds expectations. I am committed to using my skills and experience to help companies achieve their goals and build an impactful presence in the digital world",
          "see_more": "See More",
          "what_i_do": "What I do",
          "skills_desc": "I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator",
          "skill1": "Backend Development",
          "skill2": "Frontend Development",
          "skill3": "Consulting & Project Management",
          "skill1_desc": "Development and maintenance of server-side applications and databases, ensuring robust, scalable, and secure backend architecture.",
          "skill2_desc": "Creation of responsive and user-friendly interfaces using modern frameworks and technologies, ensuring a seamless user experience.",
          "skill3_desc": "Providing expert advice on technology solutions, managing projects from inception to completion, and ensuring alignment with client requirements and business goals.",
          "error_empty_fields": "Please fill out all fields",
          "success_email": "Your message has been sent successfully. I will get back to you soon.",
          "error_send_email": "Not able to send email... Try again later!",
          "title_ehu": "University of the Basque Country",
          "title_zucchetti": "Zucchetti Spain",
          "text_ehu": "I completed my Software Engineering degree at Euskal Herriko Unibertsitatea (EHU). \nThe university is known for its comprehensive educational programs and research opportunities. \nDuring my studies, I gained a strong foundation in programming, software development, and problem-solving, \nwhich has significantly shaped my professional skills. The environment also encouraged innovation \nand collaboration, which has been invaluable in my career.",
          "text_zucchetti": "Zucchetti Spain is a leading software company specializing in ERP and business management solutions. \nI worked with them on various innovative projects, focusing on software development and integration \nsolutions for clients. The experience allowed me to apply and expand my skills in a professional setting, \ncollaborating with a highly skilled team. Zucchetti is well-regarded for its cutting-edge technology \nsolutions and has a strong presence in the Spanish market.",
          "years": "years",
          "years": "year"
      }
      },
      es: {
        translation: {
          "home": "Inicio",
          "about": "Sobre Mi",
          "portfolio": "Portfolio",
          "chronology": "Cronología",
          "contact": "Contactar",
          "contact_me": "Contactame",
          "hello": "Hola",
          "I'm": "Soy",
          "software_developer": "Ingeniero Informatico",
          "description_intro": "Soy un ingeniero informático con experiencia en la creación",
          "description_intro2": "de sitios web visualmente atractivos y fáciles de usar.",
          "download_cv": "Descargar CV",
          "my": "Mi",
          "my_chronology": "Mi Cronología",
          "description_chronology": "He tenido la oportunidad de trabajar con un grupo diverso de organizaciones. ",
          "description_chronology2": "Algunas de las organizaciones destacadas con las que he trabajado incluyen,",
          "form_request": "Por favor complete el formulario a continuación para discutir cualquier oportunidad de trabajo.",
          "submit": "Enviar",
          "footer_desc": "Este trabajo está dedicado al dominio público por David Martin. No se reservan derechos.",
          "your_name": "Tu Nombre",
          "your_email": "Tu Correo",
          "your_message": "Tu Mensaje",
          "works_desc": "Soy un apasionado del diseño y desarrollo, con un enfoque meticuloso en los detalles. Mi objetivo es asegurar que cada proyecto no solo cumpla, sino que supere las expectativas. Estoy comprometido a utilizar mis habilidades y experiencia para ayudar a las empresas a alcanzar sus metas y construir una presencia impactante en el mundo digital",
          "see_more": "Ver Mas",
          "what_i_do": "Lo que hago",
          "skills_desc": "Soy un diseñador web hábil y apasionado con experiencia en la creación de sitios web visualmente atractivos y fáciles de usar. Tengo un sólido conocimiento del diseño y un ojo agudo para el detalle. Soy competente en HTML, CSS y JavaScript, así como en software de diseño como Adobe Photoshop e Illustrator",
          "skill1": "Desarrollo Backend",
          "skill2": "Desarrollo Frontend",
          "skill3": "Consultoría y Gestión de Proyectos",
          "skill1_desc": "Desarrollo y mantenimiento de aplicaciones y bases de datos del lado del servidor, garantizando una arquitectura backend robusta, escalable y segura.",
          "skill2_desc": "Creación de interfaces receptivas y fáciles de usar utilizando marcos y tecnologías modernas, garantizando una experiencia de usuario perfecta.",
          "skill3_desc": "Proporcionar asesoramiento experto sobre soluciones tecnológicas, gestionar proyectos desde su inicio hasta su finalización y garantizar la alineación con los requisitos del cliente y los objetivos empresariales.",
          "error_empty_fields": "Por favor complete todos los campos",
          "success_email": "Su mensaje ha sido enviado con éxito. Me pondré en contacto contigo pronto.",
          "error_send_email": "No se puede enviar el correo electrónico... ¡Inténtalo de nuevo más tarde!",
          "title_ehu": "Euskal Herriko Unibertsitatea / Universidad del País Vasco",
          "title_zucchetti": "Zucchetti Spain",
          "text_ehu": "Completé mi grado en Ingeniería de Software en Euskal Herriko Unibertsitatea (EHU). \nLa universidad es conocida por sus completos programas educativos y oportunidades de investigación. \nDurante mis estudios, adquirí una sólida base en programación, desarrollo de software y resolución de problemas, \nlo que ha dado forma significativa a mis habilidades profesionales. El entorno también fomentaba la innovación \ny la colaboración, lo que ha sido invaluable en mi carrera.",
          "text_zucchetti": "Zucchetti Spain es una empresa de software líder especializada en soluciones ERP y de gestión empresarial. \nTrabajé con ellos en varios proyectos innovadores, enfocándome en el desarrollo de software e integración \nde soluciones para los clientes. La experiencia me permitió aplicar y ampliar mis habilidades en un entorno profesional, \ncolaborando con un equipo altamente cualificado. Zucchetti es muy reconocida por sus soluciones tecnológicas \nde vanguardia y tiene una fuerte presencia en el mercado español.",
          "years": "años",
          "year": "año",
        }
      }
    }
  });

export default i18n;
