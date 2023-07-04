import React,{useState} from "react"; //eta mandate na.. Emni krlam
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
function NewExpence (props){
    const newExpenceHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);

    }
    const [isEditing,setIsEditing]=useState(false);
    const startEditingHandler = ()=>{
        setIsEditing(true);
    }
    const stopEditingHandler = ()=>{
        setIsEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={newExpenceHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
}

export default NewExpence;