import styled from 'styled-components';
import logoHeader from 'images/Search/logoHeader.svg';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  /* padding: 10px 20px; */
  background: #ffffff;
  border-bottom: 1px solid #d9d9d9;
  box-shadow: 0px 2px 8px rgba(4, 17, 43, 0.1);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  & li {
    padding: 20px 0;
    position: relative;
    z-index: 2;
  }
`;
export const ListItem = styled(NavLink)`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: rgba(32, 14, 50, 0.6);
  &.active {
    font-weight: 500;
    color: #080a43;
  }
  &.active::before {
    content: ' ';
    position: absolute;
    z-index: 1000;
    bottom: 0;
    width: 100%;
    height: 4px;
    background-color: #0009d6;
    border-radius: 5px;
  }
  &:hover {
    color: #080a43;
  }
  &:hover::before {
    content: ' ';
    position: absolute;
    z-index: 1000;
    bottom: 0;
    width: 100%;
    height: 4px;
    background-color: #9595ff;
    border-radius: 5px;
  }
`;

export const Logo = styled.div`
  width: 66px;
  height: 18px;
  background-image: url(${logoHeader});
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (min-width: 744px) {
    width: 92px;
    height: 22px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;
