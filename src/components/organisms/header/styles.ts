import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 15%;
  position: relative;
  z-index: 99;

  @media screen and (max-width: 700px) {
    padding: 2rem;
  }
`;

export const Link = styled.a`
  font-size: 2rem;
  margin: 1rem;
  color: #fff;
  text-decoration: none;
  transition: all 0.1s ease-in;

  &:hover {
    text-decoration: underline;
    color: var(--primary);
  }

  & svg {
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
    cursor: pointer;
    transition: all 0.1s ease-in;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const LogoLink = styled.a`
  svg {
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
    cursor: pointer;
    transition: all 0.1s ease-in;
    color: var(--primary);

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
`;
