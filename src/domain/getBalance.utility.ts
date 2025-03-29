
import Transaction from "../interfaces/transaction/transaction.interface"


const getBalance = (transactions: Transaction[], 
                    getExpenses:(t:Transaction[])=>number, 
                    getIncomes:(t:Transaction[])=>number):number=>{

    if (transactions.length === 0) return 0

    const expenses = getExpenses(transactions);
    const incomes = getIncomes(transactions);
    const balance = incomes - expenses

    return balance;
    





}


export default getBalance;