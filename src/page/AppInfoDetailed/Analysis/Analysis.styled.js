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

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  @media screen and (min-width: 744px) {
    flex-direction: row;
  }
`;

export const ChartBox = styled.div`
  position: relative;
  flex: 1;
  height: 400px;
  background: #edf5ff;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 8px rgba(3, 29, 124, 0.15));

  & h3 {
    position: absolute;
    top: 20px;
    left: 20px;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;

    color: #080a43;
  }
`;
