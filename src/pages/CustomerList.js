import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CustomerListResults from '../components/customer/CustomerListResults';
import { ContasContext } from '../contexts/contas';

const CustomerList = () => {
  const contasContext = useContext(ContasContext);
  return (
    <>
      <Helmet>
        <title>Contas | Banco Front</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ pt: 3 }}>
            {contasContext.contas ? <CustomerListResults customers={contasContext.contas} /> : 'carregando'}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CustomerList;
