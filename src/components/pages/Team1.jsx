import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import LoadingPost from '../LoadingPost';
import axios from 'axios';
import PostCard from '../PostCard';
import Error from '../Error';

function Team1() {

    const {id} = useParams();
    const [category, setCategory] = useState({});
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        async function fetchCategory() {
            try{
                const response = await axios.get(`https://63c4a87b499082c2.mokky.dev/category/${id}`);
                setCategory(response.data)
            } catch(e) {
                setIsError (true);
                console.log(e);
            } 
        }

        async function fetchPosts(){
            try{
                setIsLoading(true);
                const response = await axios.get('https://63c4a87b499082c2.mokky.dev/Teams  ');
                setPosts(response.data);
            } catch(error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
        fetchCategory();
    }, [id]);

    if (isError) {
        return <Error />;
    }

    return (
        <section class="mobile-block">
            <div>
                <div class="back-button">
                    <div class="container">
                       <Link to="/categories" class="tag-button">Назад</Link>
                    </div>
                </div>
                <h1 className="Name_team">{category.name}</h1>
            </div>
            <div class="all-news-block">
           
            {isLoading ? (<LoadingPost />) : (
                <>
                {posts.map((post, index) => {
                    return post.category === category.name ? (
                        <PostCard key={index} post={post} showLink={false} />

                    ) : null;
                })}
            </>
            
            )}
            </div>
            
        </section>
    );
}

export default Team1;
