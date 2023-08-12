import React, { Fragment } from "react";
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) =>{

    return (
        <Fragment>
            <div className="row m-0 p-3 border border-pill">
                <div className="col-1">
                    <ExpenseDate date={props.expense.date} />
                </div>
                <div className="col-9">
                    <h3 className="pt-5">{props.expense.title}</h3>
                </div>
                <div className="col-2 text-end">
                    <button className="btn btn-primary p-3 mt-3">$ {props.expense.amount}</button>
                </div>
            </div>            
        </Fragment>

    );
}

export default ExpenseItem;