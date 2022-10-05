import styled from "styled-components";

export const Section = styled.section`
  padding: 0 15%;
  margin: 10rem 0 15rem 0;
  display: flex;
  position: relative;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
  }
`;

export const Background = styled.div`
  position: absolute;
  z-index: -99;
  top: -25rem;
  left: 0;
  right: 0;
  height: 100rem;
  overflow: hidden;

  img {
    width: 110%;
    height: 100%;
    margin-left: -5%;
    object-fit: cover;
    filter: blur(10px) contrast(115%);
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
  margin-bottom: 3rem;

  @media screen and (max-width: 700px) {
    font-size: 3.2rem;
    margin-top: 3rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 3.2rem;
  line-height: 4rem;
  grid-column-start: 1;
  grid-column-end: 3;

  @media screen and (max-width: 700px) {
    font-size: 2rem;
    font-weight: 400;
  }
`;

export const SubtitlePrimary = styled.span`
  /* color: #e3e278; */
  color: #71f580;
  -webkit-text-stroke: 1px rgba(259, 259, 259, 0.2);
`;
