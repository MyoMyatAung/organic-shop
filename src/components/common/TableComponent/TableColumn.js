import React from 'react';

import {
     TableCell,
     TableRow,
} from '@mui/material';

const TableColumnComponent = ({ columns }) => {
     return (
          <TableRow>
               {
                    columns.map(col => {
                         return (
                              <TableCell
                                   key={col.field}
                                   align="left"
                              >
                                   {col.header}
                              </TableCell>
                         );
                    })
               }
          </TableRow>
     );
}

export default TableColumnComponent;