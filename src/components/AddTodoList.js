import React, { Component } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

class AddTodoList extends Component {
  state = {
    addUserInput: '',
  }

  handleChange = e => {
    const { id, value } = e.currentTarget
    this.setState({ [id]: value })
  }

  onBtnClickHandler = e => {
    e.preventDefault()
    const { addUserInput } = this.state

    this.props.onAddListItem({
      id: +new Date(),
      title: addUserInput,
    })
  }

  formValidate = () => {
    const { addUserInput } = this.state
    if (addUserInput.trim()) {
      return true
    }
    return false
  }

  render() {
    const { addUserInput } = this.state

    return (
      <form
        css={css`
          display: flex;
          margin-top: 20px;
        `}
      >
        <input
          id="addUserInput"
          type="text"
          value={addUserInput}
          onChange={this.handleChange}
          placeholder="Введите новую задачу"
          css={css`
            flex: 1;
            border: none;
            padding: 5px 15px;
            border-radius: 4px;
            height: 36px;
            font-size: 16px;
            color: #282c34;
            font-weight: bold;
            border: 3px solid #ffffff;
            &:focus {
              outline: none;
              border-color: #61dafb;
            }
          `}
        />
        <button
          type="button"
          disabled={!this.formValidate()}
          onClick={this.onBtnClickHandler}
          css={css`
            flex-shrink: 0;
            margin-left: 20px;
            border: none;
            padding: 5px 15px;
            display: inline-block;
            border-radius: 4px;
            background-color: #fff;
            color: #282c34;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            cursor: ${this.formValidate()
              ? 'pointer'
              : 'not-allowed'};
            opacity: ${this.formValidate() ? 1 : 0.5};
            &:hover,
            &:focus {
              background-color: #61dafb;
              color: #282c34;
              outline: none;
            }
          `}
        >
          Отправить
        </button>
      </form>
    )
  }
}

export default AddTodoList
