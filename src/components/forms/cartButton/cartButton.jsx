import styles from './cartButton.module.css'
import {BsCart4} from 'react-icons/bs'
import CartMenu from '@/components/cartMenu/cartMenu'
import { useState } from 'react'
export default function CartButton(){
    const [open,setOpen] = useState(false)
    return(
        <div>
            <BsCart4 
            size={40} 
            className={styles.icon}
            onClick={()=>{setOpen(!open)}}/>
            {open && <CartMenu/>}
        </div>
        
    )
}