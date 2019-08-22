import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component{
    
    render(){
       return(
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg"> 
                    <Link to="/" className="navbar-brand">BankBot</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link"></Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link"></Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/user" className="nav-link"></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
       )
    }
}