import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('xyz', { description: 'Coffee', amount: 750, note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'xyz',
        updates: {
            description: 'Coffee',
            amount: 750,
            note: 'New note value'
        }
    });
});

test('should setup add expense action object with provided value', () => {
    const expenseData = {
        description: 'Rent',
        amount: 1095,
        createdAt: 1000,
        note: 'This was last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});

test('should setup add expense action object with default value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});
