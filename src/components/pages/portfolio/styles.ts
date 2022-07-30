import styled from "styled-components";

export const Header = styled.header`
  background-color: #eee;
  height: 12rem;
`;

export const Section = styled.section`
  margin: 8rem 15%;
  display: flex;
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin-right: 10rem;
`;

export const Img = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 4.2rem;
  margin-bottom: 5rem;
`;

export const Subtitle = styled.h3`
  font-size: 2.8rem;
  line-height: 4rem;
  //TODO grid style is used only for the skills section(fix this)
  grid-column-start: 1;
  grid-column-end: 3;
`;

//TODO fix this diferent sections styles
export const SectionSkills = styled.section`
  margin: 8rem 15%;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const Skills = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: 2rem 6rem 0 0;
`;

export const SkillCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid #eee;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #eee;
  }
`;

export const SkillLogo = styled.img`
  width: 10rem;
  height: 8rem;
  object-fit: contain;
`;

export const SkillTitle = styled.h5`
  font-size: 2.4rem;
  margin-top: 2rem;
`;

export const SkillDescription = styled.h5`
  font-size: 2rem;
  line-height: 3rem;
  margin-top: 2rem;
`;
