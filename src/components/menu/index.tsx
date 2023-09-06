import {RiMenu4Fill} from 'react-icons/ri';

export default function Menu(){
    return (
        <>
            <header className = ' z-40 bg-blue-600 flex justify-start items-center w-full px-3 py-4'>
                <div className = 'flex items-center'>
                    <RiMenu4Fill
                        className = 'text-white text-2xl'
                    />
                </div>
            </header>
        </>
        
    )
}