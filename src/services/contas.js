import api from './api';

const listarContas = async () => {
  const response = await api.get('/contas');
  const { data } = await response;
  return data;
};

const detalharConta = async (numeroConta) => {
  try {
    const resp = await api.get(`/contas/${numeroConta}`);
    return resp;
  } catch (err) {
    return err;
  }
};

export { listarContas, detalharConta };
