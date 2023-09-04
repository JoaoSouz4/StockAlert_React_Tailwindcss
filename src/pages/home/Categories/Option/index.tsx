interface OptionCategorieProps {
    label: string,
    action: () => void,
}

export function OptionCategorie({label, action}: OptionCategorieProps){
    const handleClick = () => {
        action();
    }
    return (
        <div
            className = 'bg-slate-200 rounded-lg p-3'
            onClick={handleClick}
        >
            <label>{label}</label>
        </div>
    )
}