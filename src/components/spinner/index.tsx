import {BeatLoader} from 'react-spinners';

interface SpinnerProps {
    size?: string
}
export default function Spinner({size}: SpinnerProps){
    return(
        <div className = 'w-full h-full flex items-center justify-center'>
            <BeatLoader 
                color = '#1d4ed8'
                size = {size? size : 8}
            />
        </div>
    )
}