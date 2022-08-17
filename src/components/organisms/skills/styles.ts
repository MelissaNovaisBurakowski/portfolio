import styled from "styled-components";

export const Section = styled.section`
  margin: 0 -30% 8rem -30%;
  padding: 5rem 30% 10rem 30%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  /* background: linear-gradient(#e66465, #9198e5); */
  background-color: #e66465;
  color: #fff;
  position: relative;
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

    &:checked + label {
      border: 2px solid rgba(108, 99, 255, 0.7);
      box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.4);
    }
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #05012e;
    padding: 1rem;
    height: 14rem;
    width: 13rem;
    border-radius: 0.5rem;
    background-color: #f9f9f9;
    transition: box-shadow 0.2s ease-in-out;
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

export const Waves = styled.div`
  position: absolute;
  bottom: 0;
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
    fill: #fcfcfc;
  }
`;
