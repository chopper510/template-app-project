import { Link } from "react-router-dom";

function PostCard ({ post, showLink = true }) {
    return (
        <div className="news-card">
            <div className="container">
                <h3 className="news-card__title">
                    {post.title}
                </h3>
                <span className="news-card__date">{post.category}</span>
                <span className="news-card_category">{post.date}</span>
                {showLink && <Link to={`/post/${post.id}`} className="tag-button">Узнать</Link>}
            </div>
        </div>
    );
}

export default PostCard;
