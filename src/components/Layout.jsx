import { Outlet } from 'react-router'
import classes from "../assets/sass/app.module.sass";
const Layout = () => {
    return (
    <div className={classes.lay}>
      <Outlet/>
      <footer>
          <h3 className="love">05.02.24</h3>
      </footer>
    </div>
  )
}

export default Layout