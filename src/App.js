import React, {Fragment, useEffect, useState} from 'react';
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/ExpenseFilter/ExpenseFilter';
import Chart from './components/ExpenseChart/Chart';

const initialExpenses = [
  {
    id: 1,
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 2, title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 3,
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 4,
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const[expenses, setExpenses] = useState(initialExpenses); 
  const[year, setYear] = useState(2020);
  const[filteredExpenses, setFilteredExpenses] = useState([]);

  const filterChangeHandler = selectedYear => setYear(selectedYear);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    setExpenses((prevState) => {return [enteredExpenseData, ...prevState]});
  }

  useEffect(() => setFilteredExpenses(expenses.filter(expense => expense.date.getFullYear().toString() === year.toString())),[year]);
  useEffect(() => setFilteredExpenses(expenses.filter(expense => expense.date.getFullYear().toString() === year.toString())),[expenses]);

  const [isValid, setValid] = useState(true);

  return (    
    <Fragment>

        <div className='m-5 bg-white'>   
          <button className={`btn btn-primary ${isValid ? 'active' : ''} `}>Test</button>
          <NewExpense onSaveExpenseData={saveExpenseDataHandler} />
          <br/>
          <Chart expenses={filteredExpenses} />
          <ExpenseFilter year={year} onChangeFilter={filterChangeHandler}/>
          <ExpenseList year={year} expenses={filteredExpenses}/>
        </div>

    </Fragment>
  );
}

export default App;
