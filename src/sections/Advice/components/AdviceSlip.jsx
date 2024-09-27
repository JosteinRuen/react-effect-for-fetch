import { useState, useEffect } from "react";
import FavouriteSlipsList from './FavouriteSlipsList'

export default function AdviceSlip() {
    const[advice, setAdvice] = useState([])

    useEffect(() =>{
        const fetchAdvice = async () => {
            try{
                const response = await fetch('https://api.adviceslip.com/advice')
                if(!response.ok){
                    throw Error("Couldn't fetch art data")
                }
                const data = await response.json()
                setAdvice(data)
              } catch (error) {
                console.error("Error fetching the art:", error)
              }
            }

            fetchAdvice()
        }, [])


    

    return(
        <section className="advice-slip">
            <h3>advice</h3>
            <p>{advice.advice}</p>
            <button>get more advice</button>
            <button >get more advice</button>
        </section>
    
    );
}