import React, { useState } from 'react';

export const FormWithCustomHook = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: ""
    });
    const { name, email } = formState;

    const onInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };
    
    return (
        <>
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
            </div>
        </>
    )
}
