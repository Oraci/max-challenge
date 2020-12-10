import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.png';

export const Container = styled.div`
  height: 100px;
  background: #000000;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  color: #f07580;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  margin-right: 10px;
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const Img = styled.img`
  width: 120px;
  height: 90px;
`;

export const MyList = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
