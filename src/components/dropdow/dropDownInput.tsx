import Input from "../input";

interface DropDownInputProps {
    placeholder: string,
    onChangeAction: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type: string,
    value: any
}

export function DropDownInput ({onChangeAction, type, value}: DropDownInputProps){
    return (
        <Input.Root>
            <Input.Main
                value = {value}
                isDisabled = {true}
                onChangeAction = {onChangeAction}
                type = {type}
            />
        </Input.Root>
    )
}