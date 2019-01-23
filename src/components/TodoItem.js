import React, { Component } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const buttonStyled = css`
  border: none;
  padding: 5px 15px;
  display: inline-block;
  border-radius: 4px;
  background-color: #fff;
  color: #282c34;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
  &:hover,
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #282c34;
    color: #61dafb;
    outline: none;
  }
`

class TodoItem extends Component {
  state = {
    isDone: false,
    isShow: true,
  }

  onBtnDoneClickHandler = e => {
    e.preventDefault()

    this.setState({
      isDone: !this.state.isDone,
    })
  }

  toggleDoneState = () => {
    const { isDone } = this.state
    if (isDone) {
      return true
    }
    return false
  }

  onBtnShowClickHandler = e => {
    e.preventDefault()

    this.setState({
      isShow: !this.state.isShow,
    })
  }

  render() {
    const { data } = this.props
    const { isDone, isShow } = this.state

    return (
      <React.Fragment>
        {isShow && (
          <li
            css={css`
              padding: 20px 180px 20px 15px;
              border-radius: 4px;
              background-color: #61dafb;
              color: #282c34;
              word-break: break-word;
              position: relative;
              text-decoration: ${!this.toggleDoneState()
                ? 'none'
                : 'line-through'};
              &:not(:first-of-type) {
                margin-top: 20px;
              }
            `}
          >
            <p
              css={css`
                margin: 0;
              `}
            >
              {data.title}
            </p>
            <div
              css={css`
                position: absolute;
                display: flex;
                flex-direction: row;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
              `}
            >
              <button
                css={css`
                  ${buttonStyled};
                `}
                onClick={this.onBtnDoneClickHandler}
              >
                Done
              </button>
              <button
                css={css`
                  ${buttonStyled};
                  margin-left: 10px;
                `}
                onClick={this.onBtnShowClickHandler}
              >
                Remove
              </button>
            </div>
          </li>
        )}
      </React.Fragment>
    )
  }
}

export default TodoItem
