import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { startRemoveExpense } from '../actions/expenses';

import deleteBtn from '../../public/images/delete-2.png';

export class ExpenseListItem extends React.Component {
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
    };
    render() {
        return (
            <div className="list-item-container">
                <button className="delete-button" onClick={this.onRemove}>
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
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListItem);
