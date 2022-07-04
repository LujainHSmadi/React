import { useEffect } from "react";
import { useState } from "react";
import useLogin from './useLogin.jsx';
function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    let [message, handelSubmit] = useLogin(name, password);





    return (
        <form className="container" onSubmit={handelSubmit}>
            <h1>{message}</h1>
            <div className="form-outline mb-4">
                <input type='text' id="form2Example1" className="form-control" onChange={(e) => setName(e.target.value)} />
                <label className="form-label" >Username</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                <label className="form-label" >Password</label>
            </div>

            <button className="btn btn-primary btn-block mb-4">Sign in</button>

        </form>
    );
}
export default Login;