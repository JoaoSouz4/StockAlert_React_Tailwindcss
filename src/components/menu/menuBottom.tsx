import {BsPlusLg} from 'react-icons/bs';
import {FaClipboardList} from 'react-icons/fa';
import {AiOutlineUser} from 'react-icons/ai';
 

export function MenuBottom (){
    return(
        <div className = 'z-40 sticky bottom-0  p-4 border-t border-blue-400 w-full bg-white'>
            <nav className = ''>
                <ul className = 'flex justify-around w-full'>
                    <li className = 'border border-blue-400 rounded-full w-[3rem] h-[3rem] flex justify-center items-center'>
                        <FaClipboardList className = 'text-lg text-blue-700'/>
                    </li>

                    <li className = 'border border-blue-400 rounded-full w-[3rem] h-[3rem] flex justify-center items-center'>
                        <BsPlusLg className = 'text-lg text-blue-700'/>
                    </li>

                    <li className = 'border border-blue-400 rounded-full w-[3rem] h-[3rem] flex justify-center items-center'>
                        <AiOutlineUser className = 'text-lg text-blue-700'/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}