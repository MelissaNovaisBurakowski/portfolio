import styled, { keyframes } from "styled-components";
// import { flash } from "react-animations";

// const flashAnimation = keyframes`${flash}`;

export const Background = styled.div`
  background: var(--primary-gradient);
`;

export const Section = styled.section`
  padding: 0 15%;
  margin-top: 10rem;
  display: flex;
  position: relative;
  align-items: center;
  color: #fff;
  z-index: 99;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin-right: 10rem;

  img {
    width: 30rem;
    height: 40rem;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  @media screen and (max-width: 700px) {
    margin: auto;
    img {
      width: 15rem;
      height: 18rem;
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 4.2rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 700px) {
    font-size: 3.2rem;
    margin-top: 3rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 3.2rem;
  line-height: 5rem;
  grid-column-start: 1;
  grid-column-end: 3;

  span {
    background-color: var(--primary);
    padding: 1rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 2rem;
    font-weight: 400;
  }
`;

export const Bubbles = styled.span`
  position: absolute;
  width: 50vw;
  height: 50vw;
  background-color: var(--primary);
  border-radius: 50%;
  opacity: 0.2;
  z-index: 9;
  right: 25%;
  top: -25%;

  &:nth-child(2) {
    transform: scale(0.6);
    right: 0;
    top: 20%;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
