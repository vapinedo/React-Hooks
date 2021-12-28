import React, { useEffect, useState } from 'react';

export const SimpleFormPage = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: ""
    });
    const { name, email } = formState;

    useEffect(() => {
        console.log("useEffect");
    }, []);

    const onInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };
    
    return (
        <>
            <h3>UseEffect on simple form</h3>   
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
