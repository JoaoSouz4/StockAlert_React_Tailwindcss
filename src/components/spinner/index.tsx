import {BeatLoader} from 'react-spinners';


export default function Spinner(){
    return(
        <div className = 'w-full h-full flex items-center justify-center'>
            <BeatLoader 
                color = '#1d4ed8'
                size = {8}
            />
        </div>
    )
}