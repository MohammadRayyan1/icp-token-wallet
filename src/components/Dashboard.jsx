import React, { useEffect, useState } from 'react';
import { fetchBalance } from '../utils/blockchain';

const Dashboard = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const getBalance = async () => {
      const balance = await fetchBalance();
      setBalance(balance);
    };
    getBalance();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Your Wallet Balance</h2>
      <p className="text-2xl">{balance} IRCRC2</p>
    </div>
  );
};

export default Dashboard;
