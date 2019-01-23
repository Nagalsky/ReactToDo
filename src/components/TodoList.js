import React, { Component } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    const { data, onRemoveListItem } = this.props
    return (
      <ul
        css={css`
          list-style: none;
          padding: 0;
        `}
      >
        {data.map(dataItem => (
          <TodoItem
            key={dataItem.id}
            data={dataItem}
            onRemoveListItem={onRemoveListItem}
          />
        ))}
      </ul>
    )
  }
}

export default TodoList
