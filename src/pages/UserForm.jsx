import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {userAction} from '../store/userActions'
import classes from "../assets/sass/app.module.sass";


const UserForm = () => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')


    const dispatch = useDispatch()

    const onCLick = () => {
        dispatch(userAction({userNickname: userName, email: userEmail, password: userPassword}))
    }

    const noReboot = (e) => {
        e.preventDefault()
    }
    return (
        <div className={classes.form}>
            <form onSubmit={noReboot}>
                <h1>Login</h1>
                <input
                    type="text" placeholder='nickname'
                    value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <input
                    type="email" placeholder='gmail'
                    value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
                <input
                    type="text" placeholder='password'
                    value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
                <button onClick={onCLick}><span>save</span></button>
            </form>
        </div>
    )
}

export default UserForm