import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import MoreMenu from '../../MoreMenu';
// utils
import { fRealBr } from '../../../utils/formatNumber';
//
import Label from '../../Label';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

PizzaCard.propTypes = {
  pizza: PropTypes.object
};

export default function PizzaCard({ pizza }) {
  const { name, cover, price, status, priceSale } = pizza;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'desativado' && 'error') || 'active'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase'
            }}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle alt={name} src={cover} />
      </Box>

      <Stack alignItems="center" sx={{ pb: 2 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          <Box component="div" sx={{ justifyContent: 'center', widht: '100%' }}>
            <Link to="#" color="inherit" underline="hover" component={RouterLink}>
              <Typography variant="subtitle" noWrap sx={{ pl: 2, fontWeight: 700 }}>
                {name}
              </Typography>
            </Link>
          </Box>
          <Box component="div" sx={{ right: 0 }}>
            <MoreMenu />
          </Box>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ margin: 0 }}>
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through'
              }}
            >
              {priceSale && fRealBr(priceSale)}
            </Typography>
            &nbsp;
            {/* {fCurrency(price)} */}
            {fRealBr(price)}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
