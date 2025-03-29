
type Props={
    type:string
    value:number,
  }
  

const Card = (props:Props) => {

 


    return (
        <>
            <div className="h-[300px] bg-white  rounded-[5px]">
                <div className="flex justify-between items-center mb-4 p-[5px]">
                    <div className="bg-red-100 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7a2 2 0 113 3.414l-7 7m2 2l7 7m-7-7l-2 2" />
                        </svg>
                    </div>
                    <div className="bg-red-200 text-red-600 rounded-full px-3 py-1 text-sm flex items-center">
                        6%
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                <div className="p-[5px]">
                    <div className="text-3xl font-bold mb-1">{props.type}</div>
                    <div className="text-sm text-gray-500">{props.value}</div>
                </div>

            </div>
        </>
    )
}


export default Card;