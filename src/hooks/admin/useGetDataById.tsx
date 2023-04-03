import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';

export default function useGetDataById(
  name: string,
  getDataByIdService: (dataId: any) => Promise<AxiosResponse>,
  dataId: number | null | string
) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getDataByIdService(dataId);
      setData(res.data[name]);
    } catch (error) {}
    setLoading(false);
  }, []);

  useEffect(() => {
    if (data.length == 0) {
      getData();
    }
  }, []);

  return {
    data,
    setData,
    loading,
  };
}
