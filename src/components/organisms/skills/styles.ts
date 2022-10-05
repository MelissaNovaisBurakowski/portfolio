import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  /* background: linear-gradient(#e66465, #9198e5); */
  background-color: #e66465;
  color: #fff;
  position: relative;
  flex-flow: row wrap;

  @media screen and (max-width: 700px) {
    margin: 0 -15% 8rem -15%;
    padding: 5rem 15% 10rem 15%;
  }
`;

export const Subtitle = styled.h3`
  font-size: 2.8rem;
  line-height: 4rem;
  margin-bottom: 2rem;
  width: 100%;
  display: block;
`;

export const SkillImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 45%;
  margin-right: 2rem;

  @media screen and (max-width: 700px) {
    margin-right: 1rem;
  }
`;

export const SkillCard = styled.div`
  position: relative;
  margin: 1rem;

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
    height: 12rem;
    width: 11rem;
    border-radius: 0.5rem;
    background-color: #f9f9f9;
    transition: box-shadow 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.4);
    }
  }

  img {
    width: 7rem;
    height: 7rem;
    object-fit: contain;
  }

  p {
    font-size: 1.6rem;
    margin-top: 8px;
  }

  @media screen and (max-width: 700px) {
    margin: 10px 5px;
    border: none;
    flex-shrink: 0;

    label {
      height: 10rem;
      width: 8rem;
      padding: 10px;
      flex-shrink: 0;
      border: none;
    }

    img {
      width: 4rem;
      height: 4rem;
      flex-shrink: 0;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

export const SkillDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  h5 {
    font-size: 2.4rem;
  }

  p {
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 2rem;
  }

  @media screen and (max-width: 700px) {
    h5 {
      font-size: 2rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 3rem;
      margin-top: 1.44rem;
    }
  }
`;

export const Waves = styled.div`
  position: absolute;
  bottom: -2px;
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
