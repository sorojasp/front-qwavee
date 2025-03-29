
import Transaction from "../interfaces/transaction/transaction.interface";


const sortTransactions=(transactions:Transaction[])=>{
    
    transactions.sort((transactionA:Transaction, transactionB:Transaction) => 
        new Date(transactionB.date).getTime() - new Date(transactionA.date).getTime());

    console.log("transactions: ", transactions)

    return transactions

} 


export default sortTransactions
