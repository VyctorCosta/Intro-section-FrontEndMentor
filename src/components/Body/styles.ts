import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 144rem;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 8rem;
  padding: 0 16rem;
  gap: 14rem;
`;

export const Title = styled.h1`
  font: 700 7rem "Epilogue", sans-serif;
  margin-top: 16rem;
  margin-bottom: 5rem;

  @media (max-width: 1380px) {
    font-size: 6rem;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  #description {
    line-height: 2.5rem;
    font-size: 1.9rem;
    max-width: 50rem;
    margin-bottom: 5rem;
  }
`;

export const LearnMoreButton = styled.button`
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 1.7rem;
  padding: 1.8rem 0;
  max-width: 17rem;
  font-size: 1.9rem;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 10rem;
  border: 1px solid #000;

  :hover {
    color: #000;
    background-color: #fff;
  }
`;

export const DivClients = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;

  @media (max-width: 1170px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Picture = styled.picture`
  width: 44.1rem;
  height: 58.8rem;

  img {
    height: 58.8rem;
  }

  @media (max-width: 1170px) {
    position: relative;
    top: -15rem;
  }

  @media (max-width: 1000px) {
    width: 34.1rem;

    img {
      width: 34.1rem;
      height: 48.8rem;
    }
  }
`;
