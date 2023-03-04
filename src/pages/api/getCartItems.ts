import { getCartItems } from '@/features/cart/services/cartService';
import axios from '@/lib/axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'GET') {
    
    const data = getCartItems();

    res.status(200).json({ req: data });
  }
}
