import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function TeamDetail() {


    const {id} = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {

        async function fetchPosts(){
            try{
                const response = await axios.get(`https://63c4a87b499082c2.mokky.dev/Teams/${id}`);
                console.log(response.data);
                setPost(response.data);
            } catch(error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, [id]);

    return (
        <div>
            <h1>Player: {post.title}</h1>
        </div>
    );
}

export default TeamDetail;