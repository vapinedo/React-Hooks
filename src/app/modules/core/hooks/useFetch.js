import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const useFetch = (url) => {

    const isComponentMounted = useRef(true);

    useLayoutEffect(() => {
        return () => {
            isComponentMounted.current = false;
        };
    }, []);

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

                if (isComponentMounted.current) {
                    setState({
                        data,
                        error: null,
                        isLoading: false
                    });
                }
                
            });
    }, [url]);

    return state;
}
