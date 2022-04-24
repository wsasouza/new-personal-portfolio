import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div>
      <div className="app__social">
        <div>
          <FaGithub />
        </div>
        <div>
          <FaLinkedinIn />
        </div>
        <div>
          <FaRegEnvelope />
        </div>
        <div>
          <FaWhatsapp />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
