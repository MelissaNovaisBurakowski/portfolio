import styled from "styled-components";

export const Section = styled.section`
  margin: 0 -30% 8rem -30%;
  padding: 5rem 30% 8rem 30%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  background: linear-gradient(#e66465, #9198e5);
  color: #fff;
`;

export const Subtitle = styled.h3`
  font-size: 2.8rem;
  line-height: 4rem;
  margin-bottom: 2rem;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const SkillImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

export const SkillCard = styled.div`
  position: relative;

  input {
    position: absolute;
    opacity: 0;
    z-index: -9999;
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #05012e;
    padding: 1rem;
    height: 16rem;
    border-radius: 0.5rem;
    background-color: #fefefe;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.4);
    }
  }

  img {
    width: 8rem;
    height: 8rem;
    object-fit: contain;
  }

  p {
    font-size: 1.6rem;
    margin-top: 8px;
  }
`;

export const SkillDetails = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font-size: 2.4rem;
  }

  p {
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 2rem;
  }
`;
