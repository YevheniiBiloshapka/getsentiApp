import styled from 'styled-components';
export const Container = styled.div`
  padding-bottom: 40px;
  & h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    text-transform: capitalize;

    color: #080a43;
    margin-bottom: 20px;
  }
`;

export const ChartBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  @media screen and (min-width: 744px) {
    flex-direction: row;
  }
`;
