import React, { Fragment } from 'react';

const ExpenseFilter = (props) =>{

    const optionYears = [];
    const filterYears = () => {
        for(let i =2020; i<= new Date().getFullYear(); i++){
            optionYears.push(i);
        }
    }
    
    filterYears();

    const handleYearChange = (event) =>{
        props.onChangeFilter(event.target.value);
    }

    return(
        <Fragment>
            <div className='text-end'>
                <label className='me-3'>Filter by year </label>
                <select onChange={handleYearChange} value={props.year}>
                    {optionYears.map(year => {
                        return <option key={year} value={year}>{year}</option>;
                    })}
                </select>
            </div>
        </Fragment>
    )
}

export default ExpenseFilter;