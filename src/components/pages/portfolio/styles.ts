import styled from "styled-components";

export const Header = styled.header`
  padding: 2rem 30%;
  margin: 0 -30%;
  box-shadow: 0px 3px 10px rgba(108, 99, 255, 0.2);
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(108, 99, 255, 0.2);
`;

export const Link = styled.a`
  font-size: 2rem;
  margin: 1rem;
  color: #000;
  text-decoration: none;
  transition: all 0.2 ease-in-out;
  &:hover {
    color: #6c63ff;
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
  opacity: 80%;
  transition: all 0.2 ease-in-out;

  &:hover {
    opacity: 100%;
  }
`;

export const Section = styled.section`
  margin: 15rem 0;
  display: flex;
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin-right: 10rem;
`;

export const Img = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 2px 5px 25px rgba(108, 99, 255, 0.3);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 4.2rem;
  margin-bottom: 3rem;
`;

export const Subtitle = styled.h3`
  font-size: 2.8rem;
  line-height: 4rem;
  grid-column-start: 1;
  grid-column-end: 3;
  margin-bottom: 2rem;
`;
