import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({ 
        data: null,
        error: null,
        isLoading: true
    })

    useEffect(() => {

        setState({
            data: null,
            error: null,
            isLoading: true
        });        

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setState({
                    data,
                    error: null,
                    isLoading: false
                });
            });
    }, [url]);

    return state;
}
