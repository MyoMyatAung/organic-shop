import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ORDER_COLUMNS = [
     {
          field: 'order_number',
          header: 'Order #',
          check: true,
     },
     {
          field: 'date',
          header: 'Placed On',
          check: true,
     },
     {
          field: '-',
          header: 'Items',
          check: true,
          content: (data) => <>{
               data.products.map(
                    (product) => <img
                         src={product.image_url}
                         width={50}
                         style={{ margin: '0px 4px' }}
                         alt={product.name}
                    />
               )
          }</>
     },
     {
          field: 'cost',
          header: 'Total',
          check: true
     },
     {
          field: '-',
          header: '',
          check: true,
          content: (data) => <Link
               to={`/order-detail/${data.id}`}
          >
               <Button
                    variant="contained"
                    color="info"
               >
                    Manage
               </Button>
          </Link>
     }
];

export const CART_COLUMNS = [
     {
          field: 'image_url',
          header: '',
          check: true,
          content: (data) => <img src={data.image_url} width={100} alt={data.name} />
     },
     {
          field: '-',
          header: 'Item',
          check: true,
          content: (data) => <div>
               <Typography variant="body2">{data.name}</Typography>
               <Typography variant="caption">{data.category} | {data.type}</Typography>
          </div>
     },
     {
          field: 'quantity',
          header: 'Quantity',
          check: true,
     },
     {
          field: 'price',
          header: 'Price',
          check: true
     }
];