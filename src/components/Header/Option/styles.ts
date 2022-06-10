import styled from "styled-components";

interface TitleProps {
  isSelected: boolean;
}

interface DivOptionsProps {
  top: string;
  left: string;
  width: string;
}

export const DivOption = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 901px) {
    :hover {
      h2 {
        text-shadow: -0.01ex 0 black, 0.01ex 0 black;
      }
    }
  }
`;

export const Title = styled.div<TitleProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
  cursor: pointer;
`;

export const DivOptions = styled.div<DivOptionsProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "auto")};
  background-color: #eee;
  padding: 2rem 2.5rem 3rem 2.5rem;
  border-radius: 0.8rem;
  gap: 2rem;
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => (left ? left : 0)};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);

  @media (max-width: 900px) {
    position: static;
    box-shadow: none;
    padding-bottom: 0;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  p {
    font-weight: 400;
  }
`;
