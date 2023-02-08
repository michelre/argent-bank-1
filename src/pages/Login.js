import {useState} from "react";


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault()
        console.log(username, password)
        fetch({
            method: 'POST',
            body: JSON.stringify({username, password}),
            url: 'http://locahost:3000/login',
        }).then((res) => res.json())
            .then(({token}) => {
                /* Dispatch une action qui met à jour le jeton dans le store */
                /* Rediriger vers la page /profile */
            })
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={login}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label><input type="text" id="username" onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label><input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    <button className="sign-in-button">Sign In</button>
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
                    {/* <!--  --> */}
                </form>
            </section>
        </main>
    )
}

export default Login
