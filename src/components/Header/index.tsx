import { Container, LogoImage } from "./styles";

export const Header: React.FC = () => {
  
  return (
    <Container>
      <LogoImage>
        <img src="/logo.svg" alt="logoToDo"/>
      </LogoImage>
    </Container>
  );
};