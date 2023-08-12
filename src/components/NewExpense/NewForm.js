import React, { Fragment, useState } from 'react';
import moment from 'moment';

moment().format("YYYY/MM/DD");

const NewForm = (props) =>{

    const [Expense, setExpense] = useState({
        id:'',
        title: '',
        date: '',
        amount: ''
    });

    const titleChangeHandler = (event) =>{
        setExpense((prevState) => { return {...prevState, title: event.target.value}});
    }

    const dateChangeHandler = (event) =>{
        setExpense((prevState) => { return {...prevState, date: event.target.value }});
    }

    const amountChangeHandler = (event) =>{
        setExpense((prevState) => { return {...prevState, amount: event.target.value}});
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const newExpense = {...Expense,id: Math.random() , amount: +Expense.amount, date: new Date(Date.parse(Expense.date))};
        props.onSaveExpenseData(newExpense);
        props.setCreateMode(false);
    }

    return(
        <Fragment>
            <form onSubmit={submitHandler} className='border p-3'>
                <label>Title</label>
                <input type='text' value={Expense.title} onChange={titleChangeHandler} className='form-control'/>
                <label>Date</label>
                <input type='date' value={Expense.date.toString("yyyy-MM-dd")} onChange={dateChangeHandler} className='form-control'/>
                <label>Amount</label>
                <input type='number' value={Expense.amount} onChange={amountChangeHandler} className='form-control'/>
                <br/>
                <div className='text-end'>
                    <button type='submit' onClick={() => props.setCreateMode(false)} className='btn btn-secondary me-1'>Cancel</button>
                    <button type='submit' className='btn btn-success ms-1'>Create Expense</button>
                </div>
            </form>
        </Fragment>
    )
}

export default NewForm;