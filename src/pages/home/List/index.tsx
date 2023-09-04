import { ListItem } from "./ListItem"

export default function List(){

    const date = new Date();

    return(
        <div className = 'h-full bg-slate-100 w-full p-3 overflow-y-auto rounded-lg'>
            <div className = 'flex flex-col gap-3'>
                <ListItem
                    name = 'S21'
                    user = 'Jão'
                    dataRegister={date}
                    status = 'few'
                />
                <ListItem
                    name = 'S21'
                    user = 'Jão'
                    dataRegister={date}
                    status = 'empty'
                />

                <ListItem
                    name = 'S21'
                    user = 'Jão'
                    dataRegister={date}
                    status = 'few'
                />
                <ListItem
                    name = 'S21'
                    user = 'Jão'
                    dataRegister={date}
                    status = 'empty'
                />

                <ListItem
                    name = 'S21'
                    user = 'Jão'
                    dataRegister={date}
                    status = 'few'
                />
                <ListItem
                    name = 'S21'
                    user = 'Jão'
                    dataRegister={date}
                    status = 'empty'
                />
            </div>
        </div>
    )
}