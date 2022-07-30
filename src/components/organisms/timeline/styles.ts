import styled from "styled-components";

export const Section = styled.section`
  margin: 5rem 0 20rem;
`;

//TODO fix subtitle style duplicated
export const Subtitle = styled.h3`
  font-size: 2.8rem;
  line-height: 4rem;
  margin-bottom: 2rem;
`;

export const Line = styled.div`
  height: 1rem;
  width: 100%;
  background-color: #eee;
  border-radius: 1rem;
  margin: 10rem 0;
  position: relative;
`;

export const LineItem = styled.span`
  position: relative;

  input {
    width: 5rem;
    height: 5rem;
    position: absolute;
    opacity: 0;
  }

  img {
    position: absolute;
    width: 5rem;
    height: 5rem;
  }

  &:nth-child(1) {
    position: absolute;
    top: -5rem;
    left: 10%;
  }

  &:nth-child(2) {
    position: absolute;
    top: 1rem;
    left: 25%;
  }

  &:nth-child(3) {
    position: absolute;
    top: -5rem;
    left: 40%;
  }
`;
