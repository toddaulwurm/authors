import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorList from './AuthorList';
import AuthorForm from './AuthorForm'
import style from "./AuthorForm.module.css"

export default () => {
    const [authors, setAuthors]=useState([]);
    const [loaded, setLoaded]=useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[authors]);
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }
    
    return (
        <div className={style.inventory}>
            {/* <AuthorForm/>
            <hr/> */}
            <h2>CURRENT AUTHORS</h2>
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}