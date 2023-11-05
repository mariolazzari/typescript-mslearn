"use strict";
/*  Module 7: Working with external libraries
    Lab Start */
Object.defineProperty(exports, "__esModule", { value: true });
exports.conventionalLoanPayment = exports.interestOnlyPayment = void 0;
/*  TODO Add the import statement. */
const module07_loan_programs_1 = require("./module07_loan-programs");
/*  TODO Update the function calls. */
exports.interestOnlyPayment = (0, module07_loan_programs_1.calculateInterestOnlyLoanPayment)({
    principle: 30000,
    interestRate: 5,
});
exports.conventionalLoanPayment = (0, module07_loan_programs_1.calculateConventionalLoanPayment)({
    principle: 30000,
    interestRate: 5,
    months: 180,
});
console.log(exports.interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(exports.conventionalLoanPayment); //* Returns "The conventional loan payment is 237.24"
