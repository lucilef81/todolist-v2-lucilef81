import React from 'react';
import TitleStyled from './TitleStyled';

const Title = ({ title }) => {
  return (
    <TitleStyled>
      <div className="title">
        <h2>{title}</h2>
      </div>
    </TitleStyled>
  );
};

export default Title;
