

import Transaction from "../interfaces/transaction/transaction.interface"


const getExpenses = (transactions: Transaction[]):number=>{

    console.log("transactions:", transactions)

    const expenses: Transaction[] = transactions.filter((transaction:Transaction)=>transaction.type === "expense")
    if (expenses.length === 0) return 0
    const amountOfExpenses: number = expenses.reduce((acc:number, transaction:Transaction)=> acc + transaction.amount,0)
    return amountOfExpenses;


}


export default getExpenses;