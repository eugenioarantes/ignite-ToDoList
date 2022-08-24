import { convertPixelToRem } from "css-blocks-styled-components";
import styled from "styled-components";

export const Container = styled.div`
  float: right;
  margin-top: ${convertPixelToRem(30)};
`;

export const Button = styled.button`
  background: #9f9f9f;
  color: #000000;
  font-family: 'Inter';

  width: 30px;
  height: 30px;

  border: none;
  border-radius: 50%;

  cursor: pointer;
  transition: background-color 0.5s;

  span {
    display: flex;
    justify-content: center;
  }

  & + & {
    margin-left: 2px;
  }

  &:hover {
    background: gray;
  }

  &:disabled {
    background: #1e6f9f;
    color: white;
    cursor: default;
  }
`;