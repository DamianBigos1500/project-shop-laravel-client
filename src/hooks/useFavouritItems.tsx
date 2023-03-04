import React, { useState } from 'react';
import { getFavourit } from 'src/services/FavouritItemService';

export default function useFavouritItems() {
  const [loading, setLoading] = useState(false);
  const [favourit, setFavourit] = useState<any>([]);
  const [error, setError] = useState([]);

  const getFavouritItems = async () => {
    setLoading(true);
    const res = await getFavourit();
    setLoading(false);
    setFavourit(res.data.favourit);
  };

  return { getFavouritItems, loading, error, favourit };
}
