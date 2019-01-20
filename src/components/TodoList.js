/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const TotoList = props => {
  const { data } = props
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
      `}
    >
      {data.map((todoListItem, index) => {
        console.log(todoListItem)
        return (
          <li
            key={index}
            css={css`
              padding: 20px 15px;
              border-radius: 4px;
              background-color: #61dafb;
              color: #282c34;
              &:not(:first-of-type) {
                margin-top: 20px;
              }
            `}
          >
            {todoListItem.title}
          </li>
        )
      })}
    </ul>
  )
}

export default TotoList
