import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} showZero color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </div>
  );
};

