import styled from 'styled-components';

export const BackToButton = styled.div`
  padding: 20px 20px 0 0;
  display: flex;
  color: ${({ theme }) => theme.text.lightGrey};
  align-items: center;
  justify-content: space-between;
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
