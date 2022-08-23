import { convertPixelToRem, flex, getPadding } from "css-blocks-styled-components";
import styled, { css } from "styled-components";
import { BiTrash } from 'react-icons/bi';
import { SiVerizon } from 'react-icons/si';

interface VerifyIconProps {
  $checked: boolean;
}

export const ProjectContainer = styled.div`
  background: #323232;
  color: #F2F2F2;
  border-radius: 5px;
  font-family: 'Inter';

  & + & {
    margin-top: ${convertPixelToRem(30)};
  }

  border: 1px solid #404040;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
`;

export const ProjectCard = styled.div`
  ${getPadding(17, 22)}
  ${flex.alignCenter}

  & + & {
    margin-top: ${convertPixelToRem(30)};
  }

`;

export const VerifyIcon = styled(SiVerizon)<VerifyIconProps>`
  display: none;
  position: absolute;
  width: 9px;
  height: 9px;
  top: 7px;
  left: 7px;

  ${({ $checked }) =>
    ($checked) &&
    css`
      display: flex;
    `
  }
  
`;

export const Checkbox = styled.input`
  margin-right: ${convertPixelToRem(12)};
  
  :focus {
    box-shadow: none;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    width: 16px;
    height: 16px;
    background-color: #323232;
    border-radius: 50%;
    border: 3px solid #4EA8DE;
  }

  :checked {
    :before {
      content: "";
      background-color: #5E60CE;
      border: 3px solid #5E60CE;
    }
  }
`;

export const ContentLabel = styled.label<VerifyIconProps>`
  position: relative;

  display: flex;
  align-items: center;

  margin-right: ${convertPixelToRem(12)};

  span {
    margin-left: ${convertPixelToRem(12)};
  }

  ${({ $checked }) =>
    ($checked) &&
    css`
      span {
        text-decoration-line: line-through;
    }
    `
  }
`;

export const DeleteButton = styled.button`
  margin-left: auto;
  margin-right: ${convertPixelToRem(16)};
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const IconTrash = styled(BiTrash)`
  font-size: ${convertPixelToRem(22)};
  color: #808080;

  transition: color 0.5s;

  :hover {
    color: #c0c0c0;
  }
`;