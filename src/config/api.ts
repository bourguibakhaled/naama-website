const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://naama-market.onrender.com';

export const API_ENDPOINTS = {
  contact: `${API_URL}/api/contact`,
  contacts: `${API_URL}/api/contacts`,
  signup: `${API_URL}/api/signup`
};
