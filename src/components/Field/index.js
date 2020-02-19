import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  type,
  name,
  placeholder,
  handleChange,
  checked,
  value,
  hasLabel,
}) => (
  <>
    {type === 'checkbox' ? (
      <>
        <input
          className="checkbox"
          type={type}
          id={name}
          checked={checked}
          onChange={handleChange}
        />
        <label htmlFor={name}>{placeholder}</label>
      </>
    ) : (
      <>
        {hasLabel && <label htmlFor={name}>{placeholder}</label>}
        <input
          type={type}
          className="input"
          id={name}
          value={value}
          name={name}
          placeholder={!hasLabel ? placeholder : ''}
          onChange={handleChange}
        />
      </>
    )}
  </>
);

Field.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  hasLabel: PropTypes.bool,
  value: PropTypes.string,
  checked: PropTypes.bool,
};

Field.defaultProps = {
  type: 'text',
  checked: false,
  hasLabel: false,
  value: '',
  handleChange: () => {},
};

export default Field;
