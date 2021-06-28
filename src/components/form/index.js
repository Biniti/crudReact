/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './style.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input value={novaTarefa} onChange={handleChange} type="text" />
      <button type="submit">
        <>
          <FaPlus />
        </>
      </button>
    </form>
  );
}

Form.prototypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
