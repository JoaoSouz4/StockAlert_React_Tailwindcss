import {BeatLoader} from 'react-spinners';

interface SpinnerProps {
    size?: string
    color?: String
}
export default function Spinner({size, color}: SpinnerProps){
    return(
        <div className = 'w-full h-full flex items-center justify-center'>
            <BeatLoader 
                color = { color == 'white'? '#FFFFFF' : '#1d4ed8'}
                size = {size? size : 8}
            />
        </div>
    )
}