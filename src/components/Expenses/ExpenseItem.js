import React , {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';

function ExpenseItem({date,title,amt}) {
    // const [Title,setTitle]=useState(title);
    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
                <div  className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'> ₹ {amt}</div>
                </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;