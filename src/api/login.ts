import jsonApi from '../util/utilAxions';

export const getUser = async () => {
  const response = await jsonApi.get('/api/users');
  console.log('📋 請求前的 cookies:', document.cookie);
  return response.data;
};

export const createUser = async (data: any) => {
  const response = await jsonApi.post('/api/users', data);
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await jsonApi.post('/api/users/login', {
    email,
    password,
  });

  return response;
};

export const logout = async () => {
  const response = await jsonApi.post('/api/users/logout');
  return response.data;
};
