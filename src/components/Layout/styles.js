import styled from 'styled-components';

export const WrapperPage = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
