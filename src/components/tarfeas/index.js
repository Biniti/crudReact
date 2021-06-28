import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './style.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <>
      <ul className="tarefas">
        {
            tarefas.map((tarefa, index) => (
              <li key={index}>
                {tarefa}
                <span>
                  <FaEdit onClick={() => handleEdit(event, index)} className="edit" />
                  <FaWindowClose onClick={() => handleDelete(event, index)} className="delete" />
                </span>
              </li>
            ))
          }
      </ul>
    </>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
