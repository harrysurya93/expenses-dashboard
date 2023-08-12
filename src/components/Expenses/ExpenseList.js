import React, { Fragment } from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) =>{

    
    let expensesUI = 'No expenses selected.';

    if(props.expenses.length > 0 ){
        expensesUI = props.expenses.map(expense =>  <ExpenseItem key={expense.id} expense={expense}/>)
    }

    return(
        <Fragment>
            {expensesUI}
        </Fragment>
    )
}

export default ExpenseList;