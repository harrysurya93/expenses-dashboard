import React, {Fragment} from 'react';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const dataPoints =([
        { value: 0, label: "Jan"},
        { value: 0, label: "Feb"},
        { value: 0, label: "Mar"},
        { value: 0, label: "Apr"},
        { value: 0, label: "May"},
        { value: 0, label: "June"},
        { value: 0, label: "July"},
        { value: 0, label: "Aug"},
        { value: 0, label: "Sep"},
        { value: 0, label: "Oct"},
        { value: 0, label: "Nov"},
        { value: 0, label: "Dec"},
        ]);
    
    for(let i =0; i<props.expenses.length; i++){
        dataPoints[props.expenses[i].date.getMonth()].value += props.expenses[i].amount;
    }

    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const maxValue = dataPointValues.reduce((partialSum, a) => partialSum + a, 0);
    

    return (
        <Fragment>
            {dataPoints.map(dataPoint => 
                <ChartBar 
                    key={dataPoint.label}
                    maxValue={maxValue} 
                    value={dataPoint.value} 
                    label={dataPoint.label} />
            )}
        </Fragment>
    )
}


export default Chart;