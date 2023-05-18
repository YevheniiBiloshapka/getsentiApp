import styled from 'styled-components';
import logo from 'images/logo.svg';
import authImage from 'images/Auth/authImage.png';
import bgAuth from 'images/Auth/bgauth.png';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-image: url(${bgAuth});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px;
  width: 100%;
  height: 300px;

  background-image: url(${authImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 744px) {
    height: 340px;
  }
  @media screen and (min-width: 1280px) {
    padding: 36px 57px 100px 57px;
    width: 635px;
    height: 100vh;
    align-items: flex-start;
    text-align: start;
  }
`;

export const Logo = styled.div`
  width: 95px;
  height: 25px;
  background-image: url(${logo});
`;

export const Description = styled.div`
  max-width: 502px;
  & h1 {
    font-weight: 500;
    font-size: 34px;
    line-height: 140%;
    color: #ffffff;
  }

  & p {
    font-weight: 300;
    font-size: 12px;
    line-height: 140%;

    color: rgba(255, 255, 255, 0.6);
  }

  @media screen and (min-width: 744px) {
    & h1 {
      font-size: 48px;
      margin-bottom: 30px;
    }
    & p {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1280px) {
  }
`;
