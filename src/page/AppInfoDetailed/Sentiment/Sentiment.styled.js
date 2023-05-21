import styled from 'styled-components';
export const Container = styled.div`
  padding-bottom: 40px;
  pointer-events: none;
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
  background: #edf5ff;
  filter: drop-shadow(0px 0px 5px rgba(0, 9, 40, 0.2));
  border-radius: 10px;
`;
