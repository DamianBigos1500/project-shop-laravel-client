import { useEffect, useState } from 'react';
import csrf from '@/lib/csrf';
import { loginDataType, registerDataType } from '../types';
import { AuthService } from '../service/auth.service';
import { CartService } from '@/features/cart/services/cart.service';
import { useRouter } from 'next/router';
import { imageType } from '@/types/imageType';

export default function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [profileImage, setProfileImage] = useState<null | imageType>(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<any>([]);

  const router = useRouter();
  const { query }: any = router;

  const register = async ({ ...data }: registerDataType) => {
    await csrf();
    setErrors([]);
    try {
      await AuthService.register(data);
      await getUser();

      router.replace(query.returnUrl || '/');
    } catch (e: any) {
      if (e.response.status === 422) {
        errors.value = e.response.data.errors;
      }
    }
  };

  const login = async ({ ...data }: loginDataType) => {
    await csrf();
    setErrors([]);
    try {
      await AuthService.login(data);
      await getUser();

      router.replace(query.returnUrl || '/');
    } catch (e: any) {
      if (e?.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }

    try {
      await CartService.moveCartToDb();
    } catch (error) {}
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      setUser(null);
    } catch (error) {}
  };

  const getUser = async () => {
    try {
      const { data }: any = await AuthService.getUser();
      setUser(data.user);
      setProfileImage(data.user);
      console.log(data);
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  const isUserAdmin = () => {
    return user?.role === 'ADMIN';
  };

  return {
    user: user,
    loading: loading,
    errors: errors,
    register,
    login,
    logout,
    getUser,
    isUserAdmin,
  };
}
