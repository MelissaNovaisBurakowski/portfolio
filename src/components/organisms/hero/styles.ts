import styled from "styled-components";

export const Section = styled.section`
  margin: 15rem 0;
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
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin-right: 10rem;
`;

export const Img = styled.img`
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 2px 5px 25px rgba(108, 99, 255, 0.3);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 4.2rem;
  margin-bottom: 3rem;
`;

export const Subtitle = styled.h3`
  font-size: 3.2rem;
  line-height: 4rem;
  grid-column-start: 1;
  grid-column-end: 3;
  margin-bottom: 2rem;
`;
