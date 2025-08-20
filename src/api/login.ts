import jsonApi from '../util/utilAxions';

export const getUser = async () => {
  const response = await jsonApi.get('/api');
  console.log('📋 請求前的 cookies:', document.cookie);
  return response.data;
};

export const createUser = async (email: string, password: string) => {
  const response = await jsonApi.post('/api', {
    email,
    password,
  });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await jsonApi.post('/api/login', {
    email,
    password,
  });

  return response;
};

export const logout = async () => {
  const response = await jsonApi.post('/api/logout');
  return response.data;
};

export const getDashboard = async () => {
  const response = await jsonApi.get('/api/total_number_of_products');
  return response.data;
};
