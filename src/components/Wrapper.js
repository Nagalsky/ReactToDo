/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Wrapper = ({ children }) => {
  return (
    <div
      css={css`
        width: 600px;
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  );
};

export default Wrapper;
