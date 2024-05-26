import React from 'react';
import './App.css';
import Header from "./components/header.js";
import Balance from "./components/balance.js";
import IncomeExpenses from "./components/IncomeExpenses.js"
import TransactionList from './components/TransactionList.js';
import AddTransaction from './components/AddTransaction.js';
import GlobalProvider from './context/GlobalState.js';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
