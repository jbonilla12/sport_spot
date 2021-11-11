import React from 'react'
import { db, auth } from '../firebase'
import { withRouter } from 'react-router'

export const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(null)

    const ProcesarDatos = e =>{
        e.preventDefault()
        if(!email.trim()||!password.trim()){
            setError('escribe correctamente tus credenciales')
            return
        }else{
            login()
        }
    }

    const login = React.useCallback(async()=>{
        try{
            const res = await auth.signInWithEmailAndPassword(email,password)
            console.log(res.user)
            setEmail('')
            setPassword('')
            setError(null)
            props.history.push('/admin/inicio')
        }catch(error){
            if(error.code === 'auth/user-not-found'){
                setError('usuario no identificado')
            }if(error.code === 'auth/wrong-password'){
                setError('Contraseña invalida')
            }if(error.code === 'auth/invalid-email'){
                setError('Email no identificado')
            }
            console.log(error)
            setEmail('')
            setPassword('')
        }
    },[email, password, props.history])

    return (
        <div className="mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={ProcesarDatos}>
                        <h1 className="text-center" id="login"><strong>Login</strong></h1>
                        <hr/>
                        {
                            error &&(
                                <span className="text-danger"> { error } </span>
                            )
                        }
                        <input 
                            type="email" 
                            className="form-control mb-2"
                            placeholder="Escribe tu email"
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                        />
                        <input 
                            type="password" 
                            className="form-control mb-2"
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Ingresar contraseña"
                            value={password}
                        />
                        <div className="d-grid gap-2 mt-2">
                            <button 
                                type="submit" 
                                className="btn btn-dark btn-lg btn-block">Acceder
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Login)
