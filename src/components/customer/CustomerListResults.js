import PropTypes from 'prop-types';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';

import getInitials from '../../utils/getInitials';

const CustomerListResults = ({ customers, ...rest }) => {
  const navigate = useNavigate();

  const handleSelectAccount = (numeroConta) => {
    navigate(`/app/account/${numeroConta}`);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table aria-label="Tabela de contas">
            <TableHead aria-label="Cabeçalho">
              <TableRow>
                <TableCell>
                  Titular
                </TableCell>
                <TableCell>
                  Agência
                </TableCell>
                <TableCell aria-label="Número da conta">
                  Nº da conta
                </TableCell>
                <TableCell>
                  Dígito
                </TableCell>
                <TableCell>
                  Data da abertura
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer) => (
                <TableRow
                  hover
                  aria-label="Cliente"
                  key={customer.numero}
                  onClick={() => {
                    handleSelectAccount(customer.numero);
                  }}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={customer.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(customer.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.titular.nome}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.agencia}
                  </TableCell>
                  <TableCell>
                    {customer.numero}
                  </TableCell>
                  <TableCell>
                    {customer.dv}
                  </TableCell>
                  <TableCell>
                    {moment(customer.abertura).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerListResults;
