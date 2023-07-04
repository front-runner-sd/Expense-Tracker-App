import React, {useState} from "react";
import ExpensesFilter from "./ExpesesFilter";
import ExpenseList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';
function Expenses(props){
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler = (seletedYear)=>{
      setFilteredYear(seletedYear);
    }
    const filteredExpenses = props.exp.filter(ele=>{return ele.date.getFullYear().toString()===filteredYear});

    return (
      <div>
        <Card className="expenses">
        <ExpensesFilter setDefaultValue={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
        </Card>
        </div>
    );
}
export default Expenses;