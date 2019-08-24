import React , { useState , useEffect } from 'react'
import axios from 'axios'
import ChequeExtraction from './cheque-extraction'

export default function Hdfc(props){
    
    const [data,setData] = useState();
    
    const query = new URLSearchParams(props.location.search);
    const id = query.get('id')

    useEffect(()=>{
            (async()=>{
                const response = await axios.get(`http://localhost:8080/api/customer/${id}`);
                setData(response.data[0])
            })()
    },[])
       
        return(
            <div>
                <h4 className="text-center">HDFC Bank</h4>
                <br/>
                {
                    data?<div>
                       <ChequeExtraction data={data} getBack={true} route={props.history}/>
                    </div>
                    :<div>
                        <h5 className="text-center">Fetching data ...</h5>
                    </div>
                }
            </div>
        )
}