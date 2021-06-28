/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

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
