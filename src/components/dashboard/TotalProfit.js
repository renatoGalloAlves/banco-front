import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const TotalProfit = ({ saldo }) => (
  <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Saldo
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
            aria-label={`${saldo} reais`}
          >
            {`R$ ${saldo.toFixed(2).replace('.', ',')}`}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: indigo[600],
              height: 56,
              width: 56
            }}
            aria-label="Ícone com símbolo de dinheiro do lado direito"
          >
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

TotalProfit.propTypes = {
  saldo: PropTypes.number,
};

export default TotalProfit;
