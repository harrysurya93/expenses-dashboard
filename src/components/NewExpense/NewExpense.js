import React, { Fragment, useState } from 'react';
import NewForm from './NewForm'

const NewExpense = (props) =>{
    const [createMode, setCreateMode] = useState(false);
    return(
        <Fragment>
            <div className='border'>
                {createMode ?  <NewForm onSaveExpenseData={props.onSaveExpenseData} setCreateMode={setCreateMode} /> : <div className='text-center'><button className='btn btn-primary my-5' onClick={() => setCreateMode(true)}>Add New Expense</button></div>}
            </div>
        </Fragment>
    )
}

export default NewExpense;