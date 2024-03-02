import React, { useContext, useCallback } from "react";
import { TiDelete } from 'react-icons/ti'
import { AppContext } from "../context/AppContext";

const ExpenseItem = ({ id, name, cost }) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = useCallback(() => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  }, [dispatch, id]);

  return (
    <li className="list-group-item d-flex justify-content-between align-item-center">
      {name}
      <div>
      <span className="badge badge-primary badge-pill mr-3"style={{ color: 'black' }}>
    ₹{cost}
  </span>

        <TiDelete size='1.5em' onClick={handleDeleteExpense} />
      </div>
    </li>
  );
}

export default ExpenseItem;
