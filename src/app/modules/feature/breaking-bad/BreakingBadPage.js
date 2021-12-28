import React from 'react'
import { useFetch } from '@core/hooks/useFetch'

export const BreakingBadPage = () => {

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log(state);
    
    return (
        <>
            <h3>Breaking Bad Quotes</h3>   
            <hr />
        </>
    )
}
