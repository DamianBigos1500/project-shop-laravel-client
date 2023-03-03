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
import { useSignal } from '@preact/signals-react';

export default function useAuth() {
  const user = useSignal<any>(null);
  const loading = useSignal(true);
  const errors = useSignal<any>([]);

  const register = async ({ ...data }: registerDataType) => {
    await csrf();
    errors.value = [];
    try {
      await postRegister(data);
      await getUser();
      Router.push('/');
    } catch (e: any) {
      if (e.response.status === 422) {
        errors.value = e.response.data.errors;
      }
    }
  };

  const login = async ({ ...data }: loginDataType) => {
    await csrf();
    errors.value = [];
    try {
      await postLogin(data);
      await getUser();
      navigateBack();
    } catch (e: any) {
      if (e?.response.status === 422) {
        errors.value = e.response.data.errors;
      }
    }

    try {
      await moveCartToDb();
    } catch (error) {}
  };

  const logout = async () => {
    try {
      await postLogout();
      user.value = null;
    } catch (error) {
      console.log('you are logged out');
    }
  };

  const getUser = async () => {
    try {
      const { data }: any = await getUserData();
      user.value = data;
      console.log(data);
    } catch (error) {}
    loading.value = false;
  };

  useEffect(() => {
    if (!user.value) {
      getUser();
    }
  }, [user.value]);

  return {
    user: user.value,
    loading: loading.value,
    errors: errors.value,
    register,
    login,
    logout,
    getUser,
  };
}
