import styled from "styled-components";

export const Section = styled.section`
  margin: 10rem 0 15rem 0;
  display: flex;
  position: relative;
  align-items: center;
  color: #fff;
`;

export const Background = styled.div`
  position: absolute;
  z-index: -99;
  top: -25rem;
  left: -30%;
  right: -30%;
  width: 160%;
  height: 100rem;
  filter: blur(10px) contrast(110%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 700px) {
    width: 130%;
    left: -15%;
    right: -15%;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin-right: 10rem;

  img {
    width: 30rem;
    height: 40rem;
    border-radius: 1rem;
    object-fit: cover;
  }

  @media screen and (max-width: 700px) {
    margin-right: 2rem;
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
