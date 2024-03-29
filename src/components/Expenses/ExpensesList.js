import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpenseList = props => {
    
    if(props.items.length ===0){
      return <h2 className="expenses-list__fallback">No Expense Found</h2>
    }

    return <ul className="expenses-list"> { props.items.map( ele => <ExpenseItem title={ele.title} amt={ele.amount} date={ele.date} key={ele.id}/>)}</ul>
}

export default ExpenseList;