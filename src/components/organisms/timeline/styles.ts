import styled from "styled-components";

export const Section = styled.section`
  margin: 5rem 0 20rem;
`;

//TODO fix subtitle style duplicated
export const Subtitle = styled.h3`
  font-size: 2.8rem;
  line-height: 4rem;
  margin-bottom: 2rem;
  color: #6c63ff;
`;

export const Line = styled.div`
  height: 0.3rem;
  width: 100%;
  background-color: rgba(108, 99, 255, 0.4);
  border-radius: 1rem;
  margin: 18rem 0;
  position: relative;
`;

export const LineItem = styled.div`
  position: relative;

  span {
    width: 1rem;
    height: 1rem;
    background-color: #6c63ff;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
  }

  img {
    position: absolute;
    width: 5rem;
    height: 5rem;
  }

  p {
    position: absolute;
    max-width: 25rem;
    font-size: 1.6rem;
    text-align: center;

    a {
      color: #6c63ff;
      font-style: italic;
      text-decoration: none;
    }
  }

  &:nth-child(odd) {
    top: -8rem;
    p {
      transform: translate(-38%, calc(-100% - 1rem));
    }
    span {
      top: 7.6rem;
      left: 2rem;
      p {
        top: 0.5rem;
      }
    }
  }

  &:nth-child(even) {
    top: 4rem;
    p {
      transform: translate(-38%, 6rem);
    }
    span {
      top: -4.4rem;
      left: 2rem;
      p {
        top: -4rem;
      }
    }
  }

  &:nth-child(1) {
    left: 10%;
  }

  &:nth-child(2) {
    left: 35%;
  }

  &:nth-child(3) {
    left: 60%;
  }
  &:nth-child(4) {
    left: 85%;
  }
`;
