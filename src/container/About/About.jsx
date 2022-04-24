import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const abouts = [
  {
    title: 'Web Designer',
    description:
      'Sou um web designer apaixonado por criar aplicativos elegantes e funcionais.',
    imgUrl: images.about01,
  },
  {
    title: 'Front-End',
    description:
      'Desenvolvimento de websites, landing pages, Single Page Applications utilizando HTML, CSS, Javascript e bibliotecas, ferramentas & frameworks como Figma, ReactJS, NextJS, TailwindCSS, MUI5, Chakra-UI, entre outros.',
    imgUrl: images.about02,
  },
  {
    title: 'Back-End',
    description:
      'Desenvolvimento de APIs REST ou GraphQL utilizando a tecnologia Node.js em conjunto com frameworks Express e Nest, ORMs como Prisma e TypeORM, contêineres Docker, bancos de dados relacionais MySQL, Postgres e SQL Server e também bancos de dados NoSQL como MongoDB e Redis.',
    imgUrl: images.about03,
  },
  {
    title: 'Mobile',
    description:
      'Desenvolvimento de aplicativos nativos para os sistemas Android e IOS utilizando a biblioteca Javascript React Native com a própria CLI ou com a ferramenta Expo.',
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Eu sei que <span>bom software</span>
        <br />
        significa <span>bons negócios</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
