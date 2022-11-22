import styled, { keyframes } from "styled-components";
import { fadeInDown, fadeInUp } from "react-animations";

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const Section = styled.section`
  position: relative;
  padding: 5rem 15% 0 15%;

  @media screen and (max-width: 700px) {
    margin-bottom: 0;
    padding: 5rem 2rem 0 2rem;
  }
`;

//TODO fix subtitle style duplicated
export const Subtitle = styled.h3`
  font-size: 2.8rem;
  line-height: 4rem;
  margin-bottom: 2rem;
  color: var(--primary);
`;

export const Line = styled.div`
  height: 0.3rem;
  width: 100%;
  background-color: var(--neutral-light);
  border-radius: 1rem;
  margin: 18rem 0;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 700px) {
    height: 60rem;
    width: 0.3rem;
    margin: 3rem 0 0 2rem;
    flex-direction: column;
    padding: 3rem 0 5rem 0;
  }
`;

export const LineItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 50rem;

  span {
    width: 1rem;
    height: 1rem;
    background-color: var(--primary);
    border-radius: 50%;
    position: absolute;
    bottom: -0.4rem;
    display: flex;
    justify-content: center;
  }

  img,
  svg {
    width: 5rem;
    height: 5rem;
    flex-shrink: 0;
    color: var(--primary-light);
  }

  p {
    font-size: 1.6rem;

    a {
      color: var(--primary);
      font-style: italic;
      text-decoration: none;
    }
  }

  &:nth-child(odd) {
    margin-top: -17rem;

    svg,
    svg + p {
      animation: 1s ${fadeInDownAnimation};
    }

    svg {
      margin-bottom: 1rem;
    }

    span p {
      margin-top: -2.2rem;
    }
  }

  &:nth-child(even) {
    margin-top: 9rem;

    span p {
      margin-top: 1.5rem;
    }

    svg,
    svg + p {
      animation: 1s ${fadeInUpAnimation};
    }
  }

  @media screen and (max-width: 700px) {
    justify-content: flex-start;
    flex-direction: row;
    margin-left: 4rem;
    text-align: left;
    width: 30rem;

    span {
      bottom: initial;
      left: -0.4rem;
      transform: translateY(-1rem);

      p {
        margin-top: 4rem;
        width: 4rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fcfcfc;
      }
    }

    svg {
      margin-right: 2rem;
    }

    &:nth-child(odd) {
      margin-top: 0;

      span p {
        margin-top: 2rem;
      }
    }

    &:nth-child(even) {
      margin-top: 0;

      span p {
        margin-top: 2rem;
      }
    }
  }
`;

export const Waves = styled.div`
  position: absolute;
  bottom: -28rem;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 59px;
  }

  .shape-fill {
    fill: var(--secondary-gradient);
  }

  @media screen and (max-width: 700px) {
    bottom: -10rem;
  }
`;
