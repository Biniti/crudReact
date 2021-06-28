/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (!tarefas) return;
    this.setState({
      tarefas,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleChange = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  }

  handleDelete = (event, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  }

  handleEdit = (event, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>
          Lista de tarefas
        </h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input value={novaTarefa} onChange={this.handleChange} type="text" />
          <button type="submit">
            <>
              <FaPlus />
            </>
          </button>
        </form>

        <ul className="tarefas">
          {
            tarefas.map((tarefa, index) => (
              <li key={index}>
                {tarefa}
                <span>
                  <FaEdit onClick={() => this.handleEdit(event, index)} className="edit" />
                  <FaWindowClose onClick={() => this.handleDelete(event, index)} className="delete" />
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
