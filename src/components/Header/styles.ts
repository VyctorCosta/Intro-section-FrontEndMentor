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

  @media (max-width: 895px) {
    transition: width 500ms ease;
  }

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
      text-shadow: -0.01ex 0 black, 0.01ex 0 black;
    }
  }

  @media (max-width: 900px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;

    h2:hover {
      text-shadow: none;
    }
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

    button:hover {
      text-shadow: none;
    }

    #register-button {
      width: 100%;
      color: ${({ isOpen }) => (isOpen ? "#000" : "transparent")};
    }
  }
`;

export const MenuButton = styled.button`
  width: 3.2rem;
  height: 2.2rem;
  cursor: pointer;
  z-index: 3;
  background: transparent;
  border: none;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 3.2rem;
    height: 2.2rem;
    position: relative;
  }

  span {
    width: 100%;
    height: 0.2rem;
    border-radius: 0.5rem;
    background: #000;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -52%);
    transition: transform 0.5s, width 0.5s;
  }

  .menu .line-one {
    transform: translate(-50%, -1.1rem);
  }

  .menu .line-three {
    transform: translate(-50%, 0.8rem);
  }

  .open-menu .line-one {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .open-menu .line-three {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .open-menu .line-two {
    width: 0;
  }
`;
