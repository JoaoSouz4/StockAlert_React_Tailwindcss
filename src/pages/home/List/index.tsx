import { ListItem } from "./ListItem"

export default function List(){

    const date = new Date();

    return(
        
        <div className = 'bg-slate-200 rounded-xl w-full h-full p-2 overflow-hidden'>
            <div className="max-h-full overflow-y-auto">
                <div className = 'flex flex-col gap-2 p-2'>
                    <ListItem name = 'A32' user = 'joao' dataRegister={date} status = 'few' />
                    <ListItem name = 'A32' user = 'joao' dataRegister={date} status = 'few' />
                    <ListItem name = 'A32' user = 'joao' dataRegister={date} status = 'few' />
                    <ListItem name = 'A32' user = 'joao' dataRegister={date} status = 'few' />
                    <ListItem name = 'A32' user = 'joao' dataRegister={date} status = 'few' />
                    <ListItem name = 'A32' user = 'joao' dataRegister={date} status = 'few' />
                </div>
            </div>
        </div>
        
    )
}