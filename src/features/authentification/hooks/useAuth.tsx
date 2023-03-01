import { useEffect, useState } from 'react';
import Router from 'next/router';
import csrf from '@/lib/csrf';
import navigateBack from '@/lib/helper';
import { loginDataType, registerDataType } from '../types';
import {
  getUserData,
  postLogin,
  postLogout,
  postRegister,
} from '../service/authService';
import { moveCartToDb } from '@/features/cart/services/cartService';

export default function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<any>([]);

  const register = async ({ ...data }: registerDataType) => {
    await csrf();
    setErrors([]);
    try {
      await postRegister(data);
      await getUser();
      Router.push('/');
    } catch (e: any) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const login = async ({ ...data }: loginDataType) => {
    await csrf();
    setErrors([]);
    try {
      await postLogin(data);
      await getUser();
      navigateBack();
    } catch (e: any) {
      if (e?.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }

    try {
      await moveCartToDb();
    } catch (error) {}
  };

  const logout = async () => {
    try {
      await postLogout();
      setUser(null);
    } catch (error) {
      console.log('you are logged out');
    }
  };

  const getUser = async () => {
    try {
      const { data }: any = await getUserData();
      setUser(data);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  return { user, register, login, logout, getUser, loading, errors };
}
