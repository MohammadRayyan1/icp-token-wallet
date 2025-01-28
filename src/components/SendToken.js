import React, { useState } from "react";
import "../styles/SendTokens.css";

const SendTokens = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const sendTokens = () => {
    if (!recipient || amount <= 0) {
      setStatus("⚠️ Invalid input!");
      return;
    }

    setStatus(`✅ Sent ${amount} IRCRC2 to ${recipient}`);
  };

  return (
    <div className="send-container">
      <h3>Send Tokens</h3>
      <input
        type="text"
        placeholder="Enter Wallet Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={sendTokens}>Send</button>

      {status && <p className="status">{status}</p>}
    </div>
  );
};

export default SendTokens;
