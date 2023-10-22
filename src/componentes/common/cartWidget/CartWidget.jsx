import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"

export const CartWidget = () => {
  return (
    <Link to = "/cart">
      <Badge badgeContent={4} showZero color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </Link>
  );
};

