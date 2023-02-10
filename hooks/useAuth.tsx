import { useEffect, useState } from 'react';
import Router from 'next/router';

import csrf from '../lib/csrf';
import axios from '../lib/axios';
import navigateBack from '../lib/helper';

export default function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<any>([]);

  const register = async ({ ...data }: any) => {
    await csrf();
    setErrors([]);
    try {
      await axios.post('/register', data);
      await getUser();
      Router.push('/');
    } catch (e: any) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const login = async ({ ...data }) => {
    await csrf();
    setErrors([]);
    try {
      await axios.post('/login', data);
      await getUser();
      navigateBack();
    } catch (e: any) {
      if (e?.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const logout = async () => {
    try {
      await axios.post('/logout');
      setUser(null);
    } catch (error) {
      console.log('you are logged out');
    }
  };

  const getUser = async () => {
    try {
      const { data } = await axios.get('/api/user');
      setUser(data);
    } catch (error: any) {}
    setLoading(false);
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  return { user, register, login, logout, getUser, loading, errors };
}
