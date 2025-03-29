//import components 
import { AsideMenu } from '../aside-menu/index';
import { Header } from '../header/index';
import { Card } from '../card/index';
import { Chart } from '../chart/index';
import { Table } from '../table/index';
import { SalesCard } from '../salescard/index';

import {useState, useEffect} from 'react'

import Transaction from '../../interfaces/transaction/transaction.interface'
import ServerResponse from '../../interfaces/server-response/server-response'
import getExpenses from "../.././domain/getExpenses.utility"
import getIncomes from "../.././domain/getIncomes.utility"
import getBalance from '../../domain/getBalance.utility';
import sortTransations from '../../domain/sortTransactions.utility';


const serverEndPoint = 'http://localhost:3000/transactions'


const Dashboard = () => {

    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [incomes, setIncomes] = useState<number>(0)
    const [expenses, setExpenses] = useState<number>(0)
    const [balance, setBalance] = useState<number>(0)
    


    useEffect(()=>{

        fetch(serverEndPoint)
        .then(response => response.json())
        .then((data:ServerResponse) => {
            console.log(data.data)
            setTransactions(data.data);
            setIncomes(getIncomes(data.data));
            setExpenses(getExpenses(data.data));
            setBalance(getBalance(data.data,getExpenses,getIncomes))

        })
        .catch(error => console.error(error));

    }, [])


    return (
        <div className='flex flex-col '>
            <Header></Header>
            <div className="grid grid-cols-1 lg:grid-cols-[244px_1fr] md:grid-cols-[244px_1fr] ">

                <div className="hidden lg:flex md:flex  h-full">
                    <AsideMenu></AsideMenu>
                </div>



                <div className="bg-[#f5f6f7]">

                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 md:center lg:grid-cols-3  gap-4  ">

                        <Card type="incomes" value={incomes}></Card>
                        <Card type="expenses" value={expenses}></Card>
                        <Card type="balance" value={balance}></Card>
                        
                    </div>

                    <div className="flex justify-center">

                        <div className="p-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">

                            <SalesCard />
                            <Chart />
                        </div>
                    </div>

                    <div className='pb-[30px] '>
                        <Table transactions={sortTransations(transactions)}></Table>
                    </div>

                </div>

            </div>

        </div>
    )
}







export default Dashboard;