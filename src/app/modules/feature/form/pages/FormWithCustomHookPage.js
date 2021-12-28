import React from 'react';
import { useForm } from '@core/hooks/useForm';

export const FormWithCustomHookPage = () => {

    const [formState, onInputChange] = useForm({
        name: "",
        email: "",
        password: ""
    });
    const { name, email, password } = formState;

    const onSubmit = (e) => {   
        e.preventDefault();
        console.log(formState);
    };
    
    return (
        <form onSubmit={onSubmit}>
            <h3>Form with custom hook</h3>   
            <hr />

            <div className="form-group">
                <input 
                    name="name" 
                    type="text" 
                    value={name}
                    autoComplete="off"
                    placeholder="Tu nombre"
                    onChange={onInputChange}
                    className="form-control mt-4" />

                <input 
                    name="email" 
                    type="text" 
                    value={email}
                    autoComplete="off"
                    placeholder="Tu email"
                    onChange={onInputChange}
                    className="form-control mt-4" />

                <input 
                    name="password" 
                    type="password" 
                    value={password}
                    placeholder="Tu password"
                    onChange={onInputChange}
                    className="form-control mt-4" />
            </div>

            <button type="submit" className="btn btn-primary mt-4">Guardar</button>
        </form>
    )
}
