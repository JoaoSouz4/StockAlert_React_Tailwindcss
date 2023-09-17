import Title from "../title";

export function FormTitle({title}: {title: string}){
    return (
        <Title.Root>
            <Title.Text text={title} size = 'text-lg' position= 'text-center' color = 'text-blue-700'/>
        </Title.Root>
    )
}