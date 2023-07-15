import { styled } from "styled-components";

function Button({ size, color, onClick, children }) {
  return (
    <Btn size={size} color={color} onClick={onClick}>
      {children}
    </Btn>
  );
}

const Btn = styled.button`
  cursor: pointer;
  border-radius: 10px;
  line-height: 24px;
  &:active {
    filter: brightness(95%);
  }
  ${({ color }) => colorHandler(color)}
  ${({ size }) => sizeHandler(size)}
`;

const colorHandler = (color) => {
  switch (color) {
    case "white":
      return `background-color: white; color: black;`;
    case "black":
      return `background-color: black; color: #ffffff;`;
    default:
      return;
  }
};

const sizeHandler = (size) => {
  switch (size) {
    case "medium":
      return `font-size: 1rem; width: 8rem; height: 3rem;`;
    case "small":
      return `font-size: 0.8rem; width: 6rem; height: 2.5rem;`;
    default:
      return;
  }
};

export default Button;
