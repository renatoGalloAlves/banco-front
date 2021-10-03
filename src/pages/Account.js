import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import AccountProfile from '../components/account/AccountProfile';
import TotalProfit from '../components/dashboard/TotalProfit';
import AccountProfileDetails from '../components/account/AccountProfileDetails';
import { ContasContext } from '../contexts/contas';

const Account = () => {
  const { pegaConta, contaDetalhe } = useContext(ContasContext);
  const [hasAccount, setHasAccount] = useState(false);
  const navigate = useNavigate();
  const numConta = window.location.pathname.split('/')[3];

  useEffect(() => {
    if (!hasAccount) pegaConta(numConta);
    console.log(contaDetalhe);
    if (!contaDetalhe.numero) navigate('/app/customers');
    setHasAccount(!hasAccount);
  }, [contaDetalhe]);

  return !contaDetalhe.numero
    ? <>Carregando...</>
    : (
      <>
        <Helmet>
          <title>Account | Banco Front</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
              >
                <AccountProfile
                  nome={contaDetalhe.titular.nome}
                  email={contaDetalhe.titular.email}
                  cpf={contaDetalhe.titular.cpf}
                />
                <TotalProfit saldo={contaDetalhe.saldo || 0} />
              </Grid>
              <Grid
                item
                lg={8}
                md={6}
                xs={12}
              >
                <AccountProfileDetails
                  nome={contaDetalhe.titular.nome}
                  numero={contaDetalhe.numero}
                  agencia={contaDetalhe.agencia}
                  dv={contaDetalhe.digito}
                  abertura={contaDetalhe.abertura}
                  tipo={contaDetalhe.tipo}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
};

export default Account;
