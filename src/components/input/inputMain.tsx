interface InputMainlProps {
    type: string,
    onChangeAction: () => void,
    placeholder: string,
}

export function InputMain({type, onChangeAction, placeholder}: InputMainlProps){
    return(
        <input
            className = 'w-full border border-blue-400 rounded-full p-3 focus:outline-blue-600'
            type = {type}
            onChange = {onChangeAction}
            placeholder = {placeholder}
        />
    )
}