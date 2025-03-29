
import './styles-tables.scss'

import Transaction from '../../interfaces/transaction/transaction.interface'

type Props={
    transactions: Transaction[]

}

const Table = (props:Props) => {


    


    return (
        <>
            <div className='flex justify-center '>

                <table>
                    <tbody>
                        <tr>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>

                        {props.transactions.slice(0,5).map((transaction:Transaction, index:number) => 
                        <tr key={index}>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.date}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>

        </>
    )
}


export default Table;