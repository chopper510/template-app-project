import PostCard from "./PostCard";
import backIcon from "../assets/photo/menu-btn.png"
import {useEffect, useState} from "react";
import axios from "axios";
import LoadingPost from "./LoadingPost";
import Error from "./Error";

function PostList () {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts(){
            try{
                setIsLoading(true);
                const response = await axios.get('https://63c4a87b499082c2.mokky.dev/Ints');
                setPosts(response.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (isError) {
        return <Error />;
    }

    return(
        <div class= "all-news-block">
            {isLoading ? (<LoadingPost />) : (
                <>
                {posts.map((post) => ( 
                    <PostCard key={post.id} post={post}/>
                ))}
                </>  
            )}
        </div>
    );
}

export default PostList;