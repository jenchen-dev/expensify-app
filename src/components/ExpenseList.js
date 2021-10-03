import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list">
            <div className="icon">
                <img src="/images/money.png" width="30" height="30"/>
            </div>
            <h3 className="list-title">My Expense List</h3>
        </div>
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-wider-screen">Expense</div>
            <div className="show-for-wider-screen">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0? (
                    <div className="list-item list-item--message">
                        <span>No expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense}/>
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
