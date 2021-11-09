
import React,{useState} from "react";
import axios from "axios";
import style from "./AuthorForm.module.css"
import {useHistory } from "react-router-dom";

export default ()=>{
    const [name,setName] = useState('');
    const history = useHistory();
    const [nameError, setNameError] = useState('');

    const handleName=e=>{
        setName(e.target.value)
        if(e.target.value.length>2){
            setNameError('')
        }
        else{
            setNameError('Name is too short!')
        }
    }

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors',{
            name,
        })
        .then(res => {
            if(!res.data.errors){
                history.push('/authors')
            }
            else{
                setNameError(res.data.errors.name.message)
            }
    })
        .catch(err => console.log(err));
    }

    return(
        <form onSubmit={onSubmitHandler} className={style.flexer}>
            <h1>Add an Author here!</h1>
            <label>Name:</label>
            <input type='text' onChange={(e)=>{handleName(e)}} value={name}/><br/>
            <p>{nameError}</p>
            <input type='submit' value='Add Author'/>
        </form>   
    )
}