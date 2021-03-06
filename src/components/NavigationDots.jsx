/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'sobre', 'projetos', 'skills', 'contato'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#FAB105' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
