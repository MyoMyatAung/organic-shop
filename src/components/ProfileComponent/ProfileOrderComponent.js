import React from 'react';
import { ORDER_COLUMNS } from '../../constants/columns/OrderColumns';
import TableComponent from '../common/TableComponent/TableComponent';

const ProfileOrderComponent = ({ orders }) => {
     return (
          <>
               <TableComponent
                    columns={ORDER_COLUMNS}
                    rows={orders}
               />
          </>
     );
}

export default ProfileOrderComponent;