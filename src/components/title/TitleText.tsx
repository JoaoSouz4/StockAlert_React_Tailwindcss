
interface TitleProps {
    text: string
    size?: string | number,
    position?: string,
    color?: string,
    isBold?: string
}
export function TitleText({text, size, position, color, isBold}: TitleProps){
    return(
        <h1 
            className = {
                `
                w-full
                ${size? `${size}`: 'text-md'}
                ${position? `${position}`: 'text-start'}
                ${color? `${color}`: 'text-start'}
                ${isBold && `${isBold}`}
                `
            }
        >
            {text}
        </h1>
    )
}