import React from "react";

import {
     Paper,
     Table,
     TableBody,
     TableContainer,
     TableHead
} from '@mui/material';
import TableColumnComponent from "./TableColumn";
import TableRowComponent from "./TableRowComponent";

const TableComponent = (
     {
          rows = [],
          columns,
          isDense = false
     }
) => {
     return (
          <>
               <TableContainer component={Paper} elevation={0}>
                    <Table sx={{ minWidth: 650 }} size={isDense ? 'small' : ''}>
                         <TableHead>
                              <TableColumnComponent columns={columns} />
                         </TableHead>
                         <TableBody>
                              <TableRowComponent
                                   columns={columns}
                                   rows={rows}
                              />
                         </TableBody>
                    </Table>
               </TableContainer>
          </>
     );
}

export default TableComponent;