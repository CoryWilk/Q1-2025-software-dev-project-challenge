import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
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
                <TiDelete size='1.5em'></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;