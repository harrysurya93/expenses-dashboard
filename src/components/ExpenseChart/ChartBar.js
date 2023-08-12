import React, { Fragment } from 'react';

const ChartBar = (props) => {

    return (
        <Fragment>
            {props.value > 0 ? 
                <div className='row m-0 p-0'>
                <div className='col-1'>
                    <h5>{props.label}</h5>
                </div>
                <div className='col-11'>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={props.value} aria-valuemin="0" aria-valuemax={props.maxValue}>
                        <div className="progress-bar" style={{width:props.value/props.maxValue*100 + '%'}}>{props.value}</div>                   
                    </div>
                </div>
                </div>
            : 
                <div className='row m-0 p-0'>
                <div className='col-1'>
                    <h5>{props.label}</h5>
                </div>
                <div className='col-11'>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={props.value} aria-valuemin="0" aria-valuemax={props.maxValue}>
                        <div className="progress-bar" style={{width:0}}>{props.value}</div>                   
                    </div>
                </div>
                </div>
            }
            
        </Fragment>
    )
}

export default ChartBar;