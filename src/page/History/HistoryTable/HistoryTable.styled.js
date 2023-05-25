import styled from 'styled-components';
import { TableCell, TableRow } from '@mui/material';

export const TableBox = styled.div`
  margin-bottom: 40px;
  border: 1px solid #dedff2;
  background: #edf5ff;
  box-shadow: 0px 0px 5px rgba(0, 9, 40, 0.2);
  border-radius: 10px;
`;
export const TableRowHover = styled(TableRow)`
  &:hover {
    background-color: #c9daea;
  }
`;

export const TableCellHover = styled(TableCell)`
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;

  color: #080a43;
  &:hover {
    background-color: transparent;
  }
`;
