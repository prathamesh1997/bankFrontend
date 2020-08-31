// A=P(1+r/n)^n*t  compound interest
//  A= (P*r*n)/100 simple interest

import moment from "moment"

export function FdFormula(principal, rate, month){
   
    let roi = parseFloat(rate);
    let years = month/12;
    let tenure = moment().add(month,"M")
    let interestPayout = parseInt((principal*roi*years)/100);
    let maturityAmount = principal + interestPayout;

    
     return {
         maturity:maturityAmount,
         tenure:tenure,
         interestPayout:interestPayout
     }
    
}