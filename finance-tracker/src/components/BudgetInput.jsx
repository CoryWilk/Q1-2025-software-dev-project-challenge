import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const BudgetInput = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value);
    };

    const updateBudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(newBudget, 10), 
        });
    };

    return (
        <div className="budget-input">
            <label htmlFor="budget">Set Budget:</label>
            <input
                type="number"
                id="budget"
                value={newBudget}
                onChange={handleBudgetChange}
                onBlur={updateBudget} 
            />
        </div>
    );
};

export default BudgetInput;
