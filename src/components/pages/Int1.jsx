import { Link, useParams } from "react-router-dom";
import int1Icon from "../../assets/photo/int1.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

function Int1(){

    const {id} = useParams();
    const [post, setPosts] = useState({});

    useEffect(() => {
        async function infoInt() {
            try{
                const response = await axios.get(`https://63c4a87b499082c2.mokky.dev/Ints/${id}`)
                setPosts(response.data);
            } catch(error) {
                console.log(error);
            }
        }
        infoInt();
    }, [id]);

    return(        
    <section class="mobile-block">
        <div class="back-button">
            <div class="container">
                <Link to="/HomePage" class="tag-button">Назад</Link>
            </div>
        </div>
        <div class="conatainer">
            <div class="post-detail-block">
                <h3 class="news-card__title">
                    {post.title}
                </h3>
                <span class="news-card__date">{post.data}</span>
                <p class="description">
                    {post.description} </p>
                <img src={post.imageUrl} alt={post.title}/>
                <span class="author">Источник: <strong class="light-success-text">{post.autor}</strong></span>
            </div>
        </div>
        
    </section>);
}

export default Int1; 