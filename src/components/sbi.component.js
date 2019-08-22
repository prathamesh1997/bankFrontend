import React , {  useEffect } from 'react'
import axios from 'axios'

export default function BankBot(){

        useEffect(()=>{
            
            (async()=>{
                const response = await axios.get('http://localhost/api/users#')
               
            })()
        },[])

        return(
            <div>
                <p>SBI portal</p>
            </div>
        )
}