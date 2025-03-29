import Transaction from "../transaction/transaction.interface";

type ServerResponse = {

    result: boolean, 
    data: Transaction[],
    detail:string

}

export default ServerResponse;