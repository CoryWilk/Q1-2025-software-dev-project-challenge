import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='badge badge-primary badge-pill mr-3'
                style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '0.5em',
                    borderRadius:  '0.5em'
                }}>
                    ${props.cost}
                </span>
                <TiDelete size='1.5em' onClick={'handleDeleteExpense'}></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;