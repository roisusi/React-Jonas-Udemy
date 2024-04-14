import {createSlice} from "@reduxjs/toolkit";

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false,
};

const accountSlice = createSlice({
    name: "account",
    initialState: initialStateAccount,
    reducers: {
        deposit(state, action) {
            state.balance += action.payload;
            state.isLoading = false;
        },
        withdraw(state, action) {
            state.balance -= action.payload;
        },
        requestLoan: {
            prepare: (amount, purpose) => {
                return {
                    payload: {amount, purpose}
                }
            },
            reducer(state, action) {
                if (state.loan > 0) return;
                state.loan = action.payload.amount;
                state.loanPurpose = action.payload.purpose;
                state.balance += action.payload.amount;
            }
        },
        payLoan(state) {
            state.balance -= state.loan;
            state.loan = 0;
            state.loanPurpose = "";
        },
        loading(state) {
            state.isLoading = true;
        }
    }
})
export const {withdraw, requestLoan, payLoan} = accountSlice.actions

export function deposit(amount, currency) {
    if (currency === "USD") {
        return {type: "account/deposit", payload: amount};
    }
    return async function (dispatch, getState) {
        dispatch({type: "account/loading"})
        //API CALL
        const host = 'api.frankfurter.app';
        const response = await fetch(`https://${host}/latest?amount=${amount}&from=${currency}&to=USD`)
        const data = await response.json();
        console.log(data)
        const converted = data.rates.USD;
        dispatch({type: "account/deposit", payload: converted});
        //return Action
    }
}

export default accountSlice.reducer;

// export default function accountReducer(state = initialStateAccount, action) {
//     switch (action.type) {
//         case "account/deposit":
//             return {...state, balance: state.balance + action.payload, isLoading: false};
//         case "account/withdraw":
//             return {...state, balance: state.balance - action.payload};
//         case "account/requestLoan":
//             if (state.loan > 0) return state;
//             //LATER
//             return {
//                 ...state,
//                 loan: action.payload.amount,
//                 loanPurpose: action.payload.purpose,
//                 balance: state.balance + action.payload.amount,
//             };
//         case "account/repayLoan":
//             return {
//                 ...state,
//                 loan: 0,
//                 loanPurpose: "",
//                 balance: state.balance - state.loan,
//             };
//         case  "account/loading" :
//             return {
//                 ...state,
//                 isLoading: true,
//             };
//         default:
//             return state;
//     }
// }
//
//
// function deposit(amount, currency) {
//     if (currency === "USD") {
//         return {type: "account/deposit", payload: amount};
//     }
//     return async function (dispatch, getState) {
//         dispatch({type: "account/loading"})
//         //API CALL
//         const host = 'api.frankfurter.app';
//         const response = await fetch(`https://${host}/latest?amount=${amount}&from=${currency}&to=USD`)
//         const data = await response.json();
//         console.log(data)
//         const converted = data.rates.USD;
//         dispatch({type: "account/deposit", payload: converted});
//         //return Action
//     }
// }
//
// function withdraw(amount) {
//     return {type: "account/withdraw", payload: amount};
// }
//
// function requestLoan(amount, purpose) {
//     return {type: "account/requestLoan", payload: {amount, purpose}};
// }
//
// function payLoan() {
//     return {type: "account/repayLoan"};
// }
//
// export {deposit, withdraw, requestLoan, payLoan};