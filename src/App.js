import React, { Component } from 'react'
import { remove } from 'lodash'
import Wrapper from './components/Wrapper'
import TodoList from './components/TodoList'
import AddTodoList from './components/AddTodoList'

const todoListData = [
  {
    id: 1,
    title: 'gg',
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

  handleRemoveListItem = id => {
    const { list } = this.state

    const newList = remove(list, function(listItem) {
      return listItem.id !== id
    })

    this.setState({ list: newList })
  }

  render() {
    return (
      <Wrapper>
        <AddTodoList onAddListItem={this.handleAddListItem} />
        <TodoList
          data={this.state.list}
          onRemoveListItem={this.handleRemoveListItem}
        />
        <p>
          Total items:
          <b>
            {this.state.list.length ? (
              <React.Fragment>
                {this.state.list.length}
              </React.Fragment>
            ) : (
              0
            )}
          </b>
        </p>
      </Wrapper>
    )
  }
}

export default App
