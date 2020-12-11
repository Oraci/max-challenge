import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerArtists = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  justify-content: center;
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: column;

  margin: 16px 0;

  & > p {
    margin-bottom: 10px;
  }
`;

export const CustomStyles = {
  container: (base) => ({
    ...base,
    width: '400px',
  }),
};
