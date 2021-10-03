import { createContext, useState, useEffect } from 'react';
import { useAsync } from 'react-async';
import PropTypes from 'prop-types';
import { listarContas, detalharConta } from '../services/contas';

export const ContasContext = createContext({});

export const ContasContextProvider = ({ children }) => {
  const { data } = useAsync(listarContas);
  const [contas, setContas] = useState([]);
  const [contaDetalhe, setContaDetalhe] = useState({});

  useEffect(() => {
    setContas(data);
  }, [data]);

  const pegaConta = (numeroConta) => {
    const nmConta = parseInt(numeroConta, 10);
    console.log(contas);
    detalharConta(nmConta).then((res) => setContaDetalhe(res.data));
  };

  const contasProviderValue = {
    contas,
    pegaConta,
    contaDetalhe,
  };

  return <ContasContext.Provider value={contasProviderValue}>{children}</ContasContext.Provider>;
};

ContasContextProvider.propTypes = {
  children: PropTypes.any,
};
