import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {

    const navigate = useNavigate();

    const [ values, handleInputChange ] = useForm({
        username: ''
    });

    const { username } = values;
    
    const handleLogin = () => {
        /* navigate('/'); -> puedo volver con <- */

        /* crea una nueva entrada en la historia con el replace: true */
        
        navigate('/', {
            replace: true
        });
    }

    return (
        <div className="container mt-5" style={{'textAlign': 'center'}}>
            <form className="form">
                <h1>Welcome</h1>
                <hr />
                <div className="form-group">    
                    <button
                        className="btn btn-primary mt-4"
                        onClick={ handleLogin }
                    >
                        Go
                    </button>
                </div>

            </form>
            
        </div>
    )
}
