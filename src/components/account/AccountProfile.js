import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';

const user = {
  avatar: '/static/images/avatars/avatar_4.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

const AccountProfile = ({ nome, email, cpf }) => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 100,
            width: 100
          }}
          aria-label={`Foto de ${nome}`}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h3"
          aria-label={`Nome do cliente: ${nome}`}
        >
          {nome}
        </Typography>
        <Typography
          color="textPrimary"
          variant="subtitle2"
        >
          {`CPF: ${cpf}`}
        </Typography>
        <Typography
          color="textPrimary"
          variant="subtitle2"
        >
          {`E-mail: ${email}`}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
  </Card>
);

AccountProfile.propTypes = {
  nome: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
};

export default AccountProfile;
