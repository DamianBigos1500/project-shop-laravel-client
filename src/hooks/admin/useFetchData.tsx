import Router from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export default function useFetchData(
  name: string,
  getDataService: any,
  deleteDataService: any
) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const showData = useCallback(async (dataId: number) => {
    Router.push(Router.pathname + '/' + dataId);
  }, []);

  const destroyData = useCallback(async (dataId: number) => {
    setLoading(true);
    try {
      await deleteDataService(dataId);
      getData();
    } catch (error) {}
    setLoading(false);
  }, []);

  const getData = useCallback(async () => {
    try {
      const res = await getDataService();
      setData(res.data[name]);
    } catch (error) {}
  }, []);

  useEffect(() => {
    if (data.length == 0) {
      setLoading(true);
      getData();
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    showData,
    destroyData,
  };
}
