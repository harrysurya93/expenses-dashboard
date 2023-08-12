import React from 'react';

const ExpenseDate = (props) =>{

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return(
        <div className='border border-white rounded bg-dark px-3 my-0 py-2'>
            <p className='mb-0 fs-6 fw-bold text-white text-center'>{month}</p>
            <p className='mb-0 fs-8 text-white text-center'>{year}</p>
            <p className='mb-0 fs-3 fw-bold text-white text-center'>{day}</p>
        </div>
    )

}


export default ExpenseDate;