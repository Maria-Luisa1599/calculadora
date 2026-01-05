import styled from "styled-components";

export const ButtonContainer =  styled.button`
    margin: 2px;
    border: none;

    background-color: ${({ variant }) => {
    switch (variant) {
      case 'clear':
        return '#9e4840ff';
      case 'operations':
        return '#655242ff';
      case 'equals':
        return '#e1b943ff';
      default:
        return 'rgba(67, 59, 43, 1)';
    }
  }};

        font-size: ${({ size }) => {
    switch (size) {
      case 'bigger':
        return '28px';
      default:
        return '20px';
    }
  }};


    width: 30%;
    min-height: 10vh;

    color: white;
    border-radius: 50px;

    &:hover {
        opacity: 0.6;
    }
`