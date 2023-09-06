import {Outlet} from 'react-router-dom';

export default function Main(){
    return (
        <main className = 'p-4 h-full overflow-hidden'>
            <Outlet />
        </main>
    )
}