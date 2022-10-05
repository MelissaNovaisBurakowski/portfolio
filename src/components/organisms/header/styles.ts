import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 15%;
  max-width: 100%;
`;

export const Link = styled.a`
  font-size: 2rem;
  margin: 1rem;
  color: #fff;
  text-decoration: none;
  transition: all 0.1s ease-in;

  &:hover {
    text-decoration: underline;
    color: #e66465;
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;
