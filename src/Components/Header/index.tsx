import '../../styles/variaveis.css'
import './styles.css'
export default function Header(){
    return (
        <header className="bg-primary flex items-center h-20 px-5 text-white font-medium">
            <div className="conatiner w-screen flex justify-between">
                <span className='text-xl font-semibold'>EncurtALL</span>
                <div className="nav">
                    <ul className='flex gap-4'>
                        <li>
                            <a href="" className='font-semibold'>Perfil</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}