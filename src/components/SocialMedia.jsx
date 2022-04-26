import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import Mailto from './Mailto';

const SocialMedia = () => {
  return (
    <>
      <div className="app__social">
        <div>
          <a
            href="https://github.com/wsasouza"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/waltersasouza/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div>
          <Mailto
            email="wsasouza@hotmail.com"
            subject="Contato via Portfólio"
            body="Olá Walter, tudo bem?"
          >
            <FaRegEnvelope />
          </Mailto>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=5516999871407"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
