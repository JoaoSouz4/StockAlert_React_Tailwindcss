import Button from "../button";
interface ActionProps {
    onAction: () => void,
    buttonText: string,
    styleButton: string
}

export function modalAction({onAction, buttonText, styleButton}: ActionProps){
    return (
        <Button.Root
            style = {styleButton}
            onAction={onAction}
        >
            <Button.Label color = {styleButton == 'leaked'? 'text-blue-600': 'text-white'}label = {buttonText}/>
        </Button.Root>
    )
}