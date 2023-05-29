import React from 'react';
import { TableBox, TableRowHover, TableCellHover } from './HistoryTable.styled';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import UpdateIcon from '@mui/icons-material/Update';
import LinkIcon from '@mui/icons-material/Link';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

const HistoryTable = ({ data }) => {
  return (
    <TableBox>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#9999A1' }}>Application</TableCell>
            <TableCell sx={{ color: '#9999A1' }} align="right">
              Status
            </TableCell>
            <TableCell sx={{ color: '#9999A1' }} align="right">
              Link
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRowHover key={item.id}>
              <TableCellHover sx={{ fontWeight: '500', color: '#080A43' }}>
                {item.name}
              </TableCellHover>
              <TableCellHover align="right">
                {item.status === 'done' ? (
                  <Tooltip title="Application processed" arrow>
                    <CheckIcon color="success" />
                  </Tooltip>
                ) : item.status === 'updating' ? (
                  <Tooltip title="Application update in progress" arrow>
                    <UpdateIcon color="warning" />
                  </Tooltip>
                ) : null}
              </TableCellHover>
              <TableCellHover align="right">
                <Tooltip title="Go to detailed page" arrow>
                  <Link
                    to={`/history/detailed?id=${item.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon sx={{ color: '#0009D6' }} />
                  </Link>
                </Tooltip>
              </TableCellHover>
            </TableRowHover>
          ))}
        </TableBody>
      </Table>
    </TableBox>
  );
};

export default HistoryTable;
