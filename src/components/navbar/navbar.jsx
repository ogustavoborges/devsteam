import styles from './navbar.module.css'
import {BsCart4} from 'react-icons/bs'
import Logo from '@/components/logo/logo.jsx'
import Input from '@/components/forms/input/input.jsx'
export default function Navbar(){
    return (<nav className={styles.navbar}>
        <Logo/>
        <div className={styles.search}>
        <Input type='text' placeholder='Buscar' fullWidth/>
        </div>
        <BsCart4 size={40}/>
        
    </nav>)
}