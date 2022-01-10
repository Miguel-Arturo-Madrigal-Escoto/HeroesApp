import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {

    const navigate = useNavigate();

    const [ values, handleInputChange ] = useForm({
        username: localStorage.getItem('username') || ''
    });

    const { username } = values;
    
    const handleLogin = () => {
        /* navigate('/'); -> puedo volver con <- */

        /* crea una nueva entrada en la historia con el replace: true */
        localStorage.setItem('username', username)
        
        navigate('/', {
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <form className="form">
                <h1>Welcome: { username }</h1>
                <hr />
                <div className="form-group">    
                    <input 
                        type="text"
                        id="exampleFormControlInput1"
                        className="form-control"
                        placeholder="username"
                        name="username"
                        onChange={ handleInputChange }
                    />
                    <button
                        className="btn btn-primary mt-4"
                        onClick={ handleLogin }
                    >
                        Login
                    </button>
                </div>

            </form>
            
        </div>
    )
}
