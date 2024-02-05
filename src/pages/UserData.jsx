import { useSelector } from 'react-redux'
import classes from "../assets/sass/app.module.sass";

const UserData = () => {
  const user = useSelector(state => state.user)

  return (
    <div className={classes.data}>
      <h2>Data</h2>
        <span><p>Nickname:</p> {user.userNickname}</span>
        <span><p>Email:</p>{user.email}</span>
        <span><p>Password:</p> {user.password}</span>
    </div>
  )
}

export default UserData