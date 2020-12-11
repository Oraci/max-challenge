import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const ContainerArtists = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  justify-content: center;

  & > h3 {
    margin-bottom: 16px;
  }
`;
