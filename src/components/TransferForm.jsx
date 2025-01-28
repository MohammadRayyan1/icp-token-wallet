import React, { useState } from 'react';
import { sendTokens } from '../utils/blockchain';

const TransferForm = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendTokens(recipient, amount);
    setMessage(result ? 'Transaction Successful!' : 'Transaction Failed');
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Send Tokens</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="block p-2 border mb-2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="block p-2 border mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Send
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
};

export default TransferForm;
