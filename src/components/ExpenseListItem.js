import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import deleteBtn from '../../public/images/delete-2.png';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div className="list-item-container">
        <button className="delete-button">
            <img src={deleteBtn} width="20" height="20"/>
        </button>
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__sub-title">{moment(createdAt).format('YYYY-MM-DD')}</span>
            </div>
            <h3 className="list-item__data">{numeral(amount).format('$0,0.00')}</h3>
        </Link>

    </div>
);

export default ExpenseListItem;
