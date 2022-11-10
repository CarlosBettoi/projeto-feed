import {PencilLine} from 'phosphor-react' 
import { Avatar } from './Avatar';

import styles from "./Sidebar.module.css";

export function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />


            <div className={styles.profile}>
                <Avatar src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?cs=srgb&dl=pexels-kelvin-valerio-617278.jpg&fm=jpg&_gl=1*zn3gbb*_ga*OTYxOTc4MTM2LjE2NjgwMzIyNDc.*_ga_8JE65Q40S6*MTY2ODA4NDQ3MS4yLjEuMTY2ODA4NDYzMC4wLjAuMA.." />
                
                <strong>Green Cat</strong>
                <span>Web Developer</span>

            </div>

            <footer>

                <a href="#">

                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>


            </footer>


        </aside>

    );


}