import React, { useState } from "react";
import "../styles/Wallet.css";

const Wallet = () => {
  const [balance, setBalance] = useState(10); // Default balance

  return (
    <div className="wallet-container">
      <h2>Your Wallet Balance</h2>
      <p className="balance">{balance} IRCRC2</p>
    </div>
  );
};

export default Wallet;
