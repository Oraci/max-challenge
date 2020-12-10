import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  margin-bottom: 16px;

  @media (max-width: 576px) {
    width: 420px;
  }
`;

export const Img = styled.img`
  border-radius: 10px;
  height: 150px;
  width: 150px;
  margin
`;

export const ContainerInfo = styled.div`
  display: flex;
`;

export const ContainerAdditionalInfo = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;

export const ContainerGenres = styled.div``;

export const Info = styled.div`
  margin-left: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;

  & > p,
  h1 {
    margin-bottom: 16px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button``;
