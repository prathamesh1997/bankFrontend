import React , { useState , useEffect } from 'react'
import axios from 'axios'
import ChequeExtraction from './cheque-extraction'

export default function BankBot(props){
            const [users,setUsers] = useState([])
            const [data,setData] = useState()

        useEffect(()=>{
            
            (async()=>{
                       const response = await axios.get('http://localhost:8080/api/users');
                       setUsers(response.data)              
            })()
        },[])
       
        const handleViewResult = index => () =>{
           
            let Userdata = users[index];
            setData(Userdata)
        }
        console.log(data)

        return(
            <div>
                <h4 className="text-center">SBI Bank (Cheque pending details)</h4>
                <br/>
                <table class="table">
                    <thead  class="thead-light">
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Cheque No.</th>
                        <th scope="col">status</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((data,index)=>(
                                <tr>
                                    <th scope="row">{data.id}</th>
                                    <th>{data.name}</th>
                                    <th>{data.chequeno}</th>
                                    <th>{data.status}</th>
                                    <th><button type="button" onClick={handleViewResult(index)} class="btn btn-primary">View</button></th>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
                    <hr/>
                    <ChequeExtraction data={data} history={props.history} getBack={false}/>
            </div>
        )
}