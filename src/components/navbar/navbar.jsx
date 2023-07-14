import styles from './navbar.module.css'
import Logo from '@/components/logo/logo.jsx'
import Input from '@/components/forms/input/input.jsx'
import CartButton from '@/components/forms/cartButton/cartButton'
import CartMenu from '@/components/cartMenu/cartMenu'
export default function Navbar(){
    return (<nav className={styles.navbar}>
        <Logo/>
        <div className={styles.search}>
        <Input type='text' placeholder='Buscar' fullWidth/>
        </div>
        <CartButton/>
   
        
    </nav>)
}