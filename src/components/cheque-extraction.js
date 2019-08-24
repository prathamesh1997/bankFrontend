import React , { useState , useEffect } from 'react'
import Cheque from '../static/1.jpg'
import swal from 'sweetalert'
import axios from 'axios'

export default function ChequeExtraction(props){
        const { data , getBack , route  } = props;
        
        const handleVerify = id => (event) =>{
            event.preventDefault()
            swal("Verified successfully")
            .then(()=>{
                swal('Send to Giver Bank')
                .then(()=>{
                    props.history.push(`/payersBank?id=${id}`)
                })
            })
           
        }
        const handleVerifyUser = id => (event) =>{
            event.preventDefault();
            swal('User is verified')
            .then(async()=>{
                const response = await axios.post(`http://localhost:8080/api/verifyUser`,{"id":id});
                console.log(response);
                if(response.status === 200){
                    route.push('/')
                }
            })
            .catch(err=>{
                console.log(err);
            })
        }
   if(data){
    return(
        <React.Fragment>
            <div>
                {
                    getBack === false?<h3 className="text-center">{data.name} ,Results</h3>:
                    <h3 className="text-center">{data.receiver} ,Results</h3>
                }
                <br/>
              
                <div className="row">
                    <div className="col-sm">
                        <div class="form-group">
                        <label for="from">From</label>
                        <input type="text" name="from" value={data.name} class="form-control" id="from" aria-describedby="from" placeholder="From."/>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="form-group">
                        <label for="To">To.</label>
                        <input type="text" name="to" value={data.receiver} class="form-control" id="To" aria-describedby="to" placeholder="To."/>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="form-group">
                        <label for="chequeno">Cheque No.</label>
                        <input type="text" name="chequeno" value={data.chequeno} class="form-control" id="chequeno" aria-describedby="chequeno" placeholder="Cheque No."/>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                <div className="col-sm">
                    <div class="form-group">
                        <label for="amount">Amount.</label>
                        <input type="text" name="amount" value={data.amount} class="form-control" id="amount" aria-describedby="amount" placeholder="Amount."/>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="form-group">
                        <label for="Date">Date.</label>
                        <input type="text" name="datetime" value="27th august,2019" class="form-control" id="Date" aria-describedby="date" placeholder="Date."/>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="form-group">
                            <label for="image">Cheque.</label>
                            <br/>
                            <img src={Cheque} alt={data.name} width="80%"/>
                        </div>
                    </div>
                </div>
                {
                    getBack === false?
                    <button  onClick={handleVerify(data.id)} class="btn btn-primary">Verify & Save</button>
                    :<button onClick={handleVerifyUser(data.id)} class="btn btn-primary">Verify user</button>
                
                }
            </div>
        </React.Fragment>
    )
   }else{
        return(
            <div>
                <h4 className="text-center">Select the Data to view results.</h4>
               
            </div>
        )
   }
}