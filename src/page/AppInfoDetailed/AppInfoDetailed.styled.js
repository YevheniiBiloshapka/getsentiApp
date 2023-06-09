import styled from 'styled-components';

export const DetailedBox = styled.div`
  display: flex;
  flex-direction: column;

  & .detailed-box__title {
    font-size: 38px;
    color: #0009d6;
    margin-bottom: 30px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
