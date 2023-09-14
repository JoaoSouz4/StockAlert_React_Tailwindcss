
export function ItemStatus({status}: {status: string}){

    return(
        <div className = 'flex justify-start w-full'>
            <div className = {`w-[2.3rem] h-[1rem]  rounded-full ${status == 'empty'? 'bg-red-400': 'bg-yellow-300'}`}>
            
            </div>
        </div>
    )
}