// MAIN REACT COMPONENT FOR DEFINING STRUCTURE AND USER INTERFACE LOGIC

import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import BudgetInput from './components/BudgetInput';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
        <div className='container'>
            <h1 className='mt-3'>My Budget Planner</h1>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <BudgetInput />
                </div>
                <div className='col-sm'>
                    <Remaining />
                </div>
                <div className='col-sm'>
                    <ExpenseTotal />
                </div>
            </div>
            <h3 className='mt-3'>Expenses</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <ExpenseList />
                </div>
            </div>
            <h3 className='mt-3'>Add Expense</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <AddExpenseForm />
                </div>
            </div>
        </div>
    </AppProvider>
);
};

export default App
