import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 20px;
      font-weight: 600;
    `}

  line-height: 1.4

    ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 40px;
      font-weight: 900;
    `}
`;

export default Heading;
