import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import style from "./AuthorForm.module.css"
    
const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
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
    
    useEffect(() => {
        console.log(id)
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log("UE", res.data)
                setName(res.data.name);
            })
    }, []);
    
    const updateAuthor = e => {
        e.preventDefault();
            axios.put('http://localhost:8000/api/authors/' + id, {
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
    
    return (
        <div className={style.editor}>
            <h1>Update {name}</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name:</label><br />
                    <input type="text" name="Name" value={name} 
                    onChange={(e) => {handleName(e)}} />
                </p>
                <p>{nameError}</p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;