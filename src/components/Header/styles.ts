import { convertPixelToRem } from "css-blocks-styled-components";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: ${convertPixelToRem(200)};
  background: #0D0D0D;
`;

export const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${convertPixelToRem(65)};
`;