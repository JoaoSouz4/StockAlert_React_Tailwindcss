import Input from "../input";

interface DropDownInputProps {
    placeholder: string,
    onChangeAction: () => void,
    type: string,
}

export function DropDownInput ({placeholder, onChangeAction, type}: DropDownInputProps){
    return (
        <Input.Root>
            <Input.Main 
                placeholder = {placeholder}
                onChangeAction = {onChangeAction}
                type = {type}
            />
        </Input.Root>
    )
}