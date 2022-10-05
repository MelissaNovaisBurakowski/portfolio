import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 15% 15rem 15%;
  background: linear-gradient(#e66465, #9198e5);
  /* background-color: #e66465; */
  position: relative;

  @media screen and (max-width: 700px) {
    padding: 5rem 2rem 10rem 2rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 2.8rem;
  margin: 2rem 0 4rem 0;
  width: 100%;
  display: block;
  color: white;
  text-align: center;
`;

export const Card = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  max-width: 90rem;
  height: 50rem;
  border-radius: 0.6rem;
  box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.4);
  padding: 3rem;
  overflow: hidden;
  position: relative;
  font-size: 2rem;

  @media screen and (max-width: 700px) {
    height: 65rem;
  }
`;

export const Aside = styled.aside`
  margin-right: 1rem;
  //TODO cahnge color
  background-color: #ffe2e2;
  margin: -3rem 0 -3rem -3rem;
  padding: 3rem;
  z-index: 9;
  ul {
    list-style: none;
  }
  li {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    position: relative;

    input {
      display: none;
    }

    input:checked + span {
      opacity: 1;
      height: 3rem;
    }

    label {
      display: flex;
      align-items: center;
      cursor: pointer;
      text-transform: capitalize;
    }

    img {
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
    }

    span {
      clip-path: polygon(0 50%, 100% 100%, 100% 0);
      width: 3rem;
      position: absolute;
      right: -4rem;
      background-color: white;
      opacity: 0;
      height: 0rem;
      transition: all 0.2s ease-in-out;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 3rem 2rem 2rem 2rem;

    li {
      img {
        width: 2rem;
        height: 2rem;
      }
    }

    font-size: 1.6rem;
  }
`;

export const SkillDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 0 4rem;
  z-index: 9;

  h5 {
    font-size: 2.4rem;
  }

  p {
    line-height: 4rem;
    margin-top: 2rem;
  }

  @media screen and (max-width: 700px) {
    padding: 0 2rem 0 2rem;

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

export const SkillBackground = styled.img`
  opacity: 0.2;
  position: absolute;
  bottom: -20rem;
  right: -2rem;
  width: 40rem;
  height: 40rem;
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
