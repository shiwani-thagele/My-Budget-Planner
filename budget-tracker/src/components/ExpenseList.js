import React, {useContext,useState,useEffect} from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () =>{
  const {expenses} = useContext(AppContext);
  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};
  
// const expenses = [
//     {id: 123455 , name: "Shopping",cost:500 },
//     {id: 235467 , name: "Holiday",cost:300 },
//     {id: 397545 , name: "Transportation",cost:80 },
//     {id: 975263 , name: "Fuel",cost:500 },
//     {id: 961706 , name: "Child care",cost:20 },
//     {id: 989390 , name: "Food",cost:150 },
// ];
return (
  <>
    <input
      type='text'
      className='form-control mb-2 mr-sm-2'
      placeholder='Type to search...'
      onChange={handleChange}
    />
    <ul className='list-group mt-3 mb-3'>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ul>
  </>
);
};

export default ExpenseList;