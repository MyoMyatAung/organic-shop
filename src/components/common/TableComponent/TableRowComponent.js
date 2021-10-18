import React from 'react';

import {
     TableCell,
     TableRow,
} from '@mui/material';

const TableRowComponent = ({ rows, columns }) => {

     const renderTableCell = (item, col, index) => {
          if (col.content) return col.content(item, index);
          return item[col.field];
     }

     return (
          <>
               {
                    rows.map((row, index) => {
                         return (
                              <TableRow>
                                   {
                                        columns.map(col => {
                                             return (
                                                  <TableCell
                                                       align="left"
                                                       key={col.field}
                                                  >
                                                       {renderTableCell(row, col, index)}
                                                  </TableCell>
                                             );
                                        })
                                   }
                              </TableRow>
                         );
                    })
               }
          </>
     );
}

export default TableRowComponent;