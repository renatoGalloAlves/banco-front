import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';

const AccountProfileDetails = ({
  nome, numero, agencia, dv, abertura, tipo
}) => (
  <Card>
    <CardHeader
      title={`Conta de ${nome}`}
    />
    <Divider />
    <CardContent>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Conta
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
            aria-label={`Conta número ${numero} dígito ${dv}`}
          >
            {`${numero}-${dv}`}
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Agência
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
            aria-label={`Agência número ${agencia}`}
          >
            {agencia}
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Data da abertura
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {moment(abertura).format('DD/MM/YYYY')}
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Tipo de Conta
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
            aria-label={`Conta do tipo ${tipo}`}
          >
            {tipo}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

AccountProfileDetails.propTypes = {
  nome: PropTypes.string,
  numero: PropTypes.number,
  agencia: PropTypes.number,
  dv: PropTypes.number,
  abertura: PropTypes.string,
  tipo: PropTypes.number,
};

export default AccountProfileDetails;
