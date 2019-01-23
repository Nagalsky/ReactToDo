import React, { Component } from 'react'
import Wrapper from './components/Wrapper'
import TodoList from './components/TodoList'
import AddTodoList from './components/AddTodoList'

const todoListData = [
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 3,
    title:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

class App extends Component {
  state = {
    list: todoListData, // в начальное состояние положили значение из переменной
  }

  handleAddListItem = data => {
    // сначала мы формируем массив, на основе
    // всего того, что уже было в новостях
    // и кладем это все в новый массив +
    // новую новость кладем в начало массива
    const newListItem = [data, ...this.state.list]

    // затем обновляем новый массив новостей в this.state.list
    this.setState({ list: newListItem })
  }

  render() {
    return (
      <Wrapper>
        <AddTodoList onAddListItem={this.handleAddListItem} />
        <TodoList data={this.state.list} />
        {this.state.list.length ? (
          <strong>Всего новостей: {this.state.list.length}</strong>
        ) : null}
      </Wrapper>
    )
  }
}

export default App
