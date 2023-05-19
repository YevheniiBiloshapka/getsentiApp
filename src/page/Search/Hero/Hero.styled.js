import styled from 'styled-components';
import searchBg from 'images/Search/searchBg.png';

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-image: url(${searchBg});
  @media screen and (min-width: 744px) {
    text-align: start;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (min-width: 744px) {
    width: 350px;
    height: 350px;
  }
  @media screen and (min-width: 1280px) {
    width: 600px;
    height: 600px;
  }
`;

export const FormBox = styled.div`
  background-color: white;
  max-width: 320px;
  & h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 140%;

    color: #080a43;
  }
  & p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;

    color: rgba(8, 10, 67, 0.6);
  }

  @media screen and (min-width: 1280px) {
    max-width: 512px;
    & h1 {
      font-size: 48px;
    }
    & p {
      font-size: 24px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  & button {
    max-height: 56px;
  }
  @media screen and (min-width: 744px) {
    gap: 10px;
    flex-direction: row;
  }
`;
