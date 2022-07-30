import styled from "styled-components";

export const Section = styled.section`
  margin: 10rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid rgba(108, 99, 255, 0.2);
  box-shadow: 0px 3px 10px rgba(108, 99, 255, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 5px 15px rgba(108, 99, 255, 0.4);
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
