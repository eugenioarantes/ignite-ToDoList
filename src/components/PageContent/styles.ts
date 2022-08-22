import { convertPixelToRem } from 'css-blocks-styled-components';
import styled, { css } from 'styled-components';

interface StatusTaskProps {
  $color: string;
}


export const Container = styled.div`
  margin: 0 auto;
  margin-top: ${convertPixelToRem(-35)};
  max-width: 50%;
`;

export const CreateTaskContainer = styled.div`
  display: flex;
  height: ${convertPixelToRem(55)};

  input {
    width: 85%;
    padding: ${convertPixelToRem(16)};
    color: #FFFFFF;
    font-family: 'Inter';

    background: #323232;

    border: 1px solid #0D0D0D;
    border-radius: 8px;

    ::placeholder {
      color: #808080;
    }
  }
`;

export const CreateTaskButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${convertPixelToRem(8)};

    margin-left: ${convertPixelToRem(10)};
    padding: 16px;
    width: 15%;
    border: 0;
    background: #1E6F9F;
    border-radius: 8px;
    color: #F2F2F2;

    transition: background-color 0.5s;

    span {
     font-family: 'Inter';
     font-weight: 700;
    }

    svg {
      font-size: ${convertPixelToRem(16)};
    }

    :hover {
      background: #1A6693;
    }
`;

export const TaskInformations = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: ${convertPixelToRem(65)};

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

export const TaskNumberInformation = styled.span`
    margin-left: ${convertPixelToRem(8)};
    background: #222222;
    color: #D9D9D9;

    font-size: 12px;
    line-height: 15px;
    border-radius: 999px;

    align-items: center;
    padding: 2px 8px;
`;

export const StatusTask = styled.div<StatusTaskProps>`
  ${({ $color }) =>
    css`
      color: ${$color};
    `
  };
`;

export const Line = styled.hr`
  margin-top: ${convertPixelToRem(25)};
  border: 2px solid #323232;
  border-radius: 10px;
  border-top: thin;
`;

export const TasksList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${convertPixelToRem(90)};

  /* background-color: wheat; */
`;

export const NoHaveTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter';
  color: #808080;
  font-size: 16px;
  line-height: 140%;

  img {
    width: ${convertPixelToRem(55)};
    height: ${convertPixelToRem(55)};
  }

  strong {
    margin-top: ${convertPixelToRem(16)};
  }
`;