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
  position: relative;

  @media (max-width: 900px) {
    max-width: 37.5rem;
    flex-direction: column-reverse;
    padding: 0 2rem;
    gap: 6rem;
  }
`;

export const Title = styled.h1`
  margin-top: 16rem;
  margin-bottom: 5rem;

  span {
    font: 700 7rem "Epilogue", sans-serif;
    display: block;

    @media (max-width: 1380px) {
      font-size: 6rem;
    }
  }

  @media (max-width: 900px) {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;

    span {
      display: inline;
      font-size: 3.5rem;

      :first-child::after {
        content: " ";
      }
    }
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

  @media (max-width: 900px) {
    width: 100%;

    #description {
      text-align: center;
      font-size: 1.6rem;
      margin-bottom: 3rem;
    }
  }
`;

export const LearnMoreButton = styled.button`
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 1.7rem;
  padding: 1.8rem 0;
  max-width: 17rem;
  width: 100%;
  font-size: 1.9rem;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 10rem;
  border: 1px solid #000;

  :hover {
    color: #000;
    background-color: #fff;
  }

  @media (max-width: 900px) {
    margin: 0 auto;
    margin-bottom: 3rem;
    font-size: 1.6rem;
    max-width: 15rem;
  }
`;

export const DivClients = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  place-items: center;

  @media (max-width: 1170px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Picture = styled.picture`
  width: 44.1rem;
  height: 58.8rem;
  position: relative;

  img {
    height: 58.8rem;
  }

  @media (max-width: 1170px) {
    top: -15rem;
  }

  @media (max-width: 1000px) {
    top: -25rem;
    width: 34.1rem;
    height: 48.8rem;

    img {
      width: 34.1rem;
      height: 48.8rem;
    }
  }

  @media (max-width: 900px) {
    position: relative;
    top: 2rem;
    left: 2rem;
    width: 37.5rem;
    height: 31.8rem;

    img {
      width: 37.5rem;
      height: 31.8rem;
    }
  }
`;
