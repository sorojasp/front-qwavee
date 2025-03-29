
import Transaction from "../interfaces/transaction/transaction.interface"


const getIncomes = (transactions: Transaction[]):number=>{

    console.log("transactions:", transactions)

    const incomes: Transaction[] = transactions.filter((transaction:Transaction)=> transaction.type === "income")
    if (incomes.length === 0) return 0
    const amountOfIncomes: number = incomes.reduce((acc:number, transaction:Transaction)=> acc + transaction.amount,0)
    return amountOfIncomes


}

export default getIncomes;