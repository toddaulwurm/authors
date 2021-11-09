
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,Link,BrowserRouter } from "react-router-dom";
import style from "./AuthorForm.module.css"
    
const Detail = (props) => {
    const [author, setAuthor] = useState({})
    const { id } = useParams();
    const { removeFromDom } = props;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' +id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, []);
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)

            })
            .catch(err => console.error(err));
    }
    
    return (
        <div className={style.single}>
            <h1>Title: {author.name}</h1>
            <Link to={"/authors/" + author._id + "/edit"}>
                Edit
            </Link>
            <Link to={"/authors/"}>
                <button onClick={(e)=>{deleteAuthor(author._id)}}>
                    Delete
                </button>
            </Link>
        </div>
    )
}
    
export default Detail;