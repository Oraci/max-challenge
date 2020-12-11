import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  @media (max-width: 576px) {
    width: 420px;
  }
`;

export const Img = styled.img`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 150px;
  width: 150px;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > h1 {
    text-align: center;
    cursor: pointer;
  }
`;
