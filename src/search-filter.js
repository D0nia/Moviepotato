import React, { Component } from 'react';
import {InputGroup,FormControl, Button} from 'react-bootstrap';
import SearchField from "react-search-field";
import './App.css'



const Search = ({value = '', onChange = () => {}}) => (
   <div className="name-filter">
       <input
           className="name-filter-text"
           type="text"
           value={value}
           onChange={(event) => {
               onChange(event.target.value)
           }} />
     </div>
)
 
export default  Search ;   
