import Button from "../button";
import Spinner from "../spinner";
interface ActionProps {
    onAction: () => void,
    buttonText: string,
    styleButton: string,
    isLoad?: boolean
}

export function formAction({onAction, buttonText, styleButton, isLoad}: ActionProps){
    return (
        <Button.Root
            style = {styleButton}
            onAction={onAction}
        >
            {
                isLoad? 
                    <Spinner color = 'white'/>
                :
                <Button.Label color = {styleButton == 'leaked'? 'text-blue-600': 'text-white'}label = {buttonText}/>
            }
        </Button.Root>
    )
}