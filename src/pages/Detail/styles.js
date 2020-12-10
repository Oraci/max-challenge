import styled, { css } from 'styled-components';

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

export const BackToButton = styled.div`
  padding: 20px 20px 0 0;
  display: flex;
  color: ${({ theme }) => theme.text.lightGrey};
  align-items: center;

  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 18px;
    letter-spacing: 0.01em;
  }
`;

export const BackTo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
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
