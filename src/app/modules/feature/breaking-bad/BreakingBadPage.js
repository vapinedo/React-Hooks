import React from 'react'
import { useFetch } from '@core/hooks/useFetch'

export const BreakingBadPage = () => {

    const { isLoading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    const { author, quote } = !!data && data[0];
    
    return (
        <>
            <h3>Breaking Bad Quotes</h3>   
            <hr />

            { 
                isLoading && 
                <div className="alert alert-info">loading...</div>
            }  

            {
                !isLoading && 
                <blockquote className="blockquote text-end">
                    <p>{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            }
        </>
    )
}
