import { Pencil } from "phosphor-react";
import { Avatar } from "./avatar";
import styles from './sidebar.module.css'

export function Sidebar(){
    return <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1533319417894-6fbb331e5513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=60" />
    
    <div className={styles.profile}>
        <Avatar src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=417&q=80" />
        <strong>Iuri Reis</strong>
        <span>Web Developer</span>
    </div>

    <footer>
        <a href="#">
          < Pencil size={20} />
            Editar seu Perfil
        </a>
    </footer>
    </aside>
    ;
}