import { getGifs } from "../Helpers/getGifs";
import { useState, useEffect } from "react";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {
         
            getGifs( category )
        .then( img => {
            setState({
                data: img,
                loading: false
            })}
        )
         
    
        
    } , [category] )

    return state

}