import {NavLink} from 'react-router-dom'
import "../index.css"
import classes from "../assets/sass/app.module.sass";


const Navbar = () => {
    return (
        <div className={classes.nav}>
            <nav>
                <ul>
                    <li >
                        <NavLink to={"/form"}>Registration</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/data-base"}>My data</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar