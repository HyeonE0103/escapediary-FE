import { styled } from "styled-components";

function Button({ size, color, onClick, children }) {
  const Button = styled.button`
    cursor: pointer;
    border-radius: 10px;
    line-height: 24px;
    &:active {
      filter: brightness(95%);
    }
    ${() => colorHandler(color)}
    ${() => sizeHandler(size)}
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

  return <Button onClick={onClick}>{children}</Button>;
}

export default Button;
