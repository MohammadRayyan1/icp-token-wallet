import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

// Fetch wallet balance
export const fetchBalance = async () => {
  try {
    const response = await axios.get(`${API_URL}/balance`);
    return response.data.balance;
  } catch (error) {
    console.error('Error fetching balance:', error);
    return 0;
  }
};

// Send tokens
export const sendTokens = async (recipient, amount) => {
  try {
    const response = await axios.post(`${API_URL}/send`, { recipient, amount });
    return response.data.success;
  } catch (error) {
    console.error('Error sending tokens:', error);
    return false;
  }
};
