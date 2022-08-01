import styled from "styled-components";

export const Header = styled.header`
  padding: 2rem 30%;
  margin: 0 -30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Link = styled.a`
  font-size: 2rem;
  margin: 1rem;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease-in;

  &:hover {
    text-decoration: underline;
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
