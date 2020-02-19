import React from 'react';
import PropTypes from 'prop-types';

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

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
