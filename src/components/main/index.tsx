import {Outlet} from 'react-router-dom';
import Alert from '../alert';

export default function Main(){
    return (
             <main className = ' relative pt-4 pb-4 h-full overflow-hidden'>
                <Outlet />
                <Alert />
            </main>
    )
}