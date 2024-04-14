import {combineReducers, createStore} from "redux";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};

const initialStateCustomer = {
    fullName: "",
    nationalId: "",
    createdAt: "",
}

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});

function accountReducer(state = initialState, action) {
    switch (action.type) {
        case "features/deposit":
            return {...state, balance: state.balance + action.payload};
        case "features/withdraw":
            return {...state, balance: state.balance - action.payload};
        case "features/requestLoan":
            if (state.loan > 0) return state;
            //LATER
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            };
        case "features/repayLoan":
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan,
            };
        default:
            return state;
    }
}

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case "customers/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalId: action.payload.nationalId,
                createdAt: action.payload.createdAt,
            };
        case "customers/updateName":
            return {
                ...state,
                fullName: action.payload,
            };
        default:
            return state;
    }
}

const store = createStore(rootReducer);

function deposit(amount) {
    return {type: "features/deposit", payload: amount};
}

function withdraw(amount) {
    return {type: "features/withdraw", payload: amount};
}

function requestLoan(amount, purpose) {
    return {type: "features/requestLoan", payload: {amount, purpose}};
}

function payLoan() {
    return {type: "features/repayLoan"};
}

console.log(store.getState());
store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(1000, "Car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalId) {
    return {type: "customers/createCustomer", payload: {fullName, nationalId, createdAt: new Date().toISOString()}};
}

function updateName(fullName) {
    return {type: "customers/updateName", payload: fullName};
}

store.dispatch(createCustomer("Roi Susi", "123456789"));
console.log("Customer");
console.log(store.getState());
store.dispatch(updateName("Susi"));
store.dispatch(withdraw((50)))
console.log(store.getState());
