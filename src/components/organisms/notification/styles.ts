import styled, { keyframes } from "styled-components";
import { fadeInDown, fadeOutUp } from "react-animations";

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeOutUpAnimation = keyframes`${fadeOutUp}`;

export const Notification = styled.section<{ showNotification: boolean }>`
  margin: 5rem 0;
  padding: 0 15%;
  position: absolute;
  font-size: 2rem;
  color: var(--info);
  display: flex;
  width: 100%;
  z-index: 99;
  justify-content: center;
  animation: 0.5s
    ${(props) =>
      props.showNotification ? fadeInDownAnimation : fadeOutUpAnimation}
    forwards;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    background-color: var(--info-light);
    padding: 2rem 3rem;
    position: relative;
  }

  button {
    background: none;
    border: none;
    margin-left: 2rem;
    display: flex;
    color: var(--info);
    align-items: center;
    cursor: pointer;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
