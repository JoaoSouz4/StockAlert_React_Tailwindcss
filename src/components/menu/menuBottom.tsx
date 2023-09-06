import {BsPlusLg} from 'react-icons/bs';
import {FaClipboardList} from 'react-icons/fa';
import {AiOutlineUser} from 'react-icons/ai';
import { Link } from 'react-router-dom';

export function MenuBottom (){
    return(
        <div className = ' p-4 border-t border-blue-400 w-full bg-white'>
            <nav className = ''>
                <ul className = 'flex justify-around w-full'>
                    <li className = 'border border-blue-400 rounded-full w-[3rem] h-[3rem] flex justify-center items-center'>
                        <Link to = '/'>
                            <FaClipboardList className = 'text-lg text-blue-700'/>
                        </Link>
                    </li>

                    <li className = 'border border-blue-400 rounded-full w-[3rem] h-[3rem] flex justify-center items-center'>
                        <Link to = '/register'>
                            <BsPlusLg className = 'text-lg text-blue-700'/>
                        </Link>
                    </li>

                    <li className = 'border border-blue-400 rounded-full w-[3rem] h-[3rem] flex justify-center items-center'>
                        <Link to = 'login'>
                            <AiOutlineUser className = 'text-lg text-blue-700'/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}