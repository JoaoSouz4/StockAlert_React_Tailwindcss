
interface TitleProps {
    text: string
    size?: string | number,
    position?: string,
    color?: string
}
export function TitleText({text, size, position, color}: TitleProps){
    return(
        <h1 
            className = {
                `
                w-full
                font-bold
                ${size? `${size}`: 'text-md'}
                ${position? `${position}`: 'text-start'}
                ${color? `${color}`: 'text-start'}
                `
            }
        >
            {text}
        </h1>
    )
}