import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    ethereum: any;
  }
}

const MetaMaskConnect: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState<boolean>(false);

  // Проверка на наличие MetaMask
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      setIsMetaMaskInstalled(true);

      // Восстановление аккаунта, если он сохранен в localStorage
      const savedAccount = localStorage.getItem('metamaskAccount');
      if (savedAccount) {
        setAccount(savedAccount);
      }
    }
  }, []);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Запрашиваем аккаунты у MetaMask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const newAccount = accounts[0];
        setAccount(newAccount);

        // Сохраняем аккаунт в localStorage
        localStorage.setItem('metamaskAccount', newAccount);
      } catch (error) {
        console.error('User denied account access', error);
      }
    } else {
      console.log('MetaMask not installed');
    }
  };

  const disconnectMetaMask = () => {
    setAccount(null);
    localStorage.removeItem('metamaskAccount');
  };

  return (
    <div>
      {isMetaMaskInstalled ? (
        <>
          {account ? (
            <div className='flex flex-row gap-4'>
              <p className=''>✅ Connected: {account}</p>
              <button className=' underline' onClick={disconnectMetaMask}>Disconnect</button>
            </div>
          ) : (
            <button className='underline' onClick={connectMetaMask}>Connect MetaMask</button>
          )}
        </>
      ) : (
        <p>Please install MetaMask</p>
      )}
    </div>
  );
};

export default MetaMaskConnect;
