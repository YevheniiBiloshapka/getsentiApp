import styled from 'styled-components';
export const Container = styled.div`
  padding-bottom: 40px;

  & h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    text-transform: capitalize;
    margin-bottom: 20px;
    color: #080a43;
  }
`;

export const ChartBox = styled.div`
  background: #edf5ff;
  filter: drop-shadow(0px 0px 5px rgba(0, 9, 40, 0.2));
  border-radius: 10px;
  border: 1px solid #dedff2;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;
  border: 1px solid #dedff2;
`;
