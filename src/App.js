import React from 'react';
import './App.css';
import Header from "./components/header.js";
import Balance from "./components/balance.js";
import IncomeExpenses from "./components/IncomeExpenses.js"
import TransactionList from './components/TransactionList.js';
import AddTransaction from './components/AddTransaction.js';



function App() {
  return (
    <div>
      <Header />
      <div className='container'>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
      </div>
    </div>
  );
}

export default App;
