import {Outlet} from 'react-router-dom';
import Alert from '../alert';

export default function Main(){
    return (
             <main className = ' relative p-4 h-full overflow-hidden'>
                <Outlet />
                <Alert />
            </main>
    )
}