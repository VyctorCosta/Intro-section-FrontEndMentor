import styled from "styled-components";

interface Props {
  isOpen?: boolean;
}

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  z-index: 1;
`;

export const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 7rem;
  position: relative;
  margin: 0 auto;
  padding: 3rem 4.5rem;
  max-width: 144rem;

  #snap-icon {
    position: relative;
    top: 0.6rem;
  }

  @media (max-width: 900px) {
    max-width: 37.5rem;
    justify-content: space-between;
    padding: 2rem 2rem;
  }
`;

export const DivNavBar = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: width 300ms ease;

  @media (max-width: 900px) {
    flex-direction: column;
    width: ${({ isOpen }) => (isOpen ? "23.75rem" : "0%")};
    height: 100vh;
    background-color: #eee;
    z-index: 2;
    position: absolute;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-4.1rem")};
    padding: 9.5rem 2rem;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3rem;
    overflow-x: hidden;
  }
`;

export const Navbar = styled.nav<Props>`
  display: flex;
  align-items: center;
  gap: 4rem;
  user-select: none;

  h2 {
    cursor: pointer;

    :hover {
      text-shadow: -0.06ex 0 black, 0.06ex 0 black;
    }
  }

  @media (max-width: 900px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DivLogin = styled.div<Props>`
  display: flex;
  gap: 4rem;

  button {
    border: none;
    background: none;
    cursor: pointer;

    :hover {
      text-shadow: -0.01ex 0 black, 0.01ex 0 black;
    }
  }

  #register-button {
    border: 2px solid #000;
    border-radius: 1.5rem;
    padding: 1rem 2rem;
  }

  @media (max-width: 900px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2rem;

    #register-button {
      width: 100%;
      color: ${({ isOpen }) => (isOpen ? "#000" : "transparent")};
    }
  }
`;

export const IconMenuButton = styled.button`
  display: none;
  background: inherit;
  border: none;
  cursor: pointer;
  z-index: 3;

  @media (max-width: 900px) {
    display: block;
  }
`;
