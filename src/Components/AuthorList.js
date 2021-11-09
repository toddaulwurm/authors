import React from 'react'
import style from "./AuthorForm.module.css"
import axios from 'axios';
import { Link } from "react-router-dom"


    
const AuthorList = (props) => {
    const { removeFromDom } = props;
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            {props.authors.map( (author, i) =>{
                let url=`/authors/${author._id}`;
                return (
                <div className={style.items} key={i}>
                    <h2><a href={url}>{author.name}</a></h2> <p>~~~~~</p>  
                    <Link to={"/authors/" + author._id + "/edit"}>
                        <button>Edit</button>
                    </Link>                
                    <button onClick={(e)=>{deleteAuthor(author._id)}}>
                        Delete
                    </button>
                </div>)
            }
            )}
        </div>
    )
}
    
export default AuthorList;