
interface TitleProps {
    text: string
}
export function TitleText({text}: TitleProps){
    return(
        <h1>{text}</h1>
    )
}